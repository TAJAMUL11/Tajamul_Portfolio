/* ===========================toggle icon and navbar off and on==============================*/

let menuIcon = document.querySelector('#menu-icon');
let navbar = document.querySelector('.navbar');

menuIcon.onclick = () => {  /* for on and off of the menu icons*/
    menuIcon.classList.toggle('bx-x');
    navbar.classList.toggle('active');

};


/* ===========================Scroll section active link=======================*/
/*The code below helps in making active of each link when we are on that page. Furthermore, it adds a touch effect on click*/


let sections = document.querySelectorAll('section');
let navLinks = document.querySelectorAll('header nav a');


window.onscroll = () => {
    sections.forEach(sec => {
        let top = window.scrollY;
        let offset = sec.offsetTop - 150;
        let height = sec.offsetHeight;
        let id = sec.getAttribute('id');

        if (top >= offset && top < offset + height) {
            navLinks.forEach(links => {
                links.classList.remove('active');
                document.querySelector('header nav a[ href*=' + id + ']').classList.add('active');
            });

        };
    });
/* ===============================================Sticky navigation =============================================*/
    let header = document.querySelector('header');

    header.classList.toggle('sticky', window.scrollY > 100 );
/* =============================================== Remove  toggle icon and navbar when navbar link (scroll)=============================================*/
menuIcon.classList.remove('bx-x');/* so these remove the block links off the screen once we click on one of them*/
navbar.classList.remove('active');


};


/* ================================= ScrollReveal JS file========================================== */
ScrollReveal({
    
    // reset: true,
    distance : '80px',
    duration : 2000,
    delay : 200,

});

ScrollReveal().reveal('.home-content, .heading ', { origin : "top"});
ScrollReveal().reveal('.home-img, .skills-container', { origin : "bottom"});



