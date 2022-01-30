let num = prompt('enter the number here');
let n = num;
let freq = [];
let lastDigit;

for(i=0;i < 10; i++){
    freq[i] = 0;
}


while(n != 0){

    lastDigit = n % 10;

    n = n / 10;
    n = parseInt(n);

    freq[lastDigit]++;
}

document.write(`Original Number = ${num}`);
document.write('<br>');

for(i = 0; i < 10; i++){
    document.write(`Frequency of ${i} = ${freq[i]}`+ `<br>`);
}