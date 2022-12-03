const defaultCompare = (a, b) => (a > b ? 1 : a < b ? -1 : 0);

// bug
function binarySearchWithArraySplitting(
  array,
  element,
  compare = defaultCompare
) {
  if (array.length === 0) return -1;

  const middle = Math.floor(array.length / 2);
  const comparison = compare(element, array[middle]);

  if (comparison === 0) return middle;

  const [left, right] =
    comparison === -1 ? [0, middle - 1] : [middle + 1, array.length];

  const subIndex = binarySearchWithArraySplitting(
    array.slice(left, right),
    element,
    compare
  );

  return subIndex === -1 ? -1 : subIndex + left;
}

console.log(binarySearchWithArraySplitting([1, 2, 3, 4, 5, 6], 3));
