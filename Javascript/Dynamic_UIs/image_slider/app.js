let slideIndex = 1
showSlides(slideIndex)

// Next/previous controls
function plusSlides(n) {
    slideIndex += n
    showSlides(slideIndex);
}

// Thumbnail image controls
function currentSlide(n) {
    slideIndex = n
    showSlides(slideIndex);
}

function showSlides(n) {
    let slides = document.getElementsByClassName("slide");

    // Wrap Around if we over/under
    if (n > slides.length)
        slideIndex = 1
    if (n < 1)
        slideIndex = slides.length

    for (let i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }
    slides[slideIndex - 1].style.display = "block";
}