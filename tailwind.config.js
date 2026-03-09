/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        'lion-red': '#CC0000',
        'lion-red-light': '#FF1A1A',
        'lion-red-dark': '#990000',
        'lion-black': '#0A0A0A',
        'lion-dark': '#111111',
        'lion-darker': '#0D0D0D',
        'lion-gray': '#1A1A1A',
        'lion-gray-mid': '#2A2A2A',
        'lion-text': '#E0E0E0',
        'lion-text-dim': '#888888',
      },
      fontFamily: {
        'display': ['var(--font-oswald)', 'sans-serif'],
        'body': ['var(--font-barlow)', 'sans-serif'],
      },
      backgroundImage: {
        'red-gradient': 'linear-gradient(135deg, #CC0000, #FF1A1A)',
        'dark-gradient': 'linear-gradient(180deg, #0A0A0A 0%, #111111 100%)',
      },
      animation: {
        'pulse-red': 'pulseRed 2s infinite',
        'float': 'float 6s ease-in-out infinite',
        'slide-up': 'slideUp 0.8s ease-out forwards',
        'fade-in': 'fadeIn 1s ease-out forwards',
      },
      keyframes: {
        pulseRed: {
          '0%, 100%': { boxShadow: '0 0 20px rgba(204,0,0,0.5)' },
          '50%': { boxShadow: '0 0 40px rgba(204,0,0,0.8)' },
        },
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-10px)' },
        },
        slideUp: {
          from: { opacity: '0', transform: 'translateY(40px)' },
          to: { opacity: '1', transform: 'translateY(0)' },
        },
        fadeIn: {
          from: { opacity: '0' },
          to: { opacity: '1' },
        },
      },
    },
  },
  plugins: [],
}
