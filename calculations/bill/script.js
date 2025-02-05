let pr_name = "Kinderjoy" //
let pr_price = 50; 
let Pr_qty = 3; 
let total = pr_price*Pr_qty; 


let discount = total>=1500 ? 15/100 :
               total>=1000 ? 10/100 : 
               total>=800 ? 8/100 
               :null;       
                  
let final_price = total - (total*discount); 


console.log("Product Name:",pr_name);
console.log("Product Price:",pr_price);
console.log("Product Quantity:",Pr_qty);
console.log("Total:",total);
console.log("Discount:",discount);
console.log("Net Total:",final_price);