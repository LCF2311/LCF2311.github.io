/*
Author : Nitesh Hebbare
Date   : 5th December 2023

*/
window.addEventListener('resize', toggleMenuOnResize);

function toggleMenu() {
    console.log("Inside the toggle");

    var nav = document.getElementsByClassName('ham')[0];

    console.log("nav.style.display=",nav.style.display)

    if (nav.style.display === 'none' ||nav.style.display === undefined || nav.style.display === '' ) {
        nav.style.display = 'block';
    } else {
        nav.style.display = 'none';
    }
}

function toggleMenuOnResize() {
    console.log("Inside the Resize")
    var desknav = document.querySelector('.desk');
    var hamnav = document.querySelector('.ham');

    // Check if the elements exist
    if (desknav && hamnav) {
         
        // Inside the function and condition
        console.log("Inside the function and condition");
        // Check if the viewport width is greater than or equal to 1025 pixels
        if (window.matchMedia("(min-width: 769px)").matches) {
            console.log("Inside the desktop window");
            desknav.style.display = 'block';
            hamnav.style.display = 'none';
        } else {
            desknav.style.display = 'none';
            hamnav.style.display = 'none';
        }
    }
}

// Initial call to set the initial state based on the current aspect ratio
toggleMenuOnResize();

// Event listener for changes in the viewport width

