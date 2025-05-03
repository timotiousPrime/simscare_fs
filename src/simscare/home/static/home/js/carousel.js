// Select all elements with the class 'carousel-container'
const carouselContainers = document.querySelectorAll('.carousel-container');

// Iterate over each carousel container found
carouselContainers.forEach(container => {
    // For each container, find its specific slides container and slides
    const slidesContainer = container.querySelector('.carousel-slides');
    const slides = container.querySelectorAll('.slide');

    // Initialize the current slide index for this specific carousel
    let currentSlideIndex = 0;
    // Get the total number of slides for this specific carousel
    const totalSlides = slides.length;
    // Set the interval time for auto-scrolling in milliseconds (e.g., 3000 = 3 seconds)
    const intervalTime = 5000; // You could make this different for each carousel if needed

    // Function to update the carousel's position based on the current slide index
    // This function is defined *inside* the loop, so it has access to the correct
    // slidesContainer and slides for the current carousel
    function updateCarouselPosition() {
        // Get the width of a single slide, including padding and border
        // Ensure slides.length > 0 before accessing slides[0]
        if (slides.length > 0) {
            const slideWidth = slides[0].offsetWidth;
            // Calculate the translation amount needed to show the current slide
            slidesContainer.style.transform = `translateX(-${currentSlideIndex * slideWidth}px)`;
        }
    }

    // Function to automatically advance to the next slide for this carousel
    function nextSlide() {
        // Increment the slide index
        currentSlideIndex++;
        // If we are past the last slide, loop back to the first slide (index 0)
        if (currentSlideIndex >= totalSlides) {
            currentSlideIndex = 0;
        }
        // Update the carousel's position for this carousel
        updateCarouselPosition();
    }

    // Start the auto-scrolling timer for this carousel
    let autoScrollTimer = setInterval(nextSlide, intervalTime);

    // Optional: Pause auto-scrolling on hover for this carousel
    // When the mouse enters this specific slides container, clear its interval
    slidesContainer.addEventListener('mouseenter', () => {
        clearInterval(autoScrollTimer);
    });

    // When the mouse leaves this specific slides container, restart its interval
    slidesContainer.addEventListener('mouseleave', () => {
        autoScrollTimer = setInterval(nextSlide, intervalTime);
    });

    // Optional: Handle window resize to ensure correct slide positioning for this carousel
    // When the window is resized, update the position for this carousel
    window.addEventListener('resize', updateCarouselPosition);

    // Initial position update when the page loads for this carousel
    // This ensures the first slide is correctly displayed initially
    updateCarouselPosition();
}); // End of forEach loop