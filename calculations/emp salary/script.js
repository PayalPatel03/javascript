let Base_sal=5000;
let HRA=Base_sal*50/100;
let MA=Base_sal*5/100;
let DA=Base_sal*8/100;
let TA=Base_sal*2/100;
let Pf=Base_sal*15/100;
let PT=100;
let TDS=Base_sal*10/100;

let gross= HRA + MA + DA + TA + PT + Pf + TDS;
let Netsalary=Base_sal-gross;

console.log(`Salary is : ${Base_sal}`);
console.log(`House rent allowance is :${HRA}`)
console.log(`Medical allowance is :${MA}`);
console.log(`Dearness allowance is:${DA}`);
console.log(`Traveling allowance is :${TA}`);
console.log(`Provident fund :${Pf}`);
console.log(`Professional tax is:${PT}`);
console.log(`Net salary is :${Netsalary}`);