/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      animation: {
        'slide-in': 'slideIn 1s ease-out',
        'slide-up': 'slideUp 0.8s ease-out',
        'fade-in': 'fadeIn 0.8s ease-out'
      },
      keyframes: {
        slideIn: {
          '0%': { transform: 'translateX(50%)', opacity: '0.3' },
          '100%': { transform: 'translateX(0)', opacity: '1' }
        },
        slideUp: {
          '0%': { transform: 'translateY(20%)', opacity: '0.3' },
          '100%': { transform: 'translateY(0)', opacity: '1' }
        },
        fadeIn: {
          '0%': { opacity: '0.3' },
          '100%': { opacity: '1' }
        }
      }
    },
  },
  plugins: [],
}
