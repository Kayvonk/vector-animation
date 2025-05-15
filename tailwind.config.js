/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./app/**/*.{js,ts,jsx,tsx}', './pages/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      animation: {
        blob: 'blob 10s infinite',
      },
      keyframes: {
        blob: {
          '0%, 100%': {
            borderRadius: '50% 50% 50% 50%',
            transform: 'scale(1)',
          },
          '33%': {
            borderRadius: '60% 40% 30% 70%',
            transform: 'scale(1.05)',
          },
          '66%': {
            borderRadius: '40% 60% 70% 30%',
            transform: 'scale(0.95)',
          },
        },
      },
    },
  },
  plugins: [],
};
