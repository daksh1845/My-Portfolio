let a = document.querySelector(".name"); //text of daksh malik
console.log(a)

let b = document.querySelector(".logo"); //logo

b.addEventListener("mouseover",()=>{
    a.style = "text-decoration-color:#000;transition: 1s;";
})
b.addEventListener("mouseleave",()=>{
    a.style = "background-color:;transition: 1s;";
})