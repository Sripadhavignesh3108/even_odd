const prompt = require("prompt-sync")();
let a=prompt("enter a number :");
// let a=prompt("enter a number:");
sum=0;
for(i=0;i<a.length;i++)
{
    if(a[i]%2==1)
    {
        sum+=Number(a[i])
    }
}
console.log(`Sum of ODD digits in given number is : `,sum)
