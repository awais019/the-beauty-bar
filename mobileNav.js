document.addEventListener("DOMContentLoaded", () => {
  const navButton = document.getElementById("navButton");
  const navBar = document.getElementById("navBar");

  navButton.addEventListener("click", () => {
    navBar.classList.toggle("hidden");
  });
});
