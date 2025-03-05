//your code here
let firstClick = null;
let secondClick = null;
let isVerifyClicked = false;

const resetButton = document.getElementById('reset');
const verifyButton = document.getElementById('verify');
const para = document.getElementById('para');
const images = document.querySelectorAll('img');
const message = document.getElementById('h');

// Randomize images and pick one to repeat
function randomizeImages() {
    const imageArray = Array.from(images);
    const duplicateIndex = Math.floor(Math.random() * 5); // Pick a random index for the duplicate
    const duplicateImage = imageArray[duplicateIndex].src;

    imageArray.forEach(img => {
        img.style.order = Math.floor(Math.random() * 100); // Randomize image order
    });
    
    return duplicateImage;
}

// Reset state
function reset() {
    firstClick = null;
    secondClick = null;
    isVerifyClicked = false;
    para.style.display = 'none';
    verifyButton.style.display = 'none';
    resetButton.style.display = 'none';
    message.innerHTML = "Please click on the identical tiles to verify that you are not a robot.";
    images.forEach(img => img.classList.remove('selected'));
}

// Verify the selection
function verify() {
    if (firstClick.src === secondClick.src) {
        para.innerHTML = "You are a human. Congratulations!";
    } else {
        para.innerHTML = "We can't verify you as a human. You selected the non-identical tiles.";
    }
    para.style.display = 'block';
    verifyButton.style.display = 'none';
    firstClick = null;
    secondClick = null;
}

// Image click handler
function handleClick(event) {
    if (firstClick === event.target || secondClick === event.target) {
        return; // Ignore clicks on already selected images
    }

    event.target.classList.add('selected'); // Add a visual indicator
    if (!firstClick) {
        firstClick = event.target;
    } else if (!secondClick) {
        secondClick = event.target;
        verifyButton.style.display = 'inline'; // Show verify button
    }

    if (firstClick && secondClick) {
        resetButton.style.display = 'inline'; // Show reset button
    }

    // Check if Reset button is shown
    if (resetButton.style.display === 'inline' || resetButton.style.display === 'block') {
        console.log("Reset button is shown.");
    } else {
        console.log("Reset button is hidden.");
    }
}

// Attach event listeners to images
images.forEach(img => {
    img.addEventListener('click', handleClick);
});

// Initialize the page
function init() {
    randomizeImages();
    resetButton.style.display = 'none'; // Hide reset button initially
}

init();
