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
        'lion-red-light': '#FF2020',
        'lion-red-dark': '#8B0000',
        'lion-black': '#080808',
        'lion-dark': '#0F0F0F',
        'lion-card': '#141414',
        'lion-text': '#D8D8D8',
        'lion-dim': '#666666',
        'gold': '#C9A84C',
      },
      fontFamily: {
        'display': ['Manrope', 'sans-serif'],
        'body': ['Manrope', 'sans-serif'],
        'sans': ['Manrope', 'sans-serif'],
      },
      borderRadius: {
        'sm': '6px',
        DEFAULT: '8px',
        'md': '10px',
        'lg': '12px',
        'xl': '16px',
        '2xl': '20px',
      },
      boxShadow: {
        'red': '0 8px 32px rgba(204,0,0,0.35)',
        'red-lg': '0 16px 60px rgba(204,0,0,0.3)',
        'card': '0 4px 24px rgba(0,0,0,0.4)',
        'card-hover': '0 16px 48px rgba(0,0,0,0.5)',
      },
      backgroundImage: {
        'red-gradient': 'linear-gradient(135deg, #CC0000, #8B0000)',
        'dark-gradient': 'linear-gradient(180deg, #080808 0%, #0F0F0F 100%)',
      },
      animation: {
        'float': 'float 6s ease-in-out infinite',
        'pulse-glow': 'pulseGlow 2.5s ease-in-out infinite',
        'slide-in-left': 'slideInLeft 0.7s ease forwards',
        'slide-in-right': 'slideInRight 0.7s ease forwards',
        'spin-slow': 'spin 20s linear infinite',
      },
      keyframes: {
        float: {
          '0%,100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-12px)' },
        },
        pulseGlow: {
          '0%,100%': { boxShadow: '0 0 20px rgba(204,0,0,0.3)' },
          '50%': { boxShadow: '0 0 50px rgba(204,0,0,0.7)' },
        },
        slideInLeft: {
          from: { opacity:'0', transform:'translateX(-60px)' },
          to: { opacity:'1', transform:'translateX(0)' },
        },
        slideInRight: {
          from: { opacity:'0', transform:'translateX(60px)' },
          to: { opacity:'1', transform:'translateX(0)' },
        },
      },
    },
  },
  plugins: [],
}
