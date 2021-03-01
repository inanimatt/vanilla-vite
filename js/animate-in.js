const once = true;

const observer = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('show');

      if (once) {
        observer.unobserve(entry.target);
      }

      return;
    }

    entry.target.classList.remove('show');
  });
}, {
  threshold: 0,
});

document.querySelectorAll('.animate-in').forEach(elem => observer.observe(elem));
