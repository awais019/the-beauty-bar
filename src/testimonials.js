document.addEventListener("DOMContentLoaded", () => {
  const testimonialsContainer = document.getElementById(
    "testimonialsContainer"
  );

  const demoTestimonial = `
  <li
              class="grid grid-cols-3 gap-32 bg-gradient1 rounded-[67px] scale-0 transition-transform duration-500 px-8 py-9"
            >
              <div class="relative flex gap-12">
                <div class="w-1/4 bg-white h-3/5 rounded-[100px]"></div>
                <div class="w-1/4 h-full bg-white rounded-[100px]"></div>
                <img
                  src="../images/testimonial.png"
                  alt="customer"
                  class="absolute top-1/3 left-[38%]"
                />
              </div>
              <div
                class="flex flex-col col-span-2 gap-5 relative before:content-[url('../images/open-quote.png')] after:content-[url('../images/close-quote.png')] after:absolute after:-bottom-11 after:right-0 mt-20 mb-16"
              >
                <div>
                  <p class="text-[#414141] text-xl">Leslie Alexander</p>
                  <p class="text-white">Moncton, Canada</p>
                </div>
                <div class="font-['Montserrat']">
                  <p class="text-4xl font-semibold text-black">
                    Neque porro quisquam est qui dolum
                  </p>
                  <p class="text-xl text-white">
                    “ It is a long established fact that a reader will be
                    tracked distracted by the readable content of a page is when
                    looking at its layout. The point of using Lorem of
                    distribution it look like readable English “
                  </p>
                </div>
              </div>
            </li>
    `;

  const testimonials = [demoTestimonial, demoTestimonial, demoTestimonial];
  let currentSlideIndex = 0;
  const totalSlides = testimonials.length;

  function animateSlide() {
    const currentSlide = testimonialsContainer.firstElementChild;

    setTimeout(() => {
      currentSlide.classList.remove("scale-0");
      currentSlide.classList.add("scale-1");
    }, 100);
  }

  testimonialsContainer.innerHTML = testimonials[currentSlideIndex];

  animateSlide();

  document.getElementById("nextButton").addEventListener("click", () => {
    currentSlideIndex = (currentSlideIndex + 1) % totalSlides;
    testimonialsContainer.innerHTML = testimonials[currentSlideIndex];
    animateSlide();
  });

  document.getElementById("prevButton").addEventListener("click", () => {
    currentSlideIndex = (currentSlideIndex - 1 + totalSlides) % totalSlides;
    testimonialsContainer.innerHTML = testimonials[currentSlideIndex];
    animateSlide();
  });
});
