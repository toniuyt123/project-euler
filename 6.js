let nsum = 1; let diff = 0; for(let i = 2; i <= 100; i++) { diff+=2*i*nsum; nsum+=i; } console.log(diff);

// smart accumulation of the diff 
