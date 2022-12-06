const navItems = document.querySelectorAll(".navbar-nav > a");

const currentPath = window.location.pathname.split("/")[1];

navItems.forEach((link) => {
  if (link.href.split("/")[link.href.split("/").length - 1] === currentPath) {
    link.classList.add("active");
  }
  //   if (link.href.split("/")[link.href.split("/").length - 1] !== currentPath) {
  //     link.classList.remove("active");
  //   }
});
