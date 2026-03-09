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
        /* Red */
        red: { DEFAULT:'#C8102E', bright:'#E8192C', dark:'#8B0000', dim:'rgba(200,16,46,0.12)' },
        /* Pure-black scale */
        black: {
          DEFAULT: '#050505',
          1: '#080808',
          2: '#0D0D0D',
          3: '#131313',
          4: '#1A1A1A',
          5: '#222222',
        },
        /* Text */
        loud:  '#FFFFFF',
        mid:   '#888888',
        soft:  '#444444',
        ghost: '#1E1E1E',
      },
      fontFamily: {
        bebas:   ['"Bebas Neue"', 'sans-serif'],
        manrope: ['Manrope', 'sans-serif'],
        sans:    ['Manrope', 'sans-serif'],
      },
      borderRadius: {
        sm: '4px', DEFAULT: '8px', md: '10px', lg: '12px', xl: '16px', '2xl': '20px',
      },
      fontSize: {
        '10xl': ['10rem',{lineHeight:'1'}],
        '11xl': ['12rem',{lineHeight:'1'}],
      },
    },
  },
  plugins: [],
}
