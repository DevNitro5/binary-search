/* Typical comparison function */
let defaultCompare = (a, b) => (a > b ? 1 : a < b ? -1 : 0);

/* Version 1:
    O(n)
    Fixed memory
    Loops
*/

// [1,2,3,4,5]
let binarySearchWithLoops = (array, element, compare = defaultCompare) => {
  let left = 0;
  let right = array.length - 1;

  while (left <= right) {
    let middle = Math.floor((left + right) / 2);
    console.table({
      arr: array.slice(left, right + 1),
      array,
      left,
      right,
      middle,
      compareResult: compare(array[middle], element),
      arrayMiddleVal: array[middle],
      element,
    });

    switch (compare(element, array[middle])) {
      case -1: {
        right = middle - 1;
        break;
      }

      case 1: {
        left = middle + 1;
        break;
      }

      default: {
        console.table({
          arr: array.slice(left, right + 1),
          array,
          left,
          right,
          middle,
          compareResult: compare(array[middle], element),
          arrayMiddleVal: array[middle],
          element,
        });
        return middle;
      }
    }
  }

  return -1;
};

console.log(binarySearchWithLoops([1, 2, 3, 4, 5, 6], 6));
