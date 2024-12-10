document.addEventListener("DOMContentLoaded", () => {
  const sections = document.querySelectorAll("section");
  const navLinks = document.querySelectorAll(".nav-menu a");
  const homeLink = document.querySelector(".nav-menu li:first-child");
  const podebradySection = document.querySelector("#podebrady-section");
  const navbar = document.querySelector(".container-logo"); // Assuming this is your navbar

  const getNavbarHeight = () => {
    // Dynamically calculate the navbar height (could be done with either of these)
    return navbar.offsetHeight; // This returns the height of the navbar element
  };

  const handleScroll = () => {
    const navbarHeight = getNavbarHeight(); // Get the current navbar height
    let currentSection = "";

    // If the user is at the top of the page, make Home active
    if (window.scrollY === 0) {
      homeLink.classList.add("active");
      navLinks.forEach((link) => {
        if (link !== homeLink.querySelector("a")) {
          link.parentElement.classList.remove("active");
        }
      });
      return; // Exit early since we're at the top
    }

    // Otherwise, check the sections that are in view
    sections.forEach((section) => {
      const rect = section.getBoundingClientRect();
      if (
        rect.top <= window.innerHeight / 2 + navbarHeight &&
        rect.bottom >= window.innerHeight / 2 + navbarHeight
      ) {
        currentSection = section.getAttribute("id");
      }
    });

    // Reset active class for all links
    navLinks.forEach((link) => {
      link.parentElement.classList.remove("active");
    });

    // Special logic for Poděbrady
    if (podebradySection) {
      const rect = podebradySection.getBoundingClientRect();
      if (
        rect.top <= window.innerHeight / 2 + navbarHeight &&
        rect.bottom >= window.innerHeight / 2 + navbarHeight
      ) {
        // Activate Poděbrady link
        navLinks.forEach((link) => {
          if (link.getAttribute("href") === "#podebrady-section") {
            link.parentElement.classList.add("active");
          }
        });
        return; // Exit since no other section should be active
      }
    }

    // Set active class for the current section
    navLinks.forEach((link) => {
      if (link.getAttribute("href") === `#${currentSection}`) {
        link.parentElement.classList.add("active");
      }
    });

    // Home is active only when no other section is active
    if (!currentSection || currentSection === "podebrady-section") {
      homeLink.classList.add("active");
    }
  };

  // Scroll to top when Home is clicked and activate it
  homeLink.querySelector("a").addEventListener("click", (e) => {
    e.preventDefault();
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });

    // Set Home as active immediately
    homeLink.classList.add("active");
    // Remove active class from other sections
    navLinks.forEach((link) => {
      if (link !== homeLink.querySelector("a")) {
        link.parentElement.classList.remove("active");
      }
    });
  });

  // Listen to the scroll event
  document.addEventListener("scroll", handleScroll);

  // Smooth scrolling for navigation links
  navLinks.forEach((link) => {
    link.addEventListener("click", (e) => {
      e.preventDefault();
      const targetId = link.getAttribute("href").substring(1);
      const targetSection = document.getElementById(targetId);

      if (targetSection) {
        const navbarHeight = getNavbarHeight(); // Recalculate the navbar height for smooth scrolling
        window.scrollTo({
          top: targetSection.offsetTop - navbarHeight, // Subtract navbar height for proper scrolling
          behavior: "smooth",
        });
      }
    });
  });

  // Initial scroll handler to set active class based on the current scroll position
  handleScroll();
});
