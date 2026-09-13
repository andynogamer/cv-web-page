(function () {
  const navLinks = document.querySelectorAll("[data-nav] a");
  const sections = document.querySelectorAll("main section[id], footer[id]");
  const year = document.querySelector("[data-year]");

  if (year) {
    year.textContent = String(new Date().getFullYear());
  }

  if (!("IntersectionObserver" in window)) {
    return;
  }

  const observer = new IntersectionObserver(
    function (entries) {
      entries.forEach(function (entry) {
        if (!entry.isIntersecting) {
          return;
        }

        const hash = "#" + entry.target.id;
        navLinks.forEach(function (link) {
          const active = link.getAttribute("href") === hash;
          link.classList.toggle("is-active", active);
        });
      });
    },
    { rootMargin: "-45% 0px -45% 0px", threshold: 0 }
  );

  sections.forEach(function (section) {
    observer.observe(section);
  });
})();
