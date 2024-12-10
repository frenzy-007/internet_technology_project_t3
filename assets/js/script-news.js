const items = [
  {
    title: "Reconstruction of the continuous road through Přední Lhota",
    content_type: "Announcement",
    date: "05/12/2024",
    img: "../assets/images/news/news1.jpg",
    link: "./news-item1.html",
  },
  {
    title: "Restrictions on the operation of the Podebrady Town Hall",
    content_type: "Announcement",
    date: "03/12/2024",
    img: "../assets/images/news/news2.jpg",
    link: "./news-item2.html",
  },
  {
    title: "7th meeting of the Poděbrady City Council",
    content_type: "Announcement",
    date: "03/12/2024",
    img: "../assets/images/news/news3.jpg",
    link: "./news-item3.html",
  },
  {
    title: "Lunch break, calendar week 48-50 2024",
    content_type: "Announcement",
    date: "11/20/2024",
    img: "../assets/images/news/news4.jpg",
    link: "./news-item4.html",
  },
  {
    title: "Revitalization of the central spa park",
    content_type: "News",
    date: "23/09/2024",
    img: "../assets/images/news/news5.jpg",
    link: "./news-item4.html",
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
  displayItemsNews();
});

function displayItemsNews() {
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
                <span>${item.content_type}</span>
              </div>
              <div class="box-type-date background-color-blue">
                <span>${item.date}</span>
              </div>
            </div>
            <div class="title-text-news-box">
              <a href="${item.link}"><h3>${item.title}</h3></a>
              <br/>
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
  displayItemsNews();
}
// Initial load
displayItemsNews();
