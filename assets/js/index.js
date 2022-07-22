// const searchInput=document.querySelector('#search');
// const div=document.querySelectorAll('.x')
// console.log(div)

// searchInput.addEventListener('change',function(e){
//     for(let i=0;i<div.lengt5h;i++){
//     /*  console.log(div[i].innerHTML.includes(e.target.value)) */
    
//     }
//     })
   /*  div.filter((elt)=>elt.innerHTML.includes(e.target.value)) */
///So this is for the font //
let add_cart=document.querySelectorAll('.add-cart')
let quan=document.querySelector('#quan')

console.log(add_cart)
let slideIndex = 0;
showSlides();

function showSlides() {
  let i;
  let slides = document.getElementsByClassName("mySlides");
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  slideIndex++;
  if (slideIndex > slides.length) {slideIndex = 1}
  slides[slideIndex-1].style.display = "block";
  setTimeout(showSlides, 13000);
} 
for (let i =0;i<add_cart.length;i++){
  add_cart[i].addEventListener('click',function(){
    quan.innerHTML++

  })
}