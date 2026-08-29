/* ========================================
   Slider
======================================== */

const slides = document.querySelectorAll(".slide");
const dots = document.querySelectorAll(".dot");

let currentSlide = 0;
let slideInterval;

function changeSlide(nextIndex) {

    slides[currentSlide].classList.remove("active");
    dots[currentSlide].classList.remove("active");

    slides[nextIndex].classList.add("active");
    dots[nextIndex].classList.add("active");

    currentSlide = nextIndex;
}

function nextSlide() {

    const nextIndex =
        (currentSlide + 1) % slides.length;

    changeSlide(nextIndex);
}

function previousSlide() {

    const previousIndex =
        (currentSlide - 1 + slides.length) % slides.length;

    changeSlide(previousIndex);
}

function startSlider() {

    slideInterval = setInterval(nextSlide, 3000);
}

function restartSlider() {

    clearInterval(slideInterval);
    startSlider();
}


/* ========================================
   Run Slider
======================================== */

if (slides.length > 0 && dots.length > 0) {

    const nextButton =
        document.querySelector(".slider-arrow.next");

    const prevButton =
        document.querySelector(".slider-arrow.prev");


    slides.forEach((slide, index) => {

        slide.classList.toggle(
            "active",
            index === 0
        );

    });


    dots.forEach((dot, index) => {

        dot.classList.toggle(
            "active",
            index === 0
        );


        dot.addEventListener("click", () => {

            changeSlide(index);
            restartSlider();

        });

    });


    nextButton.addEventListener("click", () => {

        nextSlide();
        restartSlider();

    });


    prevButton.addEventListener("click", () => {

        previousSlide();
        restartSlider();

    });


    startSlider();

}


/* ========================================
   Mouse Glow
======================================== */

const mouseGlow =
    document.createElement("div");

mouseGlow.className = "mouse-glow";

document.body.appendChild(mouseGlow);


document.addEventListener("mousemove", function (event) {

    mouseGlow.style.left =
        event.clientX + "px";

    mouseGlow.style.top =
        event.clientY + "px";

});


/* ========================================
   Nada Easter Egg
======================================== */

document.addEventListener("DOMContentLoaded", function () {

    const nadaCredit = document.querySelector(".nada-credit");

    if (!nadaCredit) return;

    nadaCredit.addEventListener("click", function (event) {

        const clickedLink = event.target.closest("a");

        /* تشغيل الإيفكت */
        this.classList.remove("nada-active");

        void this.offsetWidth;

        this.classList.add("nada-active");


        /* لو ضغط على لينك */
        if (clickedLink) {

            event.preventDefault();

            const url = clickedLink.href;

            setTimeout(function () {

                window.open(url, "_blank");

            }, 900);

        }

    });

});