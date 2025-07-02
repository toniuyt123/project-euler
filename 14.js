function collatzLength(n){
    let l = 1;

    while(n != 1) {
        if (n % 2) {
            n = 3*n + 1;
        } else {
            n /= 2;
        }
        l ++;
    }

    return l;
}

let max = 0;
let res = 0;
for (let i = 1; i < 1000000; i++) {
    let l = collatzLength(i);
    if (l > max) {
        max = l;
        res = i;
    }
}

console.log(max);
console.log(res);
//optimizations can be made but this one is fairly fast even like this