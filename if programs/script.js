//P R O G-1 number is positive or not
let num = 3;


if (num > 0) {
    console.log(num + " is posivtive number");
}
else {
    console.log(num + "is negative number");
}

//P R O G -2 even or odd
let numb = 30;

if (numb % 2 === 0) {
    console.log(numb + " is even number!!");
}
else {
    console.log(numb + " is odd number!!");

}

//P R O G-3 dividible bu 3 and 5
let val = 25;
if (val % 3 === 0) {
    if (val % 5 === 0) {
        console.log(val + " is divisible by both 3 and 5");
    } else {
        console.log(val + " is divisible by 3 but not by 5");
    }
} else {
    console.log(val + " is not divisible by 3");
}

//P R O G-4 grade calc
let marks = 9;
if (marks >= 80) {
    console.log( 'marks: ' + marks + " marks:Grade A");
}
else if (marks >= 60) {
    console.log( 'marks: ' + marks + " marks:Grade B");
}
else if(marks>50) {
    console.log( 'marks: ' + marks + " marks:Grade C");
}
else{
    console.log ( 'marks: ' + marks + " Pass Classs");
    
}

//P R O G-5 login password
let user="xyz";
let pass="123$";

if(user==="xyz"){
    if(pass="123$"){
        console.log("Login Succesfull!!");
    }
    else{
        console.log("Invalid Password!!");
    }
}
else{
    console.log("Unauthorized user");   
}

//P R O G-6 Temperature classification
let temp=20;
if(temp>30){
    console.log('Temperature:' + temp + " Very hot..");
}
else if(temp>=20){
    console.log('Temperature:' + temp + " Warm...");
}
else{
    console.log('Temperature:' + temp + " Very cold...");
}

//P R O G-7 Day of week from number
let day_num=2;
let day_name="Tuesday";

if(day_num===1 && day_name==="Monday"){
    console.log('Day number: ' + day_num + "---->" + " Day name: " + day_name );    
}
else if(day_num===2 && day_name==="Tuesday"){
    console.log('Day number: ' + day_num + "---->" + " Day name: " + day_name ); 
}
else if(day_num===3 && day_name==="Wednesday"){
    console.log('Day number: ' + day_num + "---->" + " Day name: " + day_name ); 
}
else if(day_num===4 && day_name==="Thursday"){
    console.log('Day number: ' + day_num + "---->" + " Day name: " + day_name ); 
}
else if(day_num===5 && day_name==="Friday"){
    console.log('Day number: ' + day_num + "---->" + " Day name: " + day_name ); 
}
else if(day_num===6 && day_name==="Saturday"){
    console.log('Day number: ' + day_num + "---->" + " Day name: " + day_name ); 
}
else if(day_num===7 && day_name==="Sunday"){
    console.log('Day number: ' + day_num + "---->" + " Day name: " + day_name ); 
}
else{
    console.log("Invalid !!..");
}

//P R O G-8 Discount criteria
let memb=true;
let spending=1000;

if(memb){
    if(spending>500){
        console.log("Amount is : " + spending + " --:" + " You get a 30% discount.");
    }
    else{
        console.log("You get a 10% discount.");
    }
}
else{
    console.log("You are not the member of this shop..");
}

//P R O G-9 string is empty or not

let str="";

if(str===""){
    console.log("String is empty");
}
else{
    console.log("String is not empty.");
}

//P R O G-10 leap year
let year=2002;
if((year%4===0 && year%100!==0) || (year%400===0)) 
{
    console.log("Year : " + year + " is leap year");  
}
else{
    console.log("Year : " + year + " is not a leap year");  
}

//P R O G-11 both are positive or not
let a=40;
let b=-20;
if(a>0){
    if(b>0){
        console.log( a + " & " + b + " Both are positive numbers..");   
    }
    else{
        console.log(a + " is positive & " + b + " is negative");
    }
}
else{
    console.log(a+" is not positive"); 
}

//P R O G-12 Season based on month
let month = 10;
let season = "";
if (month === 12 || month === 1 || month === 2) {
 season = "Winter";
} else if (month >= 3 && month <= 5) {
 season = "Summer";
} else if (month >= 6 && month <= 8) {
 season = "Monsoon";
} else if (month >= 9 && month <= 11) {
 season = "Bin mausmi varsad";
} else {
 season = "Invalid month";
}
console.log("Month " + month + " is in " + season + ".");

// P R O G-13 voting criteria
let age=25;
let citizen=true;

if(age>=18){
    if(citizen){
        console.log("You are eligible for voting");
    }
    else{
        console.log("You are not eligible for voting");
    }
}
else{
    console.log("You are small kid..");
    
}

// P R O G-14 password checker
let password = "123$";

if (password.length >= 8) {
    console.log("Password is valid.");
   } 
else {
    console.log("Password must be at least 8 characters long.");
   }

//P R O G-15 movie rating eigiblity

let movie_age=18;
 if(movie_age>=18){
    console.log("You are eligible for watching movie");
 }
 else{
    console.log("You are not eligible for watching movie");
 }

 //P R O G-16 prime number
 // Program 16: Check if a number is prime
// let primeCandidate = 17;
// let isPrime = true;
// if (primeCandidate <= 1) {
//  isPrime = false;
// } else {
//  for (let i = 2; i < primeCandidate; i++) {
//  if (primeCandidate % i === 0) {
//  isPrime = false;
//  break;
//  }
//  }
// }
// if (isPrime) {
//  console.log(primeCandidate + " is a prime number.");
// } else {
//  console.log(primeCandidate + " is not a prime number.");
// }

