let line=document.querySelectorAll(".line");

document.getElementById("btn").onclick=transformar;

function transformar(){
    line[0].classList.toggle("line-1");
    line[1].classList.toggle("line-2");
    line[2].classList.toggle("line-3");    
}