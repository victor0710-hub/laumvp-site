const menuButton = document.querySelector('.menu-toggle');
const nav = document.querySelector('.nav');
const headerRight = document.querySelector('.header-right');

menuButton.addEventListener('click', () => {
  const open = headerRight.classList.toggle('open');
  menuButton.setAttribute('aria-expanded', String(open));
  document.body.style.overflow = open ? 'hidden' : '';
});

document.querySelectorAll('.nav a').forEach(link => {
  link.addEventListener('click', () => {
    headerRight.classList.remove('open');
    menuButton.setAttribute('aria-expanded', 'false');
    document.body.style.overflow = '';
  });
});

const observer = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('visible');
      observer.unobserve(entry.target);
    }
  });
}, { threshold: 0.1 });

document.querySelectorAll('.reveal').forEach(el => observer.observe(el));
document.getElementById('year').textContent = new Date().getFullYear();

// Static-site-safe contact form:
// it DOES NOT expose Victor's personal email and stores nothing.
// Submit opens the visitor's own email app with the form already written.
const form = document.getElementById('contactForm');
form.addEventListener('submit', event => {
  event.preventDefault();

  const data = new FormData(form);
  const name = data.get('name').trim();
  const email = data.get('email').trim();
  const subject = data.get('subject').trim();
  const message = data.get('message').trim();

  const body =
`Name: ${name}
Email: ${email}

${message}`;

  window.location.href =
    `mailto:laumvpstudio@gmail.com?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
});


// V3: subtle attention effects.
const scrollProgress = document.getElementById('scrollProgress');
const cursorGlow = document.getElementById('cursorGlow');

function updateScrollProgress() {
  const max = document.documentElement.scrollHeight - window.innerHeight;
  const pct = max > 0 ? (window.scrollY / max) * 100 : 0;
  document.documentElement.style.setProperty('--scroll-progress', `${pct}%`);
}
updateScrollProgress();
window.addEventListener('scroll', updateScrollProgress, { passive: true });

if (window.matchMedia('(pointer:fine)').matches &&
    !window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
  window.addEventListener('mousemove', event => {
    cursorGlow.style.left = `${event.clientX}px`;
    cursorGlow.style.top = `${event.clientY}px`;
    cursorGlow.style.opacity = '1';
  }, { passive: true });

  document.documentElement.addEventListener('mouseleave', () => {
    cursorGlow.style.opacity = '0';
  });
}
