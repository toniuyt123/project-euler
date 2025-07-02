let f1 = 1, f2 = 2, sum = 2; let current = f2; while(f2 + f1 <= 4000000) { current = f1+f2; f1 = f2; f2 = current; if(current % 2 == 0)sum += current; } sum;
