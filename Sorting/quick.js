// Quick Sort Function Implementation

function quickSort(arr, left = 0, right = arr.length - 1) {
  if(left < right) {
      let pivotIndex = pivot(arr, left, right);
      quickSort(arr, left, pivotIndex - 1);
      quickSort(arr, pivotIndex + 1, right);
  }
  return arr;
}
console.log(quickSort([4, 8, 2, 1, 9, 10, 5, 3]));