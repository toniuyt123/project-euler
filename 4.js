function isPalindrome(n) { let str = n.toString(); for (let i = 0; i < str.length / 2; i ++) { if(str[i] != str[str.length - 1 - i]) return false;} return true }
let max = 0; for (let i = 100; i < 1000; i++) for(let j = 100; j < 1000; j ++) if (isPalindrome(i*j) && max < i*j) max = i*j
