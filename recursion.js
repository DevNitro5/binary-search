let defaultCompare = (a, b) => (a > b ? 1 : a < b ? -1 : 0);

function binarySearchWithRecursion(
  array,
  element,
  compare = defaultCompare,
  left = 0,
  right = array.length - 1
) {
  const middle = Math.floor((right + left) / 2);

  console.table({
    array,
    middleIndex: middle,
    elementToFind: element,
    middleElement: array[middle],
});

if (left > right) return -1;

  switch (compare(element, array[middle])) {
    case -1:
      return binarySearchWithRecursion(
        array,
        element,
        compare,
        left,
        middle - 1
      );

    case 1:
      return binarySearchWithRecursion(
        array,
        element,
        compare,
        middle + 1,
        right
      );

    case 0:
      return middle;
  }
}

// [1,2,3]
// [1]

console.log(binarySearchWithRecursion([0, 1, 2, 3, 4], 0));
