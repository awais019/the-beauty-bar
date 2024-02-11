document.addEventListener("DOMContentLoaded", () => {
  const testimonialsContainer = document.getElementById(
    "testimonialsContainer"
  );

  const demoTestimonial = `
  <li
              class="laptopSm:grid laptopSm:grid-cols-3 gap-8 mobile:gap-12 tablet:gap-16 laptopSm:gap-24 laptopMd:gap-32 bg-gradient1 rounded-[67px] scale-0 transition-transform duration-500 px-8 py-9"
            >
              <div class="relative flex flex-col gap-4 laptopSm:flex-row laptopSm:gap-12 mobileSm:h-48 laptopSm:h-auto">
                <div class="w-3/5 bg-white h-1/4 rounded-[100px] laptopSm:w-1/4 laptopSm:h-3/5"></div>
                <div class="w-full h-1/4 laptopSm:h-3/4 laptopMd:h-full laptopSm:w-1/4 bg-white rounded-[100px]"></div>
                <img
                  src="../images/testimonial.png"
                  alt="customer"
                  class="mobileSm:absolute mobileSm:-top-5 mobileSm:right-1/4 laptopSm:top-1/3 laptopSm:left-[38%]"
                />
              </div>
              <div
                class="flex flex-col col-span-2 gap-5 relative before:content-[url('../images/open-quote.png')] after:content-[url('../images/close-quote.png')] after:absolute after:-bottom-11 after:right-0 mt-12 laptopSm:mt-20 laptopSm:mb-16 mb-12"
              >
                <div>
                  <p class="text-arsenic text-xl">Leslie Alexander</p>
                  <p class="text-white">Moncton, Canada</p>
                </div>
                <div class="font-['Montserrat']">
                  <p class="text-xl mobile:text-2xl tablet:text-3xl laptopSm:text-4xl font-semibold text-black">
                    Neque porro quisquam est qui dolum
                  </p>
                  <p class="mobile:text-lg tablet:text-xl text-white">
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
