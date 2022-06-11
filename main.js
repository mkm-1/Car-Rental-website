let menu = document.querySelector('#menu-icon');
let navbar = document.querySelector('.navbar');

menu.oneclick =() => {
    menu.classList.toggle('bx-x');
    navbar.classList.toggle('active');
}                                      
window.onscroll = () => {
    menu.classList.remove('bx-x');
    navbar.classList.toggle('active');
}
const sr = ScrollReveal({
    distance: '60px',
duration: 1500,
delay: 200,
reset:true,
})

sr.reveal('.text',{delay:200, orgin:'top'})
sr.reveal('.form-container form',{delay:100, orgin:'left'})
sr.reveal('.heading',{delay:800, orgin:'top'})
sr.reveal('.ride-container .box',{delay:200, orgin:'top'})
sr.reveal('.services-container .box',{delay:200, orgin:'top'})
sr.reveal('.about-container .box',{delay:200, orgin:'top'})
sr.reveal('.reviews-container ',{delay:100, orgin:'top'})
sr.reveal('.newsletter .box',{delay:200, orgin:'bottom'})














