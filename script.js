// Mobile nav toggle
  const navToggle = document.getElementById('navToggle');
  const mobileMenu = document.getElementById('mobileMenu');
  const mobileOverlay = document.getElementById('mobileOverlay');
  const mobileMenuClose = document.getElementById('mobileMenuClose');

  function openMobileMenu() {
    mobileMenu.classList.add('open');
    mobileOverlay.classList.add('open');
    navToggle.classList.add('open');
    navToggle.setAttribute('aria-expanded', 'true');
    document.body.style.overflow = 'hidden';
  }

  function closeMobileMenu() {
    mobileMenu.classList.remove('open');
    mobileOverlay.classList.remove('open');
    navToggle.classList.remove('open');
    navToggle.setAttribute('aria-expanded', 'false');
    document.body.style.overflow = '';
  }

  navToggle.addEventListener('click', () => {
    if (mobileMenu.classList.contains('open')) {
      closeMobileMenu();
    } else {
      openMobileMenu();
    }
  });

  if (mobileMenuClose) {
    mobileMenuClose.addEventListener('click', closeMobileMenu);
  }

  if (mobileOverlay) {
    mobileOverlay.addEventListener('click', closeMobileMenu);
  }

  document.querySelectorAll('.mobile-menu-links a').forEach(link => {
    link.addEventListener('click', closeMobileMenu);
  });

  // Quote form success notification
const quoteForm = document.getElementById('quoteForm');
const formSuccess = document.getElementById('formSuccess');
if (quoteForm && formSuccess) {
  quoteForm.addEventListener('submit', () => {
    setTimeout(() => {
      formSuccess.classList.add('show');
      formSuccess.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
    }, 400);
  });
}

// Footer year
  document.getElementById('year').textContent = new Date().getFullYear();

const heroSlider = document.querySelector('.hero-bg-image');
if (heroSlider) {
  const slides = heroSlider.querySelectorAll('.hero-slide');
  let current = 0;
  setInterval(() => {
    slides[current].classList.remove('active');
    current = (current + 1) % slides.length;
    slides[current].classList.add('active');
  }, 10000);
}

document.querySelectorAll('.btn').forEach((btn) => {
  btn.addEventListener('click', (e) => {
    const rect = btn.getBoundingClientRect();
    const ripple = document.createElement('span');
    const size = Math.max(rect.width, rect.height);
    ripple.className = 'ripple';
    ripple.style.width = ripple.style.height = `${size}px`;
    ripple.style.left = `${e.clientX - rect.left - size / 2}px`;
    ripple.style.top = `${e.clientY - rect.top - size / 2}px`;
    btn.appendChild(ripple);
    ripple.addEventListener('animationend', () => ripple.remove());
  });
});

// Scroll-reveal: fade + rise in sections as the user scrolls to them
const revealTargets = document.querySelectorAll('section:not(.hero)');
revealTargets.forEach((el) => el.classList.add('reveal'));

const revealObserver = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      entry.target.classList.add('is-visible');
      revealObserver.unobserve(entry.target);
    }
  });
}, { threshold: 0.12, rootMargin: '0px 0px -60px 0px' });

revealTargets.forEach((el) => revealObserver.observe(el));
