import './style.css'
import AOS from 'aos';
import 'aos/dist/aos.css';
import ScrollReveal from 'scrollreveal';

// Initialize AOS animation library
AOS.init({
  duration: 800,
  easing: 'ease-out-cubic',
  once: true,
  offset: 50,
  delay: 50
});

// Initialize ScrollReveal
const sr = ScrollReveal({
  distance: '20px',
  duration: 1000,
  easing: 'cubic-bezier(0.5, 0, 0, 1)',
  interval: 100
});

document.addEventListener('DOMContentLoaded', () => {
  // Reveal animations
  sr.reveal('.feature-card', { origin: 'bottom' });
  sr.reveal('.hero-text', { origin: 'left' });
  sr.reveal('.hero-image-container', { origin: 'right', delay: 300 });
  sr.reveal('.section-title', { origin: 'top' });
  sr.reveal('.screenshot', { origin: 'bottom', interval: 200 });
  
  // Handle mobile navigation
  const menuToggle = document.querySelector('.menu-toggle');
  const navLinks = document.querySelector('.nav-links');
  
  if (menuToggle && navLinks) {
    menuToggle.addEventListener('click', () => {
      menuToggle.classList.toggle('active');
      navLinks.classList.toggle('active');
      document.body.classList.toggle('nav-open');
    });
    
    // Close mobile menu when clicking links
    document.querySelectorAll('.nav-links a').forEach(link => {
      link.addEventListener('click', () => {
        navLinks.classList.remove('active');
        menuToggle.classList.remove('active');
        document.body.classList.remove('nav-open');
      });
    });
  }

  // Handle smooth scrolling
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
      e.preventDefault();
      const target = document.querySelector(this.getAttribute('href'));
      if (target) {
        const headerOffset = 100;
        const elementPosition = target.getBoundingClientRect().top;
        const offsetPosition = elementPosition + window.pageYOffset - headerOffset;
        
        window.scrollTo({
          top: offsetPosition,
          behavior: 'smooth'
        });
      }
    });
  });

  // Add parallax effect to hero section
  const heroSection = document.querySelector('.hero');
  const heroImage = document.querySelector('.hero-image');
  const heroImageWrapper = document.querySelector('.hero-image-wrapper');
  const heroShapes = document.querySelectorAll('.hero-shape');
  
  if (heroSection && heroImage && window.innerWidth > 992) {
    window.addEventListener('mousemove', (e) => {
      const mouseX = e.clientX / window.innerWidth;
      const mouseY = e.clientY / window.innerHeight;
      
      const moveX = 20 * (mouseX - 0.5);
      const moveY = 20 * (mouseY - 0.5);
      
      heroImageWrapper.style.transform = `translate(${moveX}px, ${moveY}px)`;
      heroImage.style.transform = `perspective(1000px) rotateY(${-10 + moveX/2}deg) rotateX(${5 + moveY/2}deg)`;
      
      heroShapes.forEach((shape, index) => {
        const factor = index === 0 ? 3 : 2;
        shape.style.transform = `translate(${moveX * factor}px, ${moveY * factor}px)`;
      });
    });
  }
  
  // Sticky header effect
  const header = document.querySelector('header');
  if (header) {
    window.addEventListener('scroll', () => {
      if (window.scrollY > 50) {
        header.classList.add('sticky');
      } else {
        header.classList.remove('sticky');
      }
    });
  }
  
  // Update active link based on scroll position
  const sections = document.querySelectorAll('section[id]');
  const navItems = document.querySelectorAll('.nav-links a');
  
  function highlightNavOnScroll() {
    const scrollY = window.pageYOffset;
    
    sections.forEach(section => {
      const sectionHeight = section.offsetHeight;
      const sectionTop = section.offsetTop - 150;
      const sectionId = section.getAttribute('id');
      
      if (scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) {
        navItems.forEach(item => {
          item.classList.remove('active');
          if (item.getAttribute('href') === `#${sectionId}`) {
            item.classList.add('active');
          }
        });
      }
    });
  }
  
  window.addEventListener('scroll', highlightNavOnScroll);
  
  // Handle CTA buttons - making sure they work
  const ctaButtons = document.querySelectorAll('.cta-button');
  
  ctaButtons.forEach(button => {
    button.addEventListener('click', function(e) {
      const href = this.getAttribute('href');
      
      // If it's an anchor link, let the smooth scroll handle it
      if (href && href.startsWith('#')) {
        return;
      }
      
      // If it's an external link, make sure it opens in a new tab
      if (href && !this.getAttribute('target')) {
        this.setAttribute('target', '_blank');
      }
    });
  });
}); 