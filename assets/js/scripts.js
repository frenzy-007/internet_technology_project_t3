$(".menu-icon").on("click", function () {
  $(".nav-menu").toggleClass("open");
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
