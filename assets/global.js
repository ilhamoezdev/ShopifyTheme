// Premium Baklava Theme - Global JavaScript

// Intersection Observer for scroll animations
const observerOptions = {
  threshold: 0.1,
  rootMargin: '0px 0px -50px 0px'
};

const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('in-view');
    }
  });
}, observerOptions);

// Initialize animations on page load
document.addEventListener('DOMContentLoaded', function() {
  // Observe all animate-on-scroll elements
  document.querySelectorAll('.animate-on-scroll').forEach(el => {
    observer.observe(el);
  });

  updateCartCount();
});

// Update cart count with premium styling
function updateCartCount() {
  fetch(window.routes.cart_url + '.js')
    .then(response => response.json())
    .then(data => {
      // Update React cart count if available
      if (window.updateCartCount) {
        window.updateCartCount();
      }

      // Fallback for non-React elements
      const cartCountElements = document.querySelectorAll('[data-cart-count]');
      cartCountElements.forEach(element => {
        element.textContent = data.item_count;
        if (data.item_count > 0) {
          element.style.display = 'flex';
        } else {
          element.style.display = 'none';
        }
      });
    })
    .catch(error => {
      console.error('Error updating cart count:', error);
    });
}

// Premium add to cart functionality
document.addEventListener('submit', function(e) {
  if (e.target.matches('form[action*="/cart/add"]')) {
    e.preventDefault();

    const form = e.target;
    const submitButton = form.querySelector('button[type="submit"]');
    const originalText = submitButton.textContent;

    submitButton.disabled = true;
    submitButton.classList.add('opacity-75', 'cursor-not-allowed', 'animate-pulse');
    submitButton.textContent = 'Adding to Cart...';

    const formData = new FormData(form);

    fetch(window.routes.cart_add_url, {
      method: 'POST',
      body: formData
    })
    .then(response => response.json())
    .then(data => {
      if (data.error) {
        alert(data.description || 'There was an error adding the product to your cart.');
        submitButton.disabled = false;
        submitButton.classList.remove('opacity-75', 'cursor-not-allowed', 'animate-pulse');
        submitButton.textContent = originalText;
      } else {
        updateCartCount();
        submitButton.textContent = '✓ Added to Cart!';
        submitButton.classList.add('bg-green-500', 'text-white');
        submitButton.classList.remove('btn-accent');

        // Success animation
        setTimeout(() => {
          submitButton.disabled = false;
          submitButton.classList.remove('opacity-75', 'cursor-not-allowed', 'animate-pulse', 'bg-green-500', 'text-white');
          submitButton.classList.add('btn-accent');
          submitButton.textContent = originalText;
        }, 2500);
      }
    })
    .catch(error => {
      console.error('Error:', error);
      alert('There was an error adding the product to your cart.');
      submitButton.disabled = false;
      submitButton.classList.remove('opacity-75', 'cursor-not-allowed', 'animate-pulse');
      submitButton.textContent = originalText;
    });
  }
});

// Enhanced product media gallery
document.addEventListener('click', function(e) {
  if (e.target.closest('.product__media-thumbnail')) {
    const thumbnail = e.target.closest('.product__media-thumbnail');
    const mainImage = document.getElementById('ProductImage-' + thumbnail.closest('.section').dataset.sectionId);

    if (mainImage) {
      // Remove active class from all thumbnails
      document.querySelectorAll('.product__media-thumbnail').forEach(thumb => {
        thumb.classList.remove('border-accent', 'shadow-gold');
        thumb.classList.add('border-transparent');
      });

      // Add active class to clicked thumbnail
      thumbnail.classList.remove('border-transparent');
      thumbnail.classList.add('border-accent', 'shadow-gold');

      // Smooth transition for main image
      mainImage.style.opacity = '0.5';
      setTimeout(() => {
        const thumbnailImg = thumbnail.querySelector('img');
        if (thumbnailImg) {
          mainImage.srcset = thumbnailImg.srcset || thumbnailImg.src;
          mainImage.src = thumbnailImg.src;
          mainImage.alt = thumbnailImg.alt;
        }
        mainImage.style.opacity = '1';
      }, 150);
    }
  }
});

// Parallax effect for hero background
let parallaxElements = document.querySelectorAll('.parallax-element');
let ticking = false;

function updateParallax() {
  parallaxElements.forEach(element => {
    let scrolled = window.pageYOffset;
    let rate = scrolled * -0.5;
    element.style.transform = `translateY(${rate}px)`;
  });
  ticking = false;
}

window.addEventListener('scroll', function() {
  if (!ticking) {
    requestAnimationFrame(updateParallax);
    ticking = true;
  }
});

// Premium mobile menu with smooth animations
document.addEventListener('DOMContentLoaded', function() {
  const mobileMenuButton = document.querySelector('[aria-label="Menu"]');
  const mobileMenu = document.getElementById('mobile-menu');

  if (mobileMenuButton && mobileMenu) {
    mobileMenuButton.addEventListener('click', function() {
      const isHidden = mobileMenu.classList.contains('hidden');

      if (isHidden) {
        mobileMenu.classList.remove('hidden');
        mobileMenu.style.maxHeight = '0px';
        setTimeout(() => {
          mobileMenu.style.maxHeight = mobileMenu.scrollHeight + 'px';
        }, 10);
      } else {
        mobileMenu.style.maxHeight = '0px';
        setTimeout(() => {
          mobileMenu.classList.add('hidden');
        }, 300);
      }
    });
  }
});

// Enhanced smooth scroll for anchor links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function (e) {
    e.preventDefault();
    const target = document.querySelector(this.getAttribute('href'));
    if (target) {
      const headerOffset = 100;
      const elementPosition = target.offsetTop;
      const offsetPosition = elementPosition - headerOffset;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
  });
});

// Loading states for premium experience
document.addEventListener('DOMContentLoaded', function() {
  // Add loading class to body initially
  document.body.classList.add('loading');

  // Remove loading class after content loads
  window.addEventListener('load', function() {
    setTimeout(() => {
      document.body.classList.remove('loading');
    }, 100);
  });
});

// Premium hover effects for cards
document.addEventListener('mouseenter', function(e) {
  if (e.target.closest('.product-card, .collection-card')) {
    const card = e.target.closest('.product-card, .collection-card');
    card.style.transform = 'translateY(-8px) rotateX(2deg)';
  }
}, true);

document.addEventListener('mouseleave', function(e) {
  if (e.target.closest('.product-card, .collection-card')) {
    const card = e.target.closest('.product-card, .collection-card');
    card.style.transform = '';
  }
}, true);
