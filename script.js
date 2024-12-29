let currentSlide = 1;
const totalSlides = 17;

function nextSlide() {
  const current = document.getElementById(`slide${currentSlide}`);
  current.classList.remove("active");

  currentSlide = currentSlide >= totalSlides ? 1 : currentSlide + 1;

  const next = document.getElementById(`slide${currentSlide}`);
  next.classList.add("active");
  showSlideNumber();
}

function prevSlide() {
  const current = document.getElementById(`slide${currentSlide}`);
  current.classList.remove("active");

  currentSlide = currentSlide <= 1 ? 1 : currentSlide - 1;

  const prev = document.getElementById(`slide${currentSlide}`);
  prev.classList.add("active");
  showSlideNumber();
}

function showSlideNumber() {
  const current = document.querySelector(".currentPage"); // Select the element with the class "currentPage"
  if (current) {
    current.innerHTML = `${currentSlide} of ${totalSlides}`; // Update its content
  }
}

showSlideNumber();
