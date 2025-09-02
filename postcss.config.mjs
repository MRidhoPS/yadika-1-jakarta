const config = {
  plugins: ["@tailwindcss/postcss"],

  // tailwind.config.js
  extend: {
    keyframes: {
      wave: {
        '0%': { backgroundPosition: '0% 50%' },
        '50%': { backgroundPosition: '100% 50%' },
        '100%': { backgroundPosition: '0% 50%' },
      },
    },
    animation: {
      wave: 'wave 2s ease-in-out infinite',
    },
  }

};



export default config;
