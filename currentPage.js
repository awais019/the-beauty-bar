// write script to add classes to the current page in the navigation bar

const currentPage = window.location.pathname;

console.log(currentPage);

const navBar = document.getElementsByTagName("nav");

let links = navBar[0].getElementsByTagName("a");

for (let i = 0; i < links.length; i++) {
  const link = links[i].getAttribute("href");
  console.log(link);
  if (link === currentPage) {
    links[i].classList.add("border-b", "border-[#3B3B3B]", "text-[#3B3B3B]");
  } else {
    links[i].classList.remove("border-b", "border-[#E4DDD5]", "text-[#E4DDD5]");
  }
}

links = navBar[1].getElementsByTagName("a");

for (let i = 0; i < links.length; i++) {
  const link = links[i].getAttribute("href");
  if (link === currentPage) {
    links[i].classList.add("border-b", "border-[#3B3B3B]", "text-[#3B3B3B]");
  } else {
    links[i].classList.remove("border-b", "border-[#E4DDD5]", "text-[#E4DDD5]");
  }
}
