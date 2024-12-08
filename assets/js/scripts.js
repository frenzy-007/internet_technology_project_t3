$(".menu-icon").on("click", function () {
  const navMenu = $(".nav-menu");
  const menuIcon = $(this).find("i");

  // If the page is not at the top, scroll to the top and keep the menu open
  if (window.scrollY !== 0) {
    window.scrollTo({
      top: 0,
      behavior: "smooth", // Smooth scroll to top
    });

    // Ensure the menu is open after scrolling
    navMenu.addClass("open");
    menuIcon.removeClass("fa-bars").addClass("fa-times");
    $(this).attr("aria-label", "Close Menu");
  } else {
    // If the page is at the top, toggle the menu normally
    navMenu.toggleClass("open");

    if (navMenu.hasClass("open")) {
      menuIcon.removeClass("fa-bars").addClass("fa-times");
      $(this).attr("aria-label", "Close Menu");
    } else {
      menuIcon.removeClass("fa-times").addClass("fa-bars");
      $(this).attr("aria-label", "Open Menu");
    }
  }
});

$(document).ready(function () {
  const images = [
    "./assets/images/pexels-elias-tigiser-411757-9088004.jpg",
    "./assets/images/pexels-alesiakozik-6022640.jpg",
    "./assets/images/pexels-yulia-rout-1389036-2721735.jpg",
  ];

  let currentIndex = 0;

  function swapImage() {
    currentIndex = (currentIndex + 1) % images.length;

    $("#swappable-image").fadeOut(500, function () {
      $(this).attr("src", images[currentIndex]).fadeIn(500);
    });
  }

  setInterval(swapImage, 3000);

  $("#prev").click(function () {
    currentIndex = (currentIndex - 1 + images.length) % images.length;
    $("#swappable-image").attr("src", images[currentIndex]);
  });

  $("#next").click(function () {
    currentIndex = (currentIndex + 1) % images.length;
    $("#swappable-image").attr("src", images[currentIndex]);
  });
});

// Auto Adjustable Header height
function adjustPadding() {
  const logoContainer = document.querySelector(".container-logo");
  const logoHeight = logoContainer.offsetHeight; // Get dynamic height
  document.body.style.paddingTop = `${logoHeight}px`; // Apply as padding-top
}

// Run on page load and window resize
window.addEventListener("load", adjustPadding);
window.addEventListener("resize", adjustPadding);
