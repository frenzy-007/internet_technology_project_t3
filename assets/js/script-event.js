const eventListData = [
  {
    title: "Event Title 1",
    date: "2024-07-01",
    description: "Description for Event 1.",
    time: "10:00am - 11:00am",
    location: "@Location1",
  },
  {
    title: "Event Title 2",
    date: "2024-07-02",
    description: "Description for Event 2.",
    time: "2:00pm - 3:00pm",
    location: "@Location2",
  },
  {
    title: "Event Title 2",
    date: "2024-07-02",
    description: "Description for Event 2.",
    time: "2:00pm - 3:00pm",
    location: "@Location2",
  },
  {
    title: "Event Title 2",
    date: "2024-07-02",
    description: "Description for Event 2.",
    time: "2:00pm - 3:00pm",
    location: "@Location2",
  },
  {
    title: "Event Title 2",
    date: "2024-07-02",
    description: "Description for Event 2.",
    time: "2:00pm - 3:00pm",
    location: "@Location2",
  },
];

let currentEventPage = 1;
let eventsPerPage = 4;

// Adjust items per page based on screen size
if (window.innerWidth >= 1200) {
  eventsPerPage = 10;
} else if (window.innerWidth >= 700) {
  eventsPerPage = 6;
}

window.addEventListener("resize", () => {
  if (window.innerWidth >= 1200) {
    eventsPerPage = 10;
  } else if (window.innerWidth >= 700) {
    eventsPerPage = 6;
  } else {
    eventsPerPage = 4;
  }
  currentEventPage = 1; // Reset to page 1 when screen size changes
  renderEvents();
});

function renderEvents() {
  const startIndex = (currentEventPage - 1) * eventsPerPage;
  const endIndex = startIndex + eventsPerPage;
  const eventsToDisplay = eventListData.slice(startIndex, endIndex);

  const itemContainer = document.getElementById("item-container");
  itemContainer.innerHTML = "";

  eventsToDisplay.forEach((event) => {
    const eventHTML = `
        <article class="event-container">
          <div class="container-event-date-month">
            <p class="event-date">${new Date(event.date).getDate()}</p>
            <p class="event-month">${new Date(event.date).toLocaleString(
              "en-US",
              {
                month: "long",
              }
            )}</p>
          </div>
          <div class="margin-top-15">
            <a href=""><h3>${event.title}</h3></a>
            <p>${event.description}</p>
          </div>
          <div>
            <p class="margin-bottom-0">${event.time}</p>
            <p class="margin-bottom-0">${event.location}</p>
          </div>
        </article>
      `;
    itemContainer.innerHTML += eventHTML;
  });

  const pageNumber = document.getElementById("page-number");
  pageNumber.textContent = `Page ${currentEventPage} of ${Math.ceil(
    eventListData.length / eventsPerPage
  )}`;
}

function changePage(direction) {
  const totalPages = Math.ceil(eventListData.length / eventsPerPage);
  if (direction === "prev" && currentEventPage > 1) {
    currentEventPage--;
  } else if (direction === "next" && currentEventPage < totalPages) {
    currentEventPage++;
  }
  renderEvents();
}

// Initial render
renderEvents();
