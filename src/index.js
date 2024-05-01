const menuToglle = document.querySelector('.menu-toggle input');
const nav = document.querySelector('nav ul');

menuToglle.addEventListener('click', function () {
    nav.classList.toggle('slide');
});