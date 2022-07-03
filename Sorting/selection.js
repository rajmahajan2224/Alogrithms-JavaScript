function selectionSort(arr) {
  for(let i = 0; i < arr.length; i++) {
    let min = i;
    for(let j = 0; j < arr.length; j++) {
      if(arr[j] < arr[min]) {
        min = j;
      }
    }
    if(i !== min) {
      let temp = arr[i];
      arr[i] = arr[min];
      arr[min] = temp;
    }
  }
  return arr;
}
console.log(selectionSort([15, 9, 16, 1, 8, 3]));