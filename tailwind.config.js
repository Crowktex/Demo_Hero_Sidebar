/** @type {import('tailwindcss').Config} */

module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      


      keyframes: {
        

        

        propel: {
          '0%': { transform: 'translatey(0)' },
          '20%': { transform: 'translatey(25%)' },
          '40%': { transform: 'translatey(-25%)' },
          '60%': { transform: 'translatey(25%)' },
          '100%': { transform: 'translatey(-25%)' },
        },

        


        wave: {
          '0%': { transform: 'rotate(0.0deg)' },
          '10%': { transform: 'rotate(14deg)' },
          '20%': { transform: 'rotate(-8deg)' },
          '30%': { transform: 'rotate(14deg)' },
          '40%': { transform: 'rotate(-4deg)' },
          '50%': { transform: 'rotate(10.0deg)' },
          '60%': { transform: 'rotate(0.0deg)' },
          '100%': { transform: 'rotate(0.0deg)' },
        },

      
      },
      animation: {
        'waving-hand': 'wave 2s linear infinite',
      },
    },
    

      
    },
   
  plugins: [],
}




