let E_name = "Ritika"
let Base_salary = prompt("Enter salary : ")
let role = "Employe"
let exp = 2

let bonus_amount = Base_salary>=25000 && exp>=5? newSalary=B_salary*0.5
        :Base_salary>=20000 && exp>=3? newSalary=Base_salary*0.35
        :Base_salary>=15000 && exp>=2? newSalary=Base_salary*0.30
        :newSalary=Base_salary*0.1

console.log(`Employee name is : ${E_name}`)
console.log(`Salary is : ${Base_salary}`)
console.log(`Role is : ${role}`)
console.log(`Experience is : ${exp}`)
console.log(`Bonus on salary of ${Base_salary} is ${bonus_amount}`);