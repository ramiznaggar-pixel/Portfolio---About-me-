export class CursorGlow {
  constructor(el) {
    addEventListener("pointermove", (e) => {
      el.style.left = e.clientX + "px";
      el.style.top = e.clientY + "px";
    });
  }
}
