let sections = document.querySelectorAll('.container');
let navLinks = document.querySelectorAll('nav .nav2 a');
var typed = new Typed(".statictext",{
    strings: ["Junior Software Developer","UI/UX Designer","Front End Deveoper"],
    typeSpeed: 100,
    backSpeed: 100,
    backDelay: 1000,
    loop: true
})
// Toggle the mobile menu
// const menuIcon = document.querySelector('.menu-icon');
// const navMenu = document.querySelector('.nav2');

// menuIcon.addEventListener('click', () => {
//     navMenu.classList.toggle('active');
// });

// Close menu when a link is clicked
// const navi = document.querySelectorAll('.nav2 a');

// navi.forEach(link => {
//     link.addEventListener('click', () => {
//         navMenu.classList.remove('active');
//     });
// });

window.onscroll = () => {
    sections.forEach(sec => {
        let top = window.scrollY;
        let offset = sec.offsetTop - 150;
        let height = sec.offsetHeight;
        let id = sec.getAttribute('id');

        if (top >= offset && top < offset + height) {
            navLinks.forEach(link => {
                link.classList.remove('active');
                document.querySelector('nav .nav2 a[href*=' + id + ']').classList.add('active');
            });
        }
    });
};
    