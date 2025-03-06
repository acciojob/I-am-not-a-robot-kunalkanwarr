// document.addEventListener('DOMContentLoaded', () => {
//   const images = document.querySelectorAll('.image');
//   const resetButton = document.getElementById('reset');
//   const verifyButton = document.getElementById('verify');
//   const message = document.getElementById('h');
//   const resultMessage = document.getElementById('para');
  
//   let clickedImages = [];
//   let duplicateImageIndex = -1;
  
//   // Function to shuffle images
//   function shuffleImages() {
//     const imageSources = ['image1.jpg', 'image2.jpg', 'image3.jpg', 'image4.jpg', 'image5.jpg'];
//     const duplicateImage = imageSources[Math.floor(Math.random() * imageSources.length)];
//     const shuffledImages = [...imageSources, duplicateImage];
    
//     // Randomize image order
//     shuffledImages.sort(() => Math.random() - 0.5);
    
//     // Set image sources
//     images.forEach((image, index) => {
//       image.src = shuffledImages[index];
//     });
//   }

//   // Reset the game
//   function resetGame() {
//     clickedImages = [];
//     resultMessage.textContent = '';
//     message.textContent = 'Please click on the identical tiles to verify that you are not a robot.';
//     resetButton.style.display = 'none';
//     verifyButton.style.display = 'none';
//     images.forEach(image => image.style.border = '');
//   }

//   // Show Reset button and handle clicks on images
//   images.forEach(image => {
//     image.addEventListener('click', () => {
//       if (clickedImages.length < 2 && !clickedImages.includes(image)) {
//         clickedImages.push(image);
//         image.style.border = '2px solid blue';
        
//         if (clickedImages.length === 1) {
//           resetButton.style.display = 'block';
//         }
        
//         if (clickedImages.length === 2) {
//           verifyButton.style.display = 'block';
//         }
//       }
//     });
//   });

//   // Handle Reset button click
//   resetButton.addEventListener('click', resetGame);

//   // Handle Verify button click
//   verifyButton.addEventListener('click', () => {
//     const [firstImage, secondImage] = clickedImages;

//     if (firstImage.src === secondImage.src) {
//       resultMessage.textContent = 'You are a human. Congratulations!';
//     } else {
//       resultMessage.textContent = 'We can\'t verify you as a human. You selected the non-identical tiles.';
//     }

//     // Hide the verify button after clicking
//     verifyButton.style.display = 'none';
//     clickedImages = []; // Reset clicked images after verification
//   });

//   // Initialize the game
//   shuffleImages();
// });
