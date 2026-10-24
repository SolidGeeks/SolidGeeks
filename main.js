// Manifesto: one word open at a time. Click / Enter / Space opens; on a mouse, hovering previews too.
(() => {
  const root = document.querySelector('[data-words]');
  if (!root) return;
  const words = [...root.querySelectorAll('.word')];
  const open = (btn) => {
    words.forEach((w) => {
      const on = w === btn;
      w.setAttribute('aria-expanded', String(on));
      document.getElementById(w.getAttribute('aria-controls')).hidden = !on;
    });
  };
  words.forEach((w, i) => {
    w.addEventListener('click', () => open(w));
    w.addEventListener('keydown', (e) => {
      if (e.key === 'ArrowDown' || e.key === 'ArrowUp') {
        e.preventDefault();
        const n = words[(i + (e.key === 'ArrowDown' ? 1 : words.length - 1)) % words.length];
        n.focus(); open(n);
      }
    });
  });
  if (matchMedia('(hover: hover) and (pointer: fine)').matches) {
    words.forEach((w) => w.addEventListener('mouseenter', () => open(w)));
  }
})();
