const imageContainer = document.getElementById("image-container");
const resetButton = document.getElementById("reset");
const verifyButton = document.getElementById("verify");
const message = document.getElementById("para");

let images = ["img1.jpg", "img2.jpg", "img3.jpg", "img4.jpg", "img5.jpg"];
let selectedImages = [];
let duplicateIndex;

// Function to shuffle and display images
function initializeImages() {
    // Reset state
    selectedImages = [];
    resetButton.style.display = "none";
    verifyButton.style.display = "none";
    message.textContent = "";

    // Duplicate a random image
    duplicateIndex = Math.floor(Math.random() * images.length);
    const shuffledImages = [...images, images[duplicateIndex]].sort(() => Math.random() - 0.5);

    // Render images
    imageContainer.innerHTML = "";
    shuffledImages.forEach((src, index) => {
        const imgElement = document.createElement("img");
        imgElement.src = src;
        imgElement.className = "tile";
        imgElement.dataset.index = index; // Track image index for clicks
        imgElement.addEventListener("click", handleImageClick);
        imageContainer.appendChild(imgElement);
    });
}

// Handle image clicks
function handleImageClick(event) {
    const clickedImage = event.target;

    if (selectedImages.length < 2 && !selectedImages.includes(clickedImage)) {
        selectedImages.push(clickedImage);
        clickedImage.style.border = "2px solid blue"; // Highlight selection

        if (selectedImages.length === 1) {
            resetButton.style.display = "block";
        } else if (selectedImages.length === 2) {
            verifyButton.style.display = "block";
        }
    }
}

// Handle Reset button click
resetButton.addEventListener("click", () => {
    initializeImages();
});

// Handle Verify button click
verifyButton.addEventListener("click", () => {
    const [firstImage, secondImage] = selectedImages;

    if (firstImage.src === secondImage.src) {
        message.textContent = "You are a human. Congratulations!";
    } else {
        message.textContent =
            "We can't verify you as a human. You selected the non-identical tiles.";
    }

    verifyButton.style.display = "none"; // Hide Verify button after use
});

// Initialize on page load
initializeImages();
