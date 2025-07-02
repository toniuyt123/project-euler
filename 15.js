const N = 21;
const A = Array(N);
for(let i = 0; i < N; i++) {
    A[i] = Array(N);
}

for (let i = 0; i < N; i++) {
    A[0][i] = 1;
    A[i][0] = 1;
}

for(let i = 1; i < N; i++) {
    for(let j = 1; j < i; j++) {
        A[i][j] = A[i-1][j] + A[i][j-1];
        A[j][i] = A[i-1][j] + A[i][j-1];
    }
    A[i][i] = A[i][i-1] + A[i-1][i];
}

console.log(A[20][20]);

//could have solved faster wby just
// (2n choose n) choose which steps are down and which up
let res = 1;
for(let i = 1; i <= 20; i++) {
    res *= ((20 + i) / i );
}

console.log(res);