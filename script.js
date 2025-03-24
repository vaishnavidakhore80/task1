const images = ["image1.jpg", "image2.jpg", "image3.jpg"]; // Replace with your image paths
let currentIndex = 0;

const currentImage = document.getElementById("current-image");
const prevButton = document.getElementById("prev");
const nextButton = document.getElementById("next");

function updateImage() {
  currentImage.src = images[currentIndex];
}

prevButton.addEventListener("click", () => {
  currentIndex = (currentIndex - 1 + images.length) % images.length;
  updateImage();
});

nextButton.addEventListener("click", () => {
  currentIndex = (currentIndex + 1) % images.length;
  updateImage();
});
