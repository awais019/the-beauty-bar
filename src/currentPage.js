// write script to add classes to the current page in the navigation bar

const currentPage = window.location.pathname;

const navBar = document.getElementsByTagName("nav");

const path = currentPage.split("/");

const links = navBar[0].getElementsByTagName("a");

for (let i = 0; i < links.length; i++) {
  const link = links[i].getAttribute("href");
  const fileName = link.split("/");
  if (fileName[1] === path[2]) {
    links[i].classList.add("border-b", "border-[#3B3B3B]", "text-[#3B3B3B]");
  } else {
    links[i].classList.remove("border-b", "border-[#E4DDD5]", "text-[#E4DDD5]");
  }
}
