window.onscroll = function () { stickyNav() };

var navbar = document.getElementById("navbar");
var sticky = navbar.offsetTop;
var blogName = document.getElementById("blogName");

function stickyNav() {
  if (window.pageYOffset >= sticky) {
    navbar.classList.add("sticky")
    blogName.style.opacity = "1";
  } else {
    navbar.classList.remove("sticky");
    blogName.style.opacity = "0";
  }
}

function goHamburger() {
  var menu = document.getElementById("menu");
  if (menu.style.display == "block") {
    menu.style.display = "none";
  } else {
    menu.style.display = "block";
  }
}
