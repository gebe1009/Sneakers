// nav Bar
const navBar = document.getElementById("navBar");
const barNav = document.getElementById("barNav");

barNav.addEventListener("click", () => {
  navBar.classList.toggle("right-5");
  navBar.classList.toggle("bg-white");
  navBar.classList.toggle("text-black");
  navBar.classList.toggle("dark:bg-gray-900");
  navBar.classList.toggle("dark:text-white");
});

// dark Mode
const darkMode = document.getElementById("dark");
const lightMode = document.getElementById("light");
const html = document.querySelector("html");

darkMode.addEventListener("click", function () {
  html.classList.add("dark");
});

lightMode.addEventListener("click", function () {
  html.classList.remove("dark");
});

// Scroll
const nav = document.querySelector("nav");

window.onscroll = () => {
  const scrollOn = window.pageYOffset;
  if (scrollOn > 10) {
    console.log(scrollOn);
    nav.classList.add("top-0");
    nav.classList.add("shadow-lg");
    nav.classList.add("transition-all");
    nav.classList.add("dark:shadow-lg");
    nav.classList.add("dark:shadow-gray-800");
  } else {
    nav.classList.remove("top-0");
    nav.classList.remove("shadow-lg");
    nav.classList.remove("dark:shadow-lg");
  }
};

// Slider

const sabrin = document.querySelector(".sabrin");
const sabrin1 = document.querySelector(".sabrin1");
const sabrin2 = document.querySelector(".sabrin2");
const imgCol = document.querySelector(".image-discount");

sabrin.addEventListener("click", function () {
  imgCol.setAttribute("src", "./asset/image/sab1.png");
});
sabrin1.addEventListener("click", function () {
  imgCol.setAttribute("src", "./asset/image/sab2.png");
});
sabrin2.addEventListener("click", function () {
  imgCol.setAttribute("src", "./asset/image/sab3.png");
});
