quan=document.querySelector('#quan')
cart=document.querySelector('#dalink')
cart.addEventListener('click',function(){
    if (quan.innerHTML==0){
        alert('Cart is empty')
        cart.setAttribute('href', '')
    }
}
)