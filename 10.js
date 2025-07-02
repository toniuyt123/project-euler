const {isprime} = require("./utils.js");

let sum = 2;
for(let i = 3; i < 2000000; i += 2) {
    if (isprime(i)) {
        sum += i;
    }
}

console.log(sum);