//arithmetic operator
let a=10;
let b=5;
//swaping without third variable
let c=20;
let d=30;
//swaping using third varaible
let x=12;
let y=11;

// let p=200;
// let q='200';

// console.log(p+q);
// console.log(p-q);

console.log(a+b);
console.log(a-b);
console.log("Multiplication: "+ a*b);
console.log("Division: "+ a/b);
console.log("10 square is:"+ a**2);
console.log("5 cube is:"+ b**3);
console.log("10 square is:"+ a**6);
console.log("Post increment:"+ a++);
console.log("Pre increment:"+ ++a);

//swaping without third variable
console.log("Before swaping c is:"+ c);
console.log("Before swaping d is:"+ d);
c=c+d;
d=c-d;
c=c-d;

console.log("After swaping c is:"+ c);
console.log("After swaping d is:"+ d);

//swaping with third varaible
console.log("Before swaping x is:"+ x);
console.log("Before swaping y is:"+ y);
let temp=x;
x=y;
y=temp;

console.log("After swaping x is:"+ x);
console.log("After swaping y is:"+ y);

// //garde calc
// let marks = parseInt (prompt("Enter marks"));
// let avg = marks; 
// console.log("The average marks is: " + avg);

// let grade = avg >= 80 ? 'A' : 
//             avg >= 60 ? 'B' : 
//             avg > 50 ? 'C' : 
//             'Pass class';

// console.log(grade);
 




