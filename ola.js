// const bar = document.getElementsByTagName("i")[1];
// const nav2 = document.querySelector(".nav2");
const up = document.querySelector(".up");
 const shopbox = document.querySelectorAll(".shop-cont>.box");
 const car = document.querySelectorAll(".i");
 const text = document.querySelector(".shop-cont>.box>.text");
 const dou = document.querySelectorAll(".dou>div");
 console.log(dou)
 let body = document.getElementById("body");

 setTimeout(function(){
  document.querySelector(".loader").style.display="none"
 },8000)
 setTimeout(function(){
  document.querySelector(".body2").style.display="block"
 },8000)

shopbox.forEach((Item)=>{
  Item.addEventListener("click",(eo) => {
  if(eo.target.className=="i"){
eo.target.innerHTML=`<span class="check">&#10003;</span>  `
  
}
  if(eo.target.className=="t"){
    eo.target.innerHTML=` <span class="x">&#9747;</span> `
   
  }
  if(eo.target.className=="check"){
    eo.target.innerHTML=` <span class="x">&#9747;</span>`
   
  }
  if(eo.target.className=="x"){
    eo.target.innerHTML=`  <h5 class="w"> was canceled</h5>`
   
  }
  if(eo.target.className=="w"){
    eo.target.innerHTML=`  <i class="fa-solid fa-cart-shopping"></i>`
   
  }
  
})})

window.onscroll = function () {
  if (window.scrollY >= 100) {
    up.style.display = "block";
  } else {
    up.style.display = "none";
  }
};
up.addEventListener("click", (eo) => {
  window.scrollTo({ left: 0, top: 0 });
});

 

 