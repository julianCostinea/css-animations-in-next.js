import React from "react";

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
  }
  var newList = new LinkedList();
  newList.add("Cat");
  newList.add("Dog");
  newList.add("Tiger");
  console.log(newList.size());

  return <div></div>;
};

export default LinkedListPractice;
