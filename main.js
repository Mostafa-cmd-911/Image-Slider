const slides = document.querySelectorAll(".slider img");
const prevBtn = document.querySelector(".prev-btn");
const nextBtn = document.querySelector(".next-btn");
const id = document.querySelector(".id");
const bar = document.querySelector(".bar");

bar.style.gridTemplateColumns = `repeat(${slides.length}, 1fr)`;
let currentSlide = 0;

updateSliderControls();

function goToSlide(n) {
    slides[currentSlide].classList.remove("active");
    currentSlide = (n + slides.length) % slides.length;
    slides[currentSlide].classList.add("active");
    updatecopy(currentSlide);
    updateSliderControls();
}

prevBtn.addEventListener("click", () => {
    goToSlide(currentSlide - 1);
});

nextBtn.addEventListener("click", () => {
    goToSlide(currentSlide + 1);
});

function updateSliderControls() {
    prevBtn.disabled = currentSlide === 0;
    nextBtn.disabled = currentSlide === slides.length - 1;
    id.innerHTML = `Image ${currentSlide + 1} of ${slides.length}`;
}

slides.forEach((img, index) => {
    const copy = img.cloneNode();
    copy.addEventListener("click", () => {
        goToSlide(index);
    });
    bar.appendChild(copy);
});

function updatecopy(index) {
    bar.querySelectorAll("img").forEach((img, i) => {
        img.classList.toggle("active", i === index);
    });
}
