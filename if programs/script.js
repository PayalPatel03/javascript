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

  