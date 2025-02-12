//4 types to create a function

//1=> Simple

// let num=10;
//  function simple(){
//     console.log(`Inner function: ${num}`);
//  }
//  simple();
//  console.log(`Outer fnction: ${num}`);


 //2=> by using variable name
// let number=40;
//  let variable=function(){
//     console.log(`Inner function: ${number}`);
//  }
//  variable();
//  console.log(`Outer function: ${number}`);

//3=> by using arrow function

// let nu=33;
// let arrow=()=>{
//     console.log(`Inner function: ${nu}`);
//     console.log("Hello everyone..");
    
// }
// arrow();

//4=> IIFE {immediately invoked function expression}
// let n=98;
// (function(){
//     console.log("Good afternoon!!");
// })();

//Closure nested function

 let num = 21;
 let printNum1=()=>{
     num =25;
    let printNum2=()=>{
         num=30;
        console.log("inner " + num); 
    }
    printNum2();
    console.log("main "+ num);
 }
 printNum1();
 console.log("outer "+ num);
 

