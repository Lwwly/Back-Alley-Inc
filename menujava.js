// JavaScript Document

// script.js

// for const links links.addeventlistner samler alle <a> under <li> //

document.addEventListener('DOMContentLoaded', function() {
    const links = document.querySelectorAll('nav ul li a');

    for (const link of links) {
        link.addEventListener('click', smoothScroll);
    }

    function smoothScroll(e) {
        e.preventDefault();
		
		// smooth scroller funktionen // 
		
		
		// her bliver selve id*en targeted 

        const targetId = this.getAttribute('href');
        const targetSection = document.querySelector(targetId);
		
		// selve rulleren // 

        window.scrollTo({
            top: targetSection.offsetTop,
            behavior: 'smooth'
        });
    }
});




