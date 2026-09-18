import { ThemeManager } from "./core/ThemeManager.js";
import { Navigation } from "./core/Navigation.js";
import { ScrollManager } from "./core/ScrollManager.js";
import { CounterManager } from "./core/CounterManager.js";
import { ContactForm } from "./ui/ContactForm.js";

class PortfolioApp {
  constructor() {
    new ThemeManager(document.querySelector("#themeToggle"));
    new Navigation(
      document.querySelector("#menuToggle"),
      document.querySelector("#nav"),
    );
    new ScrollManager();
    new CounterManager();
    new ContactForm(
      document.querySelector("#contactForm"),
      document.querySelector("#formStatus"),
    );
    this.bindSectionLinks();
  }

  bindSectionLinks() {
    document.querySelectorAll("[data-scroll-target]").forEach((link) => {
      link.addEventListener("click", (event) => {
        const target = document.getElementById(link.dataset.scrollTarget);
        if (!target) return;
        event.preventDefault();
        target.scrollIntoView({ behavior: "smooth", block: "start" });
        history.replaceState(null, "", `#${target.id}`);
      });
    });
  }
}

new PortfolioApp();
