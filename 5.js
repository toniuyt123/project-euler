let i = 2520; while(true) { let ans = true; for (let j = 1; j <= 20; j++) if (i % j != 0){ ans = false; break; }  if(ans){console.log(i);break} i++ } 

// or with prime factorization and including the largest powers of the primes
