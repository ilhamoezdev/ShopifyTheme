// Global JavaScript for Shopify Theme

// Update cart count
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

// Add to cart functionality
document.addEventListener('submit', function(e) {
  if (e.target.matches('form[action*="/cart/add"]')) {
    e.preventDefault();
    
    const form = e.target;
    const submitButton = form.querySelector('button[type="submit"]');
    const originalText = submitButton.textContent;
    
    submitButton.disabled = true;
    submitButton.classList.add('opacity-75', 'cursor-not-allowed');
    submitButton.textContent = 'Adding...';
    
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
        submitButton.classList.remove('opacity-75', 'cursor-not-allowed');
        submitButton.textContent = originalText;
      } else {
        updateCartCount();
        submitButton.textContent = '✓ Added!';
        submitButton.classList.add('bg-green-500');
        setTimeout(() => {
          submitButton.disabled = false;
          submitButton.classList.remove('opacity-75', 'cursor-not-allowed', 'bg-green-500');
          submitButton.textContent = originalText;
        }, 2000);
      }
    })
    .catch(error => {
      console.error('Error:', error);
      alert('There was an error adding the product to your cart.');
      submitButton.disabled = false;
      submitButton.classList.remove('opacity-75', 'cursor-not-allowed');
      submitButton.textContent = originalText;
    });
  }
});

// Product media gallery
document.addEventListener('click', function(e) {
  if (e.target.closest('.product__media-thumbnail')) {
    const thumbnail = e.target.closest('.product__media-thumbnail');
    const mainImage = document.getElementById('ProductImage-' + thumbnail.closest('.section').dataset.sectionId);
    
    if (mainImage) {
      // Remove active class from all thumbnails
      document.querySelectorAll('.product__media-thumbnail').forEach(thumb => {
        thumb.classList.remove('border-gray-900');
        thumb.classList.add('border-transparent');
      });
      
      // Add active class to clicked thumbnail
      thumbnail.classList.remove('border-transparent');
      thumbnail.classList.add('border-gray-900');
      
      // Update main image
      const thumbnailImg = thumbnail.querySelector('img');
      if (thumbnailImg) {
        mainImage.srcset = thumbnailImg.srcset || thumbnailImg.src;
        mainImage.src = thumbnailImg.src;
        mainImage.alt = thumbnailImg.alt;
      }
    }
  }
});

// Initialize cart count on page load
document.addEventListener('DOMContentLoaded', function() {
  updateCartCount();
});

// Smooth scroll for anchor links
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

// Mobile menu toggle
document.addEventListener('DOMContentLoaded', function() {
  const mobileMenuButton = document.querySelector('[aria-label="Menu"]');
  const mobileMenu = document.getElementById('mobile-menu');
  
  if (mobileMenuButton && mobileMenu) {
    mobileMenuButton.addEventListener('click', function() {
      mobileMenu.classList.toggle('hidden');
    });
  }
});
