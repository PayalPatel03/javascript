// Grade cala


let avg = parseInt(prompt("Enter the Average score")); 
let marks; 

marks= avg>=90 ? "A" :
        avg>=80 ? "B" :
        avg>=60 ? "C" :
        avg>=40 ? "D" :
        "Pass Class";
    
// Print the message.
console.log("Average is",avg); 
 console.log("Grade is",marks);
        
