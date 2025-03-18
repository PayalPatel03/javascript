//Data abstraction:Hiding and overriden
// class Colour {
//     print() {
//         console.log("Welcome to the world of colours.");
//     }
// }
// class Red extends Colour {
//     print() {
//         console.log("This is for red colour.");
//     }
// }
// class Purple extends Colour {
//     print() {
//         console.log("This is for purple colour");
//     }
// }

// let obj = new Colour();
// obj.print();

// let obj1 = new Purple();
// obj1.print();

class Employee {
    constructor(name, age, salary) {
        this.E_name = name;
        this.age = age;
        this.salary = salary;
    }

    setEmp(name, age, salary) {
        this.E_name = name;
        this.age = age;
        this.salary = salary;
    }

    getEmp() {
        console.log("Employee Name: " + this.E_name + " Age: " + this.age + " Salary: " + this.salary);
    }
}

// Creating an object with proper constructor parameters
let a = new Employee("Ramesh", 33, 23456);
a.getEmp();
