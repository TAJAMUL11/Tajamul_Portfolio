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

menuIcon.classList.remove('bx-x');
navbar.classList.remove('active');


};

window.addEventListener('scroll', () => {
    const offerBoxes = document.querySelectorAll('.Projects-box');
  
    offerBoxes.forEach(box => {
      const rect = box.getBoundingClientRect();
      const viewportHeight = window.innerHeight;
  
      // Check if the box is within a certain distance from the viewport
      if (rect.top < viewportHeight * 1) {
        box.classList.add('show-projectBox');
  
        // After a delay, remove the 'show-offer' class to reset the animation
        setTimeout(() => {
          box.classList.remove('show-projectBox');
        }, 2000); // Adjust the delay as needed
      }
    });
  });


/* ================================= ScrollReveal JS file========================================== */
ScrollReveal({
    
    // reset: true,
    distance : '80px',
    duration : 2000,
    delay : 200,

});

ScrollReveal().reveal('.home-content, .heading, .tech div ', { origin : "top"});
ScrollReveal().reveal('.home-img, .skills-container', { origin : "bottom"});



