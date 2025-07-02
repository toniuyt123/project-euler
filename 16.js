// wihtout bignums
// let start = "1";
// for (let i = 0; i < 1000; i++) {
//     let remainder= 0;
//     let res = "";
//     for (let j = 0; j < start.length; j++) {
//         let current = remainder;
//         current += 2*(start[start.length-1-j] - '0');    
        
//         if (j == start.length - 1) {
//             res = current + res;
//         } else {
//             res = (current %10) + res;
//         }
//         remainder = Math.floor(current/10);
//     }
//     start = res;
    
//     //console.log(res);
// }

// let sum = 0;
// for(let i = 0; i < start.length; i++) {
//     sum += (start[i] - '0');
// }

console.log( [...(2n ** 1000n).toString()].reduce((a, b) => a + +b, 0));

// thought there was some cool formula or something but after not being able to figure it out i made it like this and
// from the discussion seems like this is the answer 