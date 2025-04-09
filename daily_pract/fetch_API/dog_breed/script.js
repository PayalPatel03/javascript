let breeds=document.getElementById('breeds');
let img=document.getElementById('img');

fetch('https://dog.ceo/api/breeds/list/all')
.then((response)=>{
    return response.json();
})
.then((data)=>{
    let breedList=Object.keys(data.message);
    breedList.forEach((breed)=>{
        let option=document.createElement('option');
        option.value=breed;
        option.innerText=breed;
        breeds.append(option);
    })
    

})
.catch((error)=>{
    console.log(error);
    
})