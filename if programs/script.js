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
