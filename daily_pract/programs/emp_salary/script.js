//Employ Salary
let emp_name='Hulk';
let baseSal=10000;
let HRA=1000;
let MA=750;
let DA=200;
let TA=500;

let PF=550;
let PT=600;
let TDS=600;

let gross=baseSal+HRA+MA+DA+TA;
let totalSal=gross-PF-PT-TDS;

console.log("Employ name: ",emp_name);
console.log("Base Salary: ",baseSal);
console.log("House rent allowance: ",HRA);
console.log("Medical allowance: ",MA);
console.log("Dearness allowance: ",DA);
console.log("Travelling allowance: ",TA);
console.log("Provident Fund: ",PF);
console.log("Professional Tax: ",PT);
console.log("Tax reducted source: ",TDS);
console.log("Gross salary: ",gross);
console.log("TOTAL SALARY: ",totalSal);

