import React from 'react';
import { createRoot } from 'react-dom/client';

// Product Card Component
function ProductCard({ product }) {
  const [isAdding, setIsAdding] = React.useState(false);
  const [added, setAdded] = React.useState(false);

  const handleAddToCart = async (e) => {
    e.preventDefault();
    if (isAdding || !product.available) return;

    setIsAdding(true);
    
    const formData = new FormData();
    formData.append('id', product.variantId);
    formData.append('quantity', 1);

    try {
      const response = await fetch(window.routes.cart_add_url, {
        method: 'POST',
        body: formData
      });

      const data = await response.json();
      
      if (data.error) {
        alert(data.description || 'Error adding to cart');
      } else {
        setAdded(true);
        updateCartCount();
        setTimeout(() => {
          setAdded(false);
          setIsAdding(false);
        }, 2000);
      }
    } catch (error) {
      console.error('Error:', error);
      alert('Error adding to cart');
      setIsAdding(false);
    }
  };

  return (
    <div className="product-card">
      <a href={product.url} className="block">
        <div className="relative overflow-hidden bg-gray-100 aspect-square">
          {product.image && (
            <img
              src={product.image}
              alt={product.title}
              className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
              loading="lazy"
            />
          )}
          {!product.available && (
            <div className="absolute top-4 right-4 bg-red-500 text-white px-3 py-1 rounded-full text-xs font-semibold uppercase">
              Sold Out
            </div>
          )}
          {product.comparePrice > product.price && (
            <div className="absolute top-4 left-4 bg-green-500 text-white px-3 py-1 rounded-full text-xs font-semibold">
              Sale
            </div>
          )}
        </div>
      </a>
      
      <div className="p-6">
        <a href={product.url} className="block mb-2">
          <h3 className="text-lg font-semibold text-gray-900 hover:text-accent transition-colors line-clamp-2">
            {product.title}
          </h3>
        </a>
        
        <div className="flex items-center gap-2 mb-4">
          <span className="text-2xl font-bold text-gray-900">
            {product.formattedPrice}
          </span>
          {product.comparePrice > product.price && (
            <span className="text-sm text-gray-500 line-through">
              {product.formattedComparePrice}
            </span>
          )}
        </div>
        
        <form onSubmit={handleAddToCart}>
          <button
            type="submit"
            disabled={!product.available || isAdding}
            className={`w-full btn ${
              product.available && !added
                ? 'btn-primary'
                : added
                ? 'btn-accent'
                : 'bg-gray-300 text-gray-500 cursor-not-allowed'
            }`}
          >
            {isAdding
              ? 'Adding...'
              : added
              ? '✓ Added!'
              : product.available
              ? 'Add to Cart'
              : 'Sold Out'}
          </button>
        </form>
      </div>
    </div>
  );
}

// Cart Count Component
function CartCount() {
  const [count, setCount] = React.useState(0);

  React.useEffect(() => {
    updateCartCount();
    const interval = setInterval(updateCartCount, 5000);
    return () => clearInterval(interval);
  }, []);

  function updateCartCount() {
    fetch(window.routes.cart_url + '.js')
      .then(response => response.json())
      .then(data => setCount(data.item_count))
      .catch(() => {});
  }

  if (count === 0) return null;

  return (
    <span className="absolute -top-2 -right-2 bg-accent text-white text-xs font-bold rounded-full w-5 h-5 flex items-center justify-center">
      {count}
    </span>
  );
}

// Initialize React Components
document.addEventListener('DOMContentLoaded', () => {
  // Initialize cart count
  const cartLinks = document.querySelectorAll('.cart-link');
  cartLinks.forEach(link => {
    const container = document.createElement('span');
    container.className = 'relative';
    link.appendChild(container);
    const root = createRoot(container);
    root.render(<CartCount />);
  });

  // Initialize product cards with React (if data attributes are present)
  const productCardContainers = document.querySelectorAll('[data-react-product-card]');
  productCardContainers.forEach(container => {
    try {
      const productData = JSON.parse(container.dataset.product);
      const root = createRoot(container);
      root.render(<ProductCard product={productData} />);
    } catch (e) {
      console.error('Error rendering product card:', e);
    }
  });
});

// Export for global use
window.updateCartCount = function() {
  const cartLinks = document.querySelectorAll('.cart-link');
  cartLinks.forEach(link => {
    const container = link.querySelector('.relative');
    if (container) {
      const root = createRoot(container);
      root.render(<CartCount />);
    }
  });
};

