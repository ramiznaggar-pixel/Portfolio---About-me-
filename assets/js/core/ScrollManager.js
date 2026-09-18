export class ScrollManager {
  constructor() {
    const items = document.querySelectorAll(".reveal");
    const observer = new IntersectionObserver(
      (es) =>
        es.forEach((e) => {
          if (e.isIntersecting) {
            e.target.classList.add("visible");
            observer.unobserve(e.target);
          }
        }),
      { threshold: 0.12 },
    );
    items.forEach((i) => observer.observe(i));
    const h = document.querySelector("#header");
    addEventListener(
      "scroll",
      () => h.classList.toggle("scrolled", scrollY > 20),
      { passive: true },
    );
  }
}
