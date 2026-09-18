export class Navigation {
  constructor(button, nav) {
    this.button = button;
    this.nav = nav;
    button.addEventListener("click", () => this.toggle());
    nav
      .querySelectorAll("a")
      .forEach((link) => link.addEventListener("click", () => this.close()));
    document.addEventListener("keydown", (event) => {
      if (event.key === "Escape") this.close();
    });
  }

  toggle() {
    this.nav.classList.contains("open") ? this.close() : this.open();
  }
  open() {
    this.nav.classList.add("open");
    this.button.setAttribute("aria-expanded", "true");
    this.button.setAttribute("aria-label", "Close navigation");
    this.button.textContent = "\u00d7";
  }
  close() {
    this.nav.classList.remove("open");
    this.button.setAttribute("aria-expanded", "false");
    this.button.setAttribute("aria-label", "Open navigation");
    this.button.textContent = "\u2630";
  }
}
