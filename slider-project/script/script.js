let slideIndex=0;
let slideItem=document.querySelectorAll('.slide-item');

let disp;aySlide=(slideIndex)=>{
    for(let i=0;i<slideItem.length;i++){
        slideItem[i].classList.remove('active');
    }

}