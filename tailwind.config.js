/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './layout/**/*.liquid',
    './sections/**/*.liquid',
    './snippets/**/*.liquid',
    './templates/**/*.liquid',
    './assets/**/*.js',
    './assets/**/*.jsx'
  ],
  theme: {
    extend: {
      colors: {
        primary: '#1a1a1a', // Deep charcoal
        secondary: '#f8f6f0', // Cream white
        accent: '#d4af37', // Premium gold
        'gold-dark': '#b8860b',
        'gold-light': '#f4e87c',
        'cream': '#faf7f0',
        'beige': '#f5f1e8',
        'chocolate': '#3e2723',
        'pistachio': '#4a5d23',
        'walnut': '#5d4e37',
        'luxury-dark': '#0f0f0f',
      },
      fontFamily: {
        heading: ['Playfair Display', 'serif'],
        body: ['Inter', 'sans-serif'],
        'premium': ['Cinzel', 'serif'],
      },
      spacing: {
        '18': '4.5rem',
        '88': '22rem',
        '112': '28rem',
        '128': '32rem',
      },
      animation: {
        'fade-in': 'fadeIn 1s ease-out',
        'slide-up': 'slideUp 0.8s ease-out',
        'float': 'float 6s ease-in-out infinite',
        'glow': 'glow 2s ease-in-out infinite alternate',
        'parallax': 'parallax 20s linear infinite',
        'text-shimmer': 'textShimmer 2s linear infinite',
        'bounce-subtle': 'bounceSubtle 2s infinite',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0', transform: 'translateY(30px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        slideUp: {
          '0%': { transform: 'translateY(50px)', opacity: '0' },
          '100%': { transform: 'translateY(0)', opacity: '1' },
        },
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-20px)' },
        },
        glow: {
          '0%': { boxShadow: '0 0 20px rgba(212, 175, 55, 0.3)' },
          '100%': { boxShadow: '0 0 30px rgba(212, 175, 55, 0.6)' },
        },
        parallax: {
          '0%': { transform: 'translateY(0)' },
          '100%': { transform: 'translateY(-50px)' },
        },
        textShimmer: {
          '0%': { backgroundPosition: '-200% 0' },
          '100%': { backgroundPosition: '200% 0' },
        },
        bounceSubtle: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-10px)' },
        },
      },
      backgroundImage: {
        'baklava-pattern': "url('data:image/svg+xml,<svg xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 100 100\"><defs><pattern id=\"grain\" width=\"100\" height=\"100\" patternUnits=\"userSpaceOnUse\"><circle cx=\"25\" cy=\"25\" r=\"2\" fill=\"%23d4af37\" opacity=\"0.1\"/><circle cx=\"75\" cy=\"75\" r=\"1.5\" fill=\"%23d4af37\" opacity=\"0.15\"/><circle cx=\"50\" cy=\"50\" r=\"1\" fill=\"%23b8860b\" opacity=\"0.1\"/></pattern></defs><rect width=\"100\" height=\"100\" fill=\"url(%23grain)\"/></svg>')",
        'luxury-gradient': 'linear-gradient(135deg, #1a1a1a 0%, #2d2d2d 50%, #1a1a1a 100%)',
        'gold-gradient': 'linear-gradient(135deg, #d4af37 0%, #f4e87c 50%, #d4af37 100%)',
      },
      boxShadow: {
        'luxury': '0 20px 40px rgba(0, 0, 0, 0.3)',
        'gold': '0 0 30px rgba(212, 175, 55, 0.3)',
        'inner-luxury': 'inset 0 2px 4px rgba(0, 0, 0, 0.1)',
      },
    },
  },
  plugins: [],
}

