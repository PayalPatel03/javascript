let buttons=document.querySelectorAll('button');
let array=['+','-','*','/'];
let display=document.querySelector('#display');

buttons.forEach((button)=>{
    button.addEventListener('click',(e)=>{
        let value=e.target.innerText;
        let displayValue=display.value;
        let last=displayValue.slice(-1);
        let removeLastStr=display.value.slice(0,-1);
        // console.log(last);
        
        // console.log(removeLastStr);
        

        if(value=='='){
            
            try {
                display.value=eval(display.value);
            } catch (error) {
                display.value='';
                
            }
        }
        else if(value=='C'){
            display.value='';
        }
        else if(array.includes(value)){
            if(last == value){
                display.value=display.value;
            }
            else{
                if(array.includes(last)){
                    console.log(removeLastStr);                
                    display.value=removeLastStr+value;
                }
                else{
                    display.value+=value;
                }
            }
        }
        else{
            display.value+=value;
        }
    })
})
