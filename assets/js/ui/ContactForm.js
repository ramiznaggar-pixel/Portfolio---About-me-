export class ContactForm {
  constructor(form, status) {
    this.form = form;
    this.status = status;
    this.submitButton = form.querySelector('button[type="submit"]');
    this.bind();
  }

  bind() {
    this.form.addEventListener("submit", async (event) => {
      event.preventDefault();
      if (!this.form.reportValidity()) return;
      this.status.textContent = "Sending your message...";
      this.submitButton.disabled = true;
      this.submitButton.setAttribute("aria-busy", "true");
      try {
        const response = await fetch(this.form.action, {
          method: "POST",
          body: new FormData(this.form),
          headers: { Accept: "application/json" },
        });
        if (!response.ok) throw new Error("Submission failed");
        const name = this.form.elements.name.value.trim();
        this.status.textContent = `Thanks, ${name}. Your message was sent successfully.`;
        this.form.reset();
      } catch {
        this.status.textContent =
          "We couldn't send the message right now. Please use the email or WhatsApp links instead.";
      } finally {
        this.submitButton.disabled = false;
        this.submitButton.removeAttribute("aria-busy");
      }
    });
  }
}
