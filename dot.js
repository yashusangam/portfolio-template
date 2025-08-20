// header

let menu = document.querySelector('#menubtn');
let nav = document.querySelector('nav');

menu.onclick = () =>{
    menu.classList.toggle('fa-x');
    nav.classList.toggle('active')
}
window.onscroll = () =>{
    menu.classList.remove('fa-x');
    nav.classList.remove('active')
}


// typing text

var typed = new Typed(".typing",{
    strings : ["Programmer","Web Designer","Youtuber"],
    typeSpeed : 150,
    backSpeed : 150,
    loop : true
})