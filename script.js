// Set current year
document.getElementById('year').textContent = new Date().getFullYear();

// Mobile menu toggle
const menuToggle = document.getElementById('menuToggle');
const navbarMenu = document.getElementById('navbarMenu');

menuToggle.addEventListener('click', () => {
  navbarMenu.classList.toggle('active');
});

// Close mobile menu when link is clicked
navbarMenu.querySelectorAll('a').forEach(link => {
  link.addEventListener('click', () => {
    navbarMenu.classList.remove('active');
  });
});

// Menu filter functionality
const filterButtons = document.querySelectorAll('.filter-btn');
const menuCategories = document.querySelectorAll('.menu-category');

filterButtons.forEach(button => {
  button.addEventListener('click', () => {
    const filterValue = button.getAttribute('data-filter');

    // Update active button
    filterButtons.forEach(btn => btn.classList.remove('active'));
    button.classList.add('active');

    // Filter menu categories
    menuCategories.forEach(category => {
      if (filterValue === 'all') {
        category.classList.add('active');
      } else {
        const categoryGroup = category.getAttribute('data-group');
        if (categoryGroup === filterValue) {
          category.classList.add('active');
        } else {
          category.classList.remove('active');
        }
      }
    });
  });
});

// Smooth scroll behavior for navbar links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function (e) {
    e.preventDefault();
    const target = document.querySelector(this.getAttribute('href'));
    if (target) {
      target.scrollIntoView({
        behavior: 'smooth',
        block: 'start'
      });
    }
  });
});

// Add scroll animation to navbar
let lastScrollTop = 0;
const navbar = document.getElementById('navbar');

window.addEventListener('scroll', () => {
  let scrollTop = window.pageYOffset || document.documentElement.scrollTop;

  if (scrollTop > 100) {
    navbar.style.boxShadow = '0 8px 24px rgba(0, 0, 0, 0.15)';
  } else {
    navbar.style.boxShadow = '0 8px 24px rgba(0, 0, 0, 0.12)';
  }

  lastScrollTop = scrollTop <= 0 ? 0 : scrollTop;
});
