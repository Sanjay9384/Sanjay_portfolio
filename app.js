const menuIcon = document.querySelector(".menu");
const headerList = document.querySelector(".header-list");

menuIcon.addEventListener("click", () => {
  const hasClass = headerList.classList.contains("showMenu");

  if (hasClass) {
    headerList.classList.remove("showMenu");
  } else {
    headerList.classList.add("showMenu");
  }
});