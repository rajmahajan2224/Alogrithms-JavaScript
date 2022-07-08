function gcd(a, b) {
  let r;
  while((a % b) > 0) {
      r = a % b;
      a = b;
      b = r;
  }
  return b;
}
console.log(gcd(270, 192));