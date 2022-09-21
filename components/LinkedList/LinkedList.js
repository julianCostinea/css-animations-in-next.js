import React from "react";

//linked list implementation
const LinkedListPractice = () => {
  function LinkedList() {
    let length = 0;
    let head = null;

    const Node = function (element) {
      this.element = element;
      this.next = null;
    };
    this.size = function () {
      return length;
    };
    this.head = function () {
      return head;
    };
    this.add = function (element) {
      var node = new Node(element);
      if (head === null) {
        head = node;
        length++;
      } else {
        var currentNode = head;
        while (currentNode.next) {
          currentNode = currentNode.next;
        }
        currentNode.next = node;
        length++;
      }
    };
    this.remove = function (element) {
      var currentNode = head;
      var previouseNode;
      if (currentNode.element === element) {
        head = currentNode.next;
        length--;
      } else {
        while (currentNode.element !== element) {
          previouseNode = currentNode;
          currentNode = currentNode.next;
        }
        previouseNode.next = currentNode.next;
        length--;
      }
    };
    this.indexOf = function (element) {
      var currentNode = head;
      var index = -1;

      while (currentNode) {
        index++;
        if (currentNode.element === element) {
          return index;
        }
        currentNode = currentNode.next;
      }

      return -1;
    };
    this.elementAt = function (index) {
      var currentNode = head;
      var count = 0;
      while (count < index) {
        count++;
        currentNode = currentNode.next
      }
      return currentNode.element;
    };
    this.addAt = function (index, element) {
      var node = new Node(element);

      var currentNode = head;
      var previousNode;
      var currentIndex = 0;

      if (index > length) {
        return false;
      }

      if (index === 0) {
        node.next = currentNode;
        head = node;
      } else {
        while (currentIndex < index) {
          currentIndex++;
          previousNode = currentNode;
          currentNode = currentNode.next;
        }
        node.next = currentNode;
        previousNode.next = node;
      }
      length++;
    }
    this.removeAt = function (index) {
      var currentNode = head;
      var previousNode;
      var currentIndex = 0;
      if (index < 0 || index >= length) {
        return null
      }
      if (index === 0) {
        head = currentNode.next;
      } else {
        while (currentIndex < index) {
          currentIndex++;
          previousNode = currentNode;
          currentNode = currentNode.next;
        }
        previousNode.next = currentNode.next
      }
      length--;
      return currentNode.element;
    }
  }

  //linked list reverse function
  function reverseList(linkedList) {
    let head = linkedList.head;
    if (head === null) return;

    let currentNode = head;
    let prevNode = null;
    let nextNode = null;

    // traverse list and adjust links
    while (currentNode) {
      nextNode = currentNode.next;
      currentNode.next = prevNode;
      prevNode = currentNode;
      currentNode = nextNode;
      nextNode = null;
    }
    head = prevNode; // reset head
    return head;
  }
  var newList = new LinkedList();
  newList.add("Cat");
  newList.add("Dog");
  newList.add("Tiger");
  console.log(newList.size());

  //Binary search of sorted array
  let recursiveBinarySearch = function (arr, x, start, end) {

    // Base Condition
    if (start > end) return false;

    // Find the middle index
    let mid = Math.floor((start + end) / 2);

    // Compare mid with given key x
    if (arr[mid] === x) return true;

    // If element at mid is greater than x,
    // search in the left half of mid
    if (arr[mid] > x)
      return recursiveBinarySearch(arr, x, start, mid - 1);
    else

      // If element at mid is smaller than x,
      // search in the right half of mid
      return recursiveBinarySearch(arr, x, mid + 1, end);
  }

  // Driver code
  let arr = [1, 3, 5, 7, 8, 9];
  let x = 5;

  if (recursiveBinarySearch(arr, x, 0, arr.length - 1)) {
    console.log('element found');
  } else {
    console.log('element not found');
  }

  //object deepClone
  const deepClone = obj => {
    if (obj === null) return null;
    let clone = Object.assign({}, obj);
    Object.keys(clone).forEach(
      key =>
      (clone[key] =
        typeof obj[key] === 'object' ? deepClone(obj[key]) : obj[key])
    );
    if (Array.isArray(obj)) {
      clone.length = obj.length;
      return Array.from(clone);
    }
    return clone;
  };
  return <div></div>;
};

export default LinkedListPractice;
