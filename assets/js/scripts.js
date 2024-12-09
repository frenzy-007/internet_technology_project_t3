$(document).ready(function () {
  const menuIcon = $(".menu-icon");
  const navMenu = $(".nav-menu");
  const menuIconElement = menuIcon.find("i");

  // Toggle the menu on click
  menuIcon.on("click", function () {
    // If the page is not at the top, scroll to the top and keep the menu open
    if (window.scrollY !== 0) {
      window.scrollTo({
        top: 0,
        behavior: "smooth", // Smooth scroll to top
      });

      // Ensure the menu is open after scrolling
      navMenu.addClass("open");
      menuIconElement.removeClass("fa-bars").addClass("fa-times");
      menuIcon.attr("aria-label", "Close Menu");
    } else {
      // If the page is at the top, toggle the menu normally
      navMenu.toggleClass("open");

      if (navMenu.hasClass("open")) {
        menuIconElement.removeClass("fa-bars").addClass("fa-times");
        menuIcon.attr("aria-label", "Close Menu");
      } else {
        menuIconElement.removeClass("fa-times").addClass("fa-bars");
        menuIcon.attr("aria-label", "Open Menu");
      }
    }
  });

  // Close the menu when resizing the window
  $(window).on("resize", function () {
    if (navMenu.hasClass("open")) {
      navMenu.removeClass("open");
      menuIconElement.removeClass("fa-times").addClass("fa-bars");
      menuIcon.attr("aria-label", "Open Menu");
    }
  });
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

const items = [
  {
    title: "Lorem ipsum dolor sit amet.",
    date: "20/02/2024",
    img: "/assets/images/pexels-mohammedsuhail-2723091.jpg",
  },
  {
    title: "Consectetur adipisicing elit.",
    date: "22/02/2024",
    img: "/assets/images/pexels-mohammedsuhail-2723091.jpg",
  },
  {
    title: "Dolorem enim aspernatur error.",
    date: "23/02/2024",
    img: "/assets/images/pexels-mohammedsuhail-2723091.jpg",
  },
  {
    title: "Recusandae soluta amet sunt.",
    date: "25/02/2024",
    img: "/assets/images/pexels-mohammedsuhail-2723091.jpg",
  },
  {
    title: "Sed temporibus totam aliquam.",
    date: "27/02/2024",
    img: "/assets/images/pexels-mohammedsuhail-2723091.jpg",
  },
  {
    title: "Another article title.",
    date: "28/02/2024",
    img: "/assets/images/pexels-mohammedsuhail-2723091.jpg",
  },
  {
    title: "Another article title.",
    date: "28/02/2024",
    img: "/assets/images/pexels-mohammedsuhail-2723091.jpg",
  },
  {
    title: "Another article title.",
    date: "28/02/2024",
    img: "/assets/images/pexels-mohammedsuhail-2723091.jpg",
  },
  {
    title: "Another article title.",
    date: "28/02/2024",
    img: "/assets/images/pexels-mohammedsuhail-2723091.jpg",
  },
  {
    title: "Another article title.",
    date: "28/02/2024",
    img: "/assets/images/pexels-mohammedsuhail-2723091.jpg",
  },
  {
    title: "Another article title.",
    date: "28/02/2024",
    img: "/assets/images/pexels-mohammedsuhail-2723091.jpg",
  },
  {
    title: "Another article title.",
    date: "28/02/2024",
    img: "/assets/images/pexels-mohammedsuhail-2723091.jpg",
  },
  {
    title: "Another article title.",
    date: "28/02/2024",
    img: "/assets/images/pexels-mohammedsuhail-2723091.jpg",
  },
  {
    title: "Another article title.",
    date: "28/02/2024",
    img: "/assets/images/pexels-mohammedsuhail-2723091.jpg",
  },
  {
    title: "Another article title.",
    date: "28/02/2024",
    img: "/assets/images/pexels-mohammedsuhail-2723091.jpg",
  },
  {
    title: "Another article title.",
    date: "28/02/2024",
    img: "/assets/images/pexels-mohammedsuhail-2723091.jpg",
  },
  {
    title: "Another article title.",
    date: "28/02/2024",
    img: "/assets/images/pexels-mohammedsuhail-2723091.jpg",
  },
  {
    title: "Another article title.",
    date: "28/02/2024",
    img: "/assets/images/pexels-mohammedsuhail-2723091.jpg",
  },
  {
    title: "Another article title.",
    date: "28/02/2024",
    img: "/assets/images/pexels-mohammedsuhail-2723091.jpg",
  },
  {
    title: "Another article title.",
    date: "28/02/2024",
    img: "/assets/images/pexels-mohammedsuhail-2723091.jpg",
  },
  {
    title: "Another article title.",
    date: "28/02/2024",
    img: "/assets/images/pexels-mohammedsuhail-2723091.jpg",
  },
  {
    title: "Another article title.",
    date: "28/02/2024",
    img: "/assets/images/pexels-mohammedsuhail-2723091.jpg",
  },
  {
    title: "Another article title.",
    date: "28/02/2024",
    img: "/assets/images/pexels-mohammedsuhail-2723091.jpg",
  },
  {
    title: "Another article title.",
    date: "28/02/2024",
    img: "/assets/images/pexels-mohammedsuhail-2723091.jpg",
  },
  {
    title: "Another article title.",
    date: "28/02/2024",
    img: "/assets/images/pexels-mohammedsuhail-2723091.jpg",
  },
  {
    title: "Another article title.",
    date: "28/02/2024",
    img: "/assets/images/pexels-mohammedsuhail-2723091.jpg",
  },
  {
    title: "Another article title.",
    date: "28/02/2024",
    img: "/assets/images/pexels-mohammedsuhail-2723091.jpg",
  },
  {
    title: "Another article title.",
    date: "28/02/2024",
    img: "/assets/images/pexels-mohammedsuhail-2723091.jpg",
  },
  {
    title: "Another article title.",
    date: "28/02/2024",
    img: "/assets/images/pexels-mohammedsuhail-2723091.jpg",
  },
  {
    title: "Another article title.",
    date: "28/02/2024",
    img: "/assets/images/pexels-mohammedsuhail-2723091.jpg",
  },
  {
    title: "Another article title.",
    date: "28/02/2024",
    img: "/assets/images/pexels-mohammedsuhail-2723091.jpg",
  },
  {
    title: "Another article title.",
    date: "28/02/2024",
    img: "/assets/images/pexels-mohammedsuhail-2723091.jpg",
  },
  {
    title: "Another article title.",
    date: "28/02/2024",
    img: "/assets/images/pexels-mohammedsuhail-2723091.jpg",
  },
  {
    title: "Another article title.",
    date: "28/02/2024",
    img: "/assets/images/pexels-mohammedsuhail-2723091.jpg",
  },
  {
    title: "Another article title.",
    date: "28/02/2024",
    img: "/assets/images/pexels-mohammedsuhail-2723091.jpg",
  },
  {
    title: "Another article title.",
    date: "28/02/2024",
    img: "/assets/images/pexels-mohammedsuhail-2723091.jpg",
  },
  {
    title: "Another article title.",
    date: "28/02/2024",
    img: "/assets/images/pexels-mohammedsuhail-2723091.jpg",
  },
  {
    title: "Another article title.",
    date: "28/02/2024",
    img: "/assets/images/pexels-mohammedsuhail-2723091.jpg",
  },
  // Add more articles as needed
];

let currentPage = 1;
let itemsPerPage = 6; // Default to 10 items per page if screen is 800px or larger
if (window.innerWidth >= 1200) {
  itemsPerPage = 12;
} else if (window.innerWidth >= 900) {
  itemsPerPage = 9;
}

// Adjust itemsPerPage based on screen size
window.addEventListener("resize", () => {
  if (window.innerWidth >= 1200) {
    itemsPerPage = 12;
  } else if (window.innerWidth >= 900) {
    itemsPerPage = 9;
  }
  currentPage = 1; // Reset to page 1 when screen size changes
  displayItems();
});

function displayItems() {
  const startIndex = (currentPage - 1) * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;
  const pageItems = items.slice(startIndex, endIndex);

  // Get the item container
  const itemContainer = document.getElementById("item-container");

  // Clear the container
  itemContainer.innerHTML = "";

  // Add the items to the container
  pageItems.forEach((item) => {
    const itemHTML = `
        <article class="new-article-item margin-bottom-20">
          <figure class="margin-bottom-0">
            <img class="new-image" src="${item.img}" alt="New Image" />
          </figure>
          <div class="container-extra-info margin-bottom-20">
            <div class="box-type-date background-color-orange">
              <span>News</span>
            </div>
            <div class="box-type-date background-color-blue">
              <span>${item.date}</span>
            </div>
          </div>
          <div>
            <a href="/pages/new-detail.html"><h3>${item.title}</h3></a>
            <p>
              ${item.title} Description text...
            </p>
          </div>
        </article>
    `;
    itemContainer.innerHTML += itemHTML;
  });

  // Update the page number
  const pageNumber = document.getElementById("page-number");
  pageNumber.innerHTML = `Page ${currentPage} of ${Math.ceil(
    items.length / itemsPerPage
  )}`;

  // Scroll to the top of the first item in the list
  const firstItem = document.querySelector(".container-new-article-item");
  if (firstItem) {
    firstItem.scrollIntoView({ behavior: "smooth" });
  }
}

function changePage(direction) {
  if (
    direction === "next" &&
    currentPage < Math.ceil(items.length / itemsPerPage)
  ) {
    currentPage++;
  } else if (direction === "prev" && currentPage > 1) {
    currentPage--;
  }
  displayItems();
}

// Initial load
displayItems();
