// tailwind.config.js
module.exports = {
    content: [
      "./src/**/*.{html,js,jsx,ts,tsx}", // Asegúrate de que esté configurado para tus archivos
    ],
    theme: {
      extend: {
        // Otras extensiones si las necesitas
      },
    },
    variants: {
      extend: {
        backgroundOpacity: ['responsive', 'hover', 'focus', 'active', 'group-hover'],
      },
    },
    plugins: [],
  };
  