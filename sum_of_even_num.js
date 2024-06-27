const prompt = require("prompt-sync")();
let b=prompt("enter a number :");
// let b=prompt("enter a number:");
sum=0;
for(i=0;i<b.length;i++)
{
    if(b[i]%2==0)
    {
        sum+=Number(b[i])
    }
}
console.log(`sum of EVEN digits in a Number is :`,sum)