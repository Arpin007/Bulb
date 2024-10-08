let bulb=document.querySelector(".bulb");
let btn=document.querySelector("button")

let flag=0;
btn.addEventListener("click", function(){
    if(flag == 0){
        bulb.style.backgroundColor="yellow"
        flag=1;
    }
    else{
        bulb.style.backgroundColor="White"
        flag=0;
    }

})

///////////////////////  2nd method///////////////////


// let on=document.querySelector(".on");
// let off=document.querySelector(".off");

// on.addEventListener("click", function(){

// bulb.style.backgroundColor="yellow";
// })

// off.addEventListener("click", function(){

//     bulb.style.backgroundColor="black";

//     })