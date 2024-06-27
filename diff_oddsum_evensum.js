const prompt = require("prompt-sync")();
let diff=prompt("enter a number : ");
evensum=0;
oddsum=0;
for(i=0;i<diff.length;i++)
{
    if(diff[i]%2==0)
   {
    evensum+=Number(diff[i])
   } 
   else if(diff[i]%2==1)
   {
    oddsum+=Number(diff[i])
   }
}
console.log(`Difference between ODD sum and EVEN sum : `,evensum-oddsum)
