export class CounterManager {
  constructor() {
    const obs = new IntersectionObserver(
      (es) =>
        es.forEach((e) => {
          if (!e.isIntersecting) return;
          const el = e.target,
            target = Number(el.dataset.count);
          let n = 0;
          const t = setInterval(() => {
            n = Math.min(target, n + Math.max(1, Math.ceil(target / 30)));
            el.textContent = n;
            if (n >= target) clearInterval(t);
          }, 30);
          obs.unobserve(el);
        }),
      { threshold: 0.8 },
    );
    document.querySelectorAll("[data-count]").forEach((e) => obs.observe(e));
  }
}
