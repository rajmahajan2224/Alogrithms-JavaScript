var isAnagram = function(s, t) {
  if(s.length !== t.length) return false;
  
  const lookup = {};
  for(let i = 0; i < s.length; i++) {
      let letter = s[i];
      lookup[letter] ? lookup[letter] += 1 : lookup[letter] = 1;
  }
  for(let j = 0; j < t.length; j++) {
      let letter = t[j];
      if(!lookup[letter]) return false;
      else lookup[letter] -= 1;
  }
  return true;
};
console.log(isAnagram("anagram", "nagaram"));