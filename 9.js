function isPythTriplet(a,b,c) {
    return a*a + b*b == c*c;
}

for (let i = 1; i < 1000/3; i++) {
    for (let j = i; j < 1000; j++) {
        let c = 1000 - i - j;

        if (isPythTriplet(i,j,c)) {
            console.log(i*j*c);
            break;
        }
    }
}

// can also use that every pyth triple can be expressed as 
//  { m^2 - n^2, 2 m n , m^2 + n^2 }  and solve by hand