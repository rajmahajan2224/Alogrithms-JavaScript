function recursivefib(n) {
  if(n < 1) {
    return 1;
  }
  return recursivefib(n - 1);
}
console.log(recursivefib(3));