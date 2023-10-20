// JavaScript for an automatic image slider
var sliderImages = document.querySelectorAll(".image-slider img");
var currentImageIndex = 0;
var interval = 2000; // Change image every 2 seconds

function showImage(index) {
    for (var i = 0; i < sliderImages.length; i++) {
        sliderImages[i].style.display = "none";
    }
    sliderImages[index].style.display = "block";
}

function nextImage() {
    currentImageIndex = (currentImageIndex + 1) % sliderImages.length;
    showImage(currentImageIndex);
}

function startSlider() {
    showImage(currentImageIndex);
    setInterval(nextImage, interval);
}

startSlider(); // Start the automatic image slider
