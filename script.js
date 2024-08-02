let currentSlide = 0;
const slides = document.querySelectorAll('.slide');
const steps = document.querySelectorAll('.step');
const stepLabels = document.querySelectorAll('.step-label');
const totalSteps = steps.length;

function changeSlide(n) {
    // Remove active class from current slide and step
    slides[currentSlide].classList.remove('active');
    steps[currentSlide].classList.remove('active');
    stepLabels[currentSlide].classList.remove('active');

    // Calculate the new slide index
    currentSlide = (currentSlide + n + slides.length) % slides.length;

    // If we've completed a full cycle (back to the first slide)
    if (currentSlide === 0) {
        // Reset all steps to inactive
        resetAllSteps();
    }

    // Activate the new current slide and step
    slides[currentSlide].classList.add('active');
    steps[currentSlide].classList.add('active');
    stepLabels[currentSlide].classList.add('active');
}

function resetAllSteps() {
    steps.forEach((step, index) => {
        step.classList.remove('active');
        stepLabels[index].classList.remove('active');
    });
}

// Initialize: Activate the first step
steps[0].classList.add('active');
stepLabels[0].classList.add('active');