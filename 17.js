function numberToWord(n) {
    const ones = ["", "one", "two", "three", "four", "five", "six", "seven", "eight", "nine"];
    const teens = ["ten", "eleven", "twelve", "thirteen", "fourteen", "fifteen", "sixteen", "seventeen", "eighteen", "nineteen"];
    const tens = ["", "", "twenty", "thirty", "forty", "fifty", "sixty", "seventy", "eighty", "ninety"];
    
    if (n === 0) return "";
    if (n < 10) return ones[n];
    if (n < 20) return teens[n - 10];
    if (n < 100) return tens[Math.floor(n / 10)] + (n % 10 ? "" + ones[n % 10] : "");
    if (n < 1000) return ones[Math.floor(n / 100)] + "hundred" + (n % 100 ? "and" + numberToWord(n % 100) : "");
    if (n < 10000) return numberToWord(Math.floor(n / 1000)) + "thousand" + (n % 1000 ? " " + numberToWord(n % 1000) : "");

    return "";
}

let sum = 0;
for (let i = 1; i <= 1000; i++) { 
    sum += numberToWord(i).length;
}
console.log(sum);