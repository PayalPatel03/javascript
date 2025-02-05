

let amt = 25000;
let rate;
let time = 5; 


rate= amt>=50000 ? 12/100 : amt>=35000 ? 9/100  : amt>=25000 ? 6/100  : 3/100;

let simpleInterest = (amt * rate * time);

console.log("Principal Amount is: ",amt);
console.log("Rate of interest is:",rate);
console.log("Number of years is: ",time);
console.log("Simple Interest:",simpleInterest);





                  