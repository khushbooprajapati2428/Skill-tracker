

// /** @type {import('tailwindcss').Config} */
// module.exports = {
//   content: [
//     "./skill.html",
//     "./skill.js",
//     "./html/**/*.html",
//     "./html/css/JavaScript/React/src/**/*.{js,jsx,ts,tsx}",
//     "./html/css/JavaScript/React/src/component/utility/**/*.{js,jsx}"
//   ],
//   theme: {
//     extend: {},
//   },
//   plugins: [],
// }







/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./skill.html",
    "./skill.js",
    "./html/**/*.html",
    "./html/css/JavaScript/React/src/**/*.{js,jsx,ts,tsx}",
    "./html/css/JavaScript/React/src/component/utility/**/*.{js,jsx}"
  ],
  theme: {
    extend: {
      // --- Floating Animation Logic Yahan Hai ---
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0) translateX(0)' },
          '50%': { transform: 'translateY(-30px) translateX(15px)' },
        }
      },
      animation: {
        float: 'float 10s ease-in-out infinite',
      },
    },
  },
  plugins: [],
}



