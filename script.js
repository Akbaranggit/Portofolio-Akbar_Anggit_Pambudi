const menuIcon = document.getElementById("icon");
const menulist = document.getElementById("navbar");

menuIcon.addEventListener("click", () => {
  menulist.classList.toggle("hidden");
});
