/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{html,js,svelte,ts}'],
  theme: {
     screens: {
      xs: '0',
      sm: '480px',
      md: '768px',
      lg: '976px',
      xl: '1440px',
    },

    fontSize: {
      xs: '0.5rem',
      sm: '0.75rem',
      base: '1rem',
      xl: '1.25rem',
      '2xl': '1.5rem',
      '3xl': '1.75rem',
      '4xl': '2rem',
      '5xl': '2.25rem',
      '6xl': '2.5rem',
      '7xl': '2.75rem',
      '8xl': '3rem',
      '9xl': '3.5rem',
      '10xl': '4rem',
    },



    extend: {
      colors: {
        'blue-a': '#EEF9FF',
        'blue-b': '#00c6ff',
        'blue-c': '#71d6f4',
        'blue-d': '#120d48',
        'gold': '#CFBC54',
        
        
      },

      fontFamily: {
        body: ['Urbanist', 'sans-serif'],
        display: ['Nunito Sans', 'sans-serif'],
      },

      boxShadow: {
        '3xl': '4px 4px 4px 0px rgba(0, 0, 0, 0.2)',
      },

      backgroundImage: {
        'product-pattern': "url(./lib/assets/bg-4.png)",
      },

      animation: {
        'bounce2': 'jump 2s alternate infinite;;',
      },

      keyframes: {
        jump: {
          '0%': { transform: 'translateX(0px) translateY(15px)' },
        }
      },

      
    },
  },
  plugins: [require("daisyui")],
  daisyui: {
    themes: false,
    darkTheme: "light",
  },
}

