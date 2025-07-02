function isprime(n) { for (let i = Math.ceil(Math.sqrt(n)); i > 1; i--) {if(n % i == 0) return false;} return true; }
function primesupto(n) {
    if (n < 2) {
        return [];
    }

    const res = [];
    const limit = n;
    const sieve = Array(limit).fill(true);
    res.push(2);
    for(i = 4; i < limit; i+=2) {
        sieve[i] = false;
    }
    for (let i = 3; i < limit; i+=2) {
        if (sieve[i]) {
            res.push(i);
            for (let j = i*i; j < limit; j += 2*i) {
                sieve[j] = false;
            }
        }
    }

    return res;
}


module.exports = {
    isprime,
    primesupto
};