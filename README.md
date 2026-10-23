const revealElements = document.querySelectorAll('.reveal');

const revealObserver = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
        revealObserver.unobserve(entry.target);
      }
    });
  },
  { threshold: 0.15 }
);

revealElements.forEach((element) => revealObserver.observe(element));

const heroVisual = document.querySelector('.visual-card');

if (heroVisual) {
  window.addEventListener('pointermove', (event) => {
    const x = (event.clientX / window.innerWidth - 0.5) * 14;
    const y = (event.clientY / window.innerHeight - 0.5) * 14;
    heroVisual.style.transform = `rotateX(${(-y).toFixed(2)}deg) rotateY(${x.toFixed(2)}deg)`;
  });

  window.addEventListener('pointerleave', () => {
    heroVisual.style.transform = 'rotateX(0deg) rotateY(0deg)';
  });
}
