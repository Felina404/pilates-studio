/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
          colors: {
            primary: {
              DEFAULT: '#F3D0D7',       // Primary (main pink)
              background: '#FFE2E2',    // Light background pink
              contrast: '#AAAAAA',      // White for on-primary
              // contrast: '#5030db',      // White for on-primary
            },
            secondary: '#F6F5F2',
            accent: '#F0A8D0',
            surface: '#F6F5F2',
            darkBg: '#dfdedf',
            text: '#000000'
          }, 
      animation: {
        dropdown: "dropdown 300ms ease-in-out",
      },
      keyframes: {
        dropdown: {
          "0%": { opacity: "0", transform: "translateY(-10px)" },
          // "50%": { opacity: "0.5", transform: "translateY(50px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
      },
    },
  },
  plugins: [],
}

