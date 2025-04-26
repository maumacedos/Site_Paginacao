document.addEventListener("DOMContentLoaded", function () {
    const carousel = document.querySelector(".carousel");
    const items = document.querySelectorAll(".carousel-item");
    const pagination = document.querySelector(".pagination");
    let currentIndex = 0;

    function updateCarousel() {
        carousel.style.transform = `translateX(-${currentIndex * 100}%)`;
        document.querySelectorAll(".pagination button").forEach((btn, index) => {
            btn.classList.toggle("active", index === currentIndex);
        });
    }

    items.forEach((_, index) => {
        const btn = document.createElement("button");
        btn.innerText = index + 1;
        btn.addEventListener("click", () => {
            currentIndex = index;
            updateCarousel();
        });
        pagination.appendChild(btn);
    });

    updateCarousel();
});
