const { primesupto } = require("./utils.js");

const primes = primesupto(10000);
function numDevisors(n) {
    const factorization = new Map();

    for (const p of primes) {
        while (n % p == 0) {
            factorization.set(p, (factorization.get(p) ?? 0) + 1);
            n /= p;
        }
    }

    let distinctFactors = 1;
    for (const [_, val] of factorization.entries()) {
        distinctFactors *= (val+1);
    }

    return distinctFactors;
}

let trN = 0;
console.log(numDevisors(28));

for (let i = 1;;i++) {
    trN += i;

    console.log(trN);
    if (numDevisors(trN) > 500) {
        console.log(trN);
        break;
    }
}

//suprisingly solved it in the intended fast way, thought there was something better
//calculate devisors by counting the subsets of the prime factorization as a multiset