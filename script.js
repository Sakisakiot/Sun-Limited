// Navbar scroll effect
const navbar = document.getElementById('navbar');
window.addEventListener('scroll', () => {
  if (window.scrollY > 60) {
    navbar.classList.add('scrolled');
  } else {
    navbar.classList.remove('scrolled');
  }
});

// Mobile nav toggle
const navToggle = document.getElementById('navToggle');
const navLinks = document.querySelector('.nav-links');
navToggle.addEventListener('click', () => {
  navLinks.style.display = navLinks.style.display === 'flex' ? 'none' : 'flex';
  navLinks.style.flexDirection = 'column';
  navLinks.style.position = 'absolute';
  navLinks.style.top = '70px';
  navLinks.style.right = '24px';
  navLinks.style.background = 'white';
  navLinks.style.padding = '16px 24px';
  navLinks.style.borderRadius = '12px';
  navLinks.style.boxShadow = '0 8px 32px rgba(0,0,0,0.15)';
  navLinks.style.gap = '12px';
  // Fix link color in mobile menu
  navLinks.querySelectorAll('a').forEach(a => a.style.color = '#0f172a');
});

// Close mobile menu on link click
navLinks.querySelectorAll('a').forEach(link => {
  link.addEventListener('click', () => {
    if (window.innerWidth <= 768) {
      navLinks.style.display = 'none';
    }
  });
});

// Smooth scroll with offset for fixed navbar
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function (e) {
    const target = document.querySelector(this.getAttribute('href'));
    if (target) {
      e.preventDefault();
      const offset = 80;
      const top = target.getBoundingClientRect().top + window.pageYOffset - offset;
      window.scrollTo({ top, behavior: 'smooth' });
    }
  });
});

// Intersection Observer for fade-in animations
const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.style.opacity = '1';
      entry.target.style.transform = 'translateY(0)';
    }
  });
}, { threshold: 0.1 });

document.querySelectorAll('.service-card, .realisation-card, .temoignage-card, .avantage-item').forEach(el => {
  el.style.opacity = '0';
  el.style.transform = 'translateY(24px)';
  el.style.transition = 'opacity 0.5s ease, transform 0.5s ease';
  observer.observe(el);
});

// Form submit
const form = document.getElementById('contactForm');
form.addEventListener('submit', (e) => {
  e.preventDefault();
  const btn = form.querySelector('button[type="submit"]');
  btn.textContent = '✓ Demande envoyée !';
  btn.style.background = '#16a34a';
  btn.disabled = true;
  setTimeout(() => {
    btn.textContent = 'Envoyer ma demande de devis';
    btn.style.background = '';
    btn.disabled = false;
    form.reset();
  }, 4000);
});

// Duplicate ribbon content for infinite scroll
const ribbon = document.querySelector('.ribbon-inner');
ribbon.innerHTML += ribbon.innerHTML;

// Carousel témoignages
const carousel = document.getElementById('carousel');
const prevBtn = document.getElementById('prevBtn');
const nextBtn = document.getElementById('nextBtn');
const dotsContainer = document.getElementById('carouselDots');

const cards = carousel.querySelectorAll('.temoignage-card');
const total = cards.length;
const visible = window.innerWidth <= 768 ? 1 : 3;
const maxIndex = total - visible;
let current = 0;

// Créer les dots
for (let i = 0; i <= maxIndex; i++) {
  const dot = document.createElement('button');
  dot.classList.add('carousel-dot');
  if (i === 0) dot.classList.add('active');
  dot.addEventListener('click', () => goTo(i));
  dotsContainer.appendChild(dot);
}

function goTo(index) {
  current = Math.max(0, Math.min(index, maxIndex));
  const cardWidth = cards[0].offsetWidth + 24;
  carousel.style.transform = `translateX(-${current * cardWidth}px)`;
  dotsContainer.querySelectorAll('.carousel-dot').forEach((d, i) => {
    d.classList.toggle('active', i === current);
  });
  prevBtn.style.opacity = current === 0 ? '0.3' : '1';
  nextBtn.style.opacity = current === maxIndex ? '0.3' : '1';
}

prevBtn.addEventListener('click', () => goTo(current - 1));
nextBtn.addEventListener('click', () => goTo(current + 1));

goTo(0);
