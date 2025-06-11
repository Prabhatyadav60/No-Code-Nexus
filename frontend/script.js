// Smooth scrolling for internal links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function(e) {
    e.preventDefault();
    document.querySelector(this.getAttribute('href')).scrollIntoView({ behavior: 'smooth' });
  });
});

// Mobile hamburger toggle
// Mobile Nav Toggle
const nav = document.querySelector('.nav ul');
const toggle = document.querySelector('.nav-toggle');
toggle.addEventListener('click',()=>{nav.style.display = nav.style.display==='flex'? 'none':'flex';nav.style.flexDirection='column';nav.style.background='var(--dark-shade)';});
let opened = false;
toggle.addEventListener('click', () => {
  opened = !opened;
  nav.style.display = opened ? 'flex' : 'none';
});

// Trigger animations on scroll
const animated = document.querySelectorAll('.animate');
const observer = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.style.opacity = 1;
      entry.target.classList.add('visible');
    }
  });
}, { threshold: 0.2 });
animated.forEach(el => observer.observe(el));

// Particle Background
const canvas = document.getElementById('particles');
const ctx = canvas.getContext('2d');
let particlesArray;

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

// Create Particle
class Particle {
  constructor() {
    this.x = Math.random() * canvas.width;
    this.y = Math.random() * canvas.height;
    this.size = Math.random() * 2 + 1;
    this.speedX = Math.random() * 0.5 - 0.25;
    this.speedY = Math.random() * 0.5 - 0.25;
  }
  update() {
    this.x += this.speedX;
    this.y += this.speedY;
    if (this.x < 0 || this.x > canvas.width) this.speedX = -this.speedX;
    if (this.y < 0 || this.y > canvas.height) this.speedY = -this.speedY;
  }
  draw() {
    ctx.fillStyle = 'rgba(56, 189, 248, 0.7)';
    ctx.beginPath();
    ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
    ctx.fill();
  }
}

function initParticles() {
  particlesArray = [];
  const numberOfParticles = (canvas.width * canvas.height) / 8000;
  for (let i = 0; i < numberOfParticles; i++) {
    particlesArray.push(new Particle());
  }
}

function animateParticles() {
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  particlesArray.forEach(particle => {
    particle.update();
    particle.draw();
  });
  requestAnimationFrame(animateParticles);
}

window.addEventListener('resize', () => {
  canvas.width = innerWidth;
  canvas.height = innerHeight;
  initParticles();
});

initParticles();
animateParticles();

// Typewriter Effect
const headingText = 'Build & Deploy Websites with Natural Language';
const subText = 'From prompt to published in seconds — no code, no hassle. All features are 100% Free.';
let headIndex = 0, subIndex = 0;
function typeWriter(el, text, index, callback) {
  if (index < text.length) {
    el.textContent += text.charAt(index);
    setTimeout(() => typeWriter(el, text, index + 1, callback), 75);
  } else if (callback) callback();
}
window.addEventListener('load', () => {
  const hEl = document.getElementById('typewriter-heading');
  const pEl = document.getElementById('typewriter-sub');
  typeWriter(hEl, headingText, 0, () => typeWriter(pEl, subText, 0));
});

// Image Swapping
const imgs = document.querySelectorAll('.swap-img');
let current = 0;
setInterval(() => {
  imgs[current].classList.remove('show');
  current = (current + 1) % imgs.length;
  imgs[current].classList.add('show');
}, 3500);

// Smooth scrolling
document.querySelectorAll('a[href^="#"]').forEach(a=>a.addEventListener('click',e=>{e.preventDefault();document.querySelector(a.getAttribute('href')).scrollIntoView({behavior:'smooth'});}));



// Particle Background (unchanged)
// ... existing particle code from previous version ...