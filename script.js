const boxx = document.querySelectorAll(".box");

for(let i =0;i<=2500;i++){
    boxx[i].addEventListener("mouseover",()=>{
        boxx[i].style.backgroundColor ="red";
    });
}