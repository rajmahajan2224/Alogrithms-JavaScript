function towerOfHanoi(n, fromRod, toRod, usingRod) {
  if(n === 1) {
      console.log(`Move disk 1 from ${fromRod} to ${usingRod}`);
      return;
  }
  towerOfHanoi(n-1, fromRod, usingRod, toRod);
  console.log(`Mive disk ${n} from ${fromRod} to ${usingRod}`);
  towerOfHanoi(n-1, usingRod, toRod, fromRod);
}
towerOfHanoi(3, 'A', 'C', 'B');