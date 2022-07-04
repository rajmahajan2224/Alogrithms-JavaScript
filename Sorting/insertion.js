function insertionSort(arr) {
  for(let i = 1; i < arr.length; i++) {
    let key = arr[i];
    for(var j = i - 1; j >= 0 && arr[j] > key; j--) {
      arr[j + 1] = arr[j];
    }
    arr[j + 1] = key;
  }
  return arr;
}
console.log(insertionSort([20, 12, 15, 18, 25, 2, 13]));