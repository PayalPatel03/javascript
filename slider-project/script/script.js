let slideIndex=0;
let slideItem=document.querySelectorAll('.slider-item');
console.log(slideItem[0]);

let currSlide=(n)=>{
    displaySlide(slideIndex+=n);
    console.log(slideIndex);
    
}

let displaySlide=(slideIndex)=>{
    for(let i=0;i<slideItem.length;i++){
        slideItem[i].classList.remove('active');
    }
    slideItem[slideIndex].classList.add('active');
}
