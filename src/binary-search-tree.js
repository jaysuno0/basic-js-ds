const { Node } = require('../extensions/list-tree.js');


class BinarySearchTree {
  constructor() {
    this.tRoot = null;
  }

  root() {
    return this.tRoot;
  }


  add(data) {
    this.tRoot = addTo(this.tRoot, data);

    function addTo(node, data) {
      if (!node) return new Node(data);

      if (node.data === data) return node;

      if (data < node.data) node.left = addTo(node.left, data);
      else node.right = addTo(node.right, data);

      return node;
    }
  }


  lookFor(node, data) {
    if (!node) return null;

    if (node.data === data) return node;

    return data < node.data ? this.lookFor(node.left, data) : this.lookFor(node.right, data);
  }


  has(data) {
    return Boolean(this.lookFor(this.tRoot, data));
  }


  find(data) {
    return this.lookFor(this.tRoot, data);
  }


  remove(data) {
    this.tRoot = removeNode(this.tRoot, data);

    function removeNode(node, data) {
      if (!node) return null;

      if (data < node.data) {
        node.left = removeNode(node.left, data);
        return node;
      } else if (node.data < data) {
        node.right = removeNode(node.right, data);
        return node;
      } else {
        let minRight = node.right;

        if (!node.left && !node.right) return null

        if (!node.left) {
          node = node.right;
          return node;
        }

        if (!node.right) {
          node = node.left;
          return node;
        }

        while (minRight.left) {
          minRight = minRight.left;
        }
        
        node.data = minRight.data;
        node.right = removeNode(node.right, minRight.data);

        return node;
      }
    }
  }


  min() {
    if (!this.tRoot) return;

    let node = this.tRoot;
    while (node.left) node = node.left;
    return node.data;
  }


  max() {
    if (!this.tRoot) return;

    let node = this.tRoot;
    while (node.right) node = node.right;
    return node.data;
  }
}


module.exports = {
  BinarySearchTree,
};
