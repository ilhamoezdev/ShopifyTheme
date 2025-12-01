// Global JavaScript for Shopify Theme

// Update cart count
function updateCartCount() {
  fetch(window.routes.cart_url + '.js')
    .then(response => response.json())
    .then(data => {
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
        submitButton.textContent = originalText;
      } else {
        updateCartCount();
        submitButton.textContent = 'Added!';
        setTimeout(() => {
          submitButton.disabled = false;
          submitButton.textContent = originalText;
        }, 2000);
      }
    })
    .catch(error => {
      console.error('Error:', error);
      alert('There was an error adding the product to your cart.');
      submitButton.disabled = false;
      submitButton.textContent = originalText;
    });
  }
});

// Product media gallery
document.addEventListener('click', function(e) {
  if (e.target.closest('.product__media-thumbnail')) {
    const thumbnail = e.target.closest('.product__media-thumbnail');
    const mediaId = thumbnail.dataset.mediaId;
    const mainImage = document.getElementById('ProductImage-' + thumbnail.closest('.product').dataset.sectionId);
    
    if (mainImage) {
      // Remove active class from all thumbnails
      document.querySelectorAll('.product__media-thumbnail').forEach(thumb => {
        thumb.classList.remove('active');
      });
      
      // Add active class to clicked thumbnail
      thumbnail.classList.add('active');
      
      // Update main image (simplified - in production, you'd fetch the correct image)
      // This is a placeholder - you'd need to implement proper image switching
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

