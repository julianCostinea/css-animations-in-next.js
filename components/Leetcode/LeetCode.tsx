import React, { useEffect } from "react";

interface mapInterface {
  "(": string;
  "[": string;
  "{": string;
}

interface hashMapInterface {
  [key: number]: number;
}

const LeetCode: React.FC = () => {
  const isPalindrome = (input: number) => {
    const inputArray = input.toString().split("");
    let left = 0;
    let right = inputArray.length - 1;

    while (left < right) {
      if (inputArray[left] !== inputArray[right]) {
        return false;
      }
      left++;
      right--;
    }
    return true;
  };
  console.log("IS PALINDROME:");
  console.log(isPalindrome(325848523));

  const twoSum = (array: number[], target: number) => {
    let map = new Map();
    for (let index = 0; index < array.length; index++) {
      if (map.get(array[index]) === undefined) {
        map.set(target - array[index], index);
      } else {
        return [map.get(array[index]), index];
      }
    }
  };
  console.log("TWO SUM:");
  console.log(twoSum([1, 2, 3, 4], 3));

  const produceExceptSelf = (array: number[]): number[] => {
    return array.map((element, index1) => {
      return array.reduce((acumulator, currentItem, index2) => {
        return acumulator * (index1 === index2 ? 1 : currentItem);
      }, 1);
    });
  };

  console.log("produceExceptSelf:");
  console.log(produceExceptSelf([1, 2, 3, 4]));

  const romanNumbers = (string: string) => {
    if (!string || string.length === 0) {
      return 0;
    }
    const map = new Map([
      ["I", 1],
      ["V", 5],
      ["X", 10],
      ["L", 50],
      ["C", 100],
      ["D", 500],
      ["M", 1000],
    ]);
    let index = string.length - 1;
    let result = map.get(string[index]) as number;
    while (index > 0) {
      const current = map.get(string[index]) as number;
      const previous = map.get(string[index - 1]) as number;

      if (previous >= current) {
        result += previous;
      } else {
        result -= previous;
      }

      index--;
    }

    return result;
  };
  console.log("romanNumbers:");
  console.log(romanNumbers("CVII"));

  const longestCommonPrefix = (array: string[]): string => {
    for (let i = 0; i < array[0].length; i++) {
      for (let myString of array) {
        if (myString[i] !== array[0][i]) {
          return myString.slice(0, i);
        }
      }
    }
    return array[0];
  };
  console.log("longestCommonPrefix:");
  console.log(longestCommonPrefix(["cow", "cobra", "cola"]));

  const mergeTwoSortedArrays = (
    array1: number[],
    array2: number[]
  ): number[] => {
    let newArray: number[] = [];
    let index1 = 0;
    let index2 = 0;
    while (index1 < array1.length || index2 < array2.length) {
      if (array1[index1] < array2[index2]) {
        newArray.push(array1[index1]);
        index1++;
      } else {
        newArray.push(array2[index2]);
        index2++;
      }
      if (index2 === array2.length) {
        for (let index = index1; index < array1.length; index++) {
          newArray.push(array1[index1]);
          index1++;
        }
      }
    }
    return newArray;
  };
  console.log("mergeTwoSortedArrays:");
  console.log(mergeTwoSortedArrays([1, 2, 3, 5, 6], [1, 2, 4, 7]));

  const removeDuplicateFromSortedArray = (
    array: number[]
  ): (number | null)[] => {
    return array.map((element, index) => {
      return element !== array[index + 1] ? element : null;
    });
  };
  console.log("removeDuplicateFromSortedArray:");
  console.log(removeDuplicateFromSortedArray([1, 1, 2, 2, 2, 3]).sort());

  const validParentheses = (string: any) => {
    const stack = [];
    const map: mapInterface = {
      "(": ")",
      "[": "]",
      "{": "}",
    };

    for (let i = 0; i < string.length; i++) {
      let character = string[i];
      if (map[character as keyof mapInterface]) {
        stack.push(map[character as keyof mapInterface]);
      } else if (character !== stack.pop()) {
        return false;
      }
      console.log(stack);
    }

    return !stack.length;
  };
  console.log("validParentheses:");
  console.log(validParentheses("({})"));

  const happyNumber = (input: number): boolean => {
    const hashMap: hashMapInterface = {};
    const recursion = (number: number): boolean => {
      const array = number.toString().split("");
      let newNumber = 0;

      for (let i = 0; i < array.length; i++) {
        newNumber += Number(array[i]) ** 2;
      }

      if (newNumber === 1) return true;

      if (hashMap[newNumber]) return false;
      hashMap[newNumber] = newNumber;
      return recursion(newNumber);
    };

    return recursion(input);
  };
  console.log("HAPPY NUMBER:");
  console.log(happyNumber(19));

  const bestTimeToBuyAndSellStock = (prices: number[]): number => {
    // const min = Math.min(...prices);
    // const max = Math.max(...prices);
    // return max-min;
    let max = 0;
    let min = prices[0];

    for (let i = 1; i < prices.length; ++i) {
      if (min > prices[i]) {
        min = prices[i];
      }
      if (prices[i] > max) {
        max = prices[i];
      }
    }

    return max - min;
  };
  console.log("Best Time to Stock:");
  console.log(bestTimeToBuyAndSellStock([8, 1, 2, 5, 9]));

  const numberOf1s = (number: number): number => {
    return number.toString().replaceAll("0", "").length;
  };
  console.log("numberOf1s:");
  console.log(numberOf1s(1101100));

  const climbStairs = (stairs: number): number => {
    const tab: hashMapInterface = {};
    for (let i = 1; i <= stairs; i++) {
      if (i === 1) {
        // Base Case
        tab[1] = 1;
      } else if (i === 2) {
        // Base case
        tab[2] = 2;
      } else {
        tab[i] = tab[i - 1] + tab[i - 2]; // Set our tab
      }
    }
    return tab[stairs];
  };
  console.log("climbStairs:");
  console.log(climbStairs(6));

  const removeElement = (nums: number[], val: number) => {
    let zeroStartIdx = 0;
    for (let i = 0; i < nums.length; i++) {
      if (nums[i] !== val) {
        //for modifying the beginning of the array
        nums[zeroStartIdx] = nums[i];
        zeroStartIdx++;
      }
    }
    return zeroStartIdx;
  };
  console.log("removeElement:");
  console.log(removeElement([1, 2, 3, 3, 4, 5], 3));

  const plusOne = (digits: number[]): number[] => {
    for (let i = digits.length - 1; i >= 0; i--) {
      digits[i]++;
      if (digits[i] > 9) {
        digits[i] = 0;
      } else {
        return digits;
      }
    }
    digits.unshift(1);
    return digits;
  };
  console.log("plusOne:");
  console.log(plusOne([1, 2, 3]));

  return <div></div>;
};

export default LeetCode;
