const scroll = new LocomotiveScroll({
    el: document.querySelector('.main'),
    smooth: true
});
  
function showBox(){
let elemC=document.querySelector(".elem-container")
let fixedImg=document.querySelector(".fixed-box")
elemC.addEventListener("mouseenter",(e)=>{
    fixedImg.style.display="block";
  
})
elemC.addEventListener("mouseleave",()=>{
    fixedImg.style.display="none";
})


let elem=document.querySelectorAll(".elem")
elem.forEach((e)=>{
e.addEventListener("mouseenter",()=>{
let img=e.getAttribute("img-data")
fixedImg.style.backgroundImage =`url(${img})`
})
})}
showBox()

let menu = document.querySelector(".menu")
let bg = document.querySelector(".mediasc")

let flg = 0
menu.addEventListener("click",function(){
  if(flg == 0){
    bg.style.top = "0%"
    flg = 1

  }else{
    bg.style.top = "-100%"
    flg = 0
  }
})