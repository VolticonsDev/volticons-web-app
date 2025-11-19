/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx,vue,svelte,html}",
  ],
  theme: {
    extend: {
      colors: {
        'volt-violet': '#5B21B6',
        'volt-orange': '#EA580C',
        'light': '#E0E0E0',
        'dark': '#333333',
        'dark-bg': '#1a1a2e',    
        'header-bg': '#16162a',  
        'card-bg': '#FFFFFF',    
        'volt-accent-secondary': '#00ADB5', 
      },
      scale: {
        '115': '1.15', 
      },
      fontFamily: {
        'volt-sans': ['Rajdhani', 'sans-serif'], 
      },
      keyframes: {
        'slow-fade-in': {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
      },
      animation: {
        'slow-fade-in': 'slow-fade-in 1s ease-in-out forwards', 
      },
    },
  },
  plugins: [],
}