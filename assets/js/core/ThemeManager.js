export class ThemeManager {
  constructor(button) {
    this.button = button;
    this.key = "portfolio-theme";
    const saved = localStorage.getItem(this.key);
    const preferred =
      saved ||
      (window.matchMedia?.("(prefers-color-scheme: light)").matches
        ? "light"
        : "dark");
    this.apply(preferred);
    button.addEventListener("click", () => this.toggle());
  }
  toggle() {
    this.apply(document.body.classList.contains("light") ? "dark" : "light");
  }
  apply(theme) {
    const light = theme === "light";
    document.body.classList.toggle("light", light);
    localStorage.setItem(this.key, light ? "light" : "dark");
    this.button.textContent = light ? "☾" : "☀";
    this.button.setAttribute(
      "aria-label",
      light ? "Switch to dark theme" : "Switch to light theme",
    );
    this.button.title = light
      ? "Switch to dark theme"
      : "Switch to light theme";
  }
}
