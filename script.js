const container = document.getElementById('logo-image');
const logo = document.getElementById('logo-title-writing')
const section = document.querySelector('.section-fadein')
let isMovingUp = true;

function moveContainer() {
    if (isMovingUp) {
        container.style.transform = 'translate(-47%, -46%) scale(0.2)';


    } else {
        container.style.transform = 'translate(0, 0) scale(1)';
    }

    isMovingUp = !isMovingUp;
}

// Hide the container initially and add the fade-in class to initiate the fade-in animation
container.style.opacity = '0';
container.classList.add('fade-in');


// Wait for the fade-in animation to complete (1 second) before initiating the movement
setTimeout(() => {
    // Show the container and initiate the movement animation
    container.style.opacity = '1';
    
    // Delay the movement initiation by an additional 1 second (2000 milliseconds)
    setTimeout(() => {
        // Remove the fade-in class so it doesn't affect further transitions
        container.classList.remove('fade-in');
        
        // Initiate the movement animation
        moveContainer();
    }, 1000);
}, 1000); // Delay of 1000 milliseconds (1 second) for the fade-in animation

setTimeout(() => {
    logo.classList.add('fade-in')

    logo.style.opacity = '1';

},5000)

setTimeout(()=> {
    section.classList.add('fade-in')

    section.style.opacity = '1';

}, 6000)


var prevScrollpos = window.pageYOffset;
var navbar = document.querySelector('.navbar'); // Select the navbar element
var scrollDelayCount = 0; // Counter for scroll delay

window.onscroll = function() {
    var currentScrollPos = window.pageYOffset;
    
    // Check if user has scrolled at least twice before hiding the navbar
    if (scrollDelayCount >= 2) {
        if (prevScrollpos > currentScrollPos) {
            navbar.style.top = "0";
            navbar.style.transition = "top 0.4s ease-in-out"; // Add ease-in-out transition
        } else {
            navbar.style.top = "-120px"; // Adjust this value as needed
            navbar.style.transition = "top 0.3s ease-in-out"; // Add ease-in-out transition
        }
    } else {
        // Increment scroll delay counter
        scrollDelayCount++;
    }
    
    prevScrollpos = currentScrollPos;
};
