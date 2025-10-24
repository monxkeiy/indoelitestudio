/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: 'class', // Kita tetap pakai 'dark', tapi default-nya akan dark
  content: [
    './public/index.html',
    './public/main.js',
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Poppins', 'sans-serif'],
        // Font 'Roboto Mono' untuk nuansa 'tech'
        mono: ['Roboto Mono', 'monospace'],
      },
      colors: {
        // Palet Warna CYBER-GRID
        'dark-bg': '#120E26',       // Latar belakang ungu gelap
        'neon-pink': '#FF00E6',
        'neon-teal': '#00F4E0',
        'light-text': '#E0E0E0',   // Teks putih pudar
        'dark-text': '#B0B0B0',    // Teks abu-abu (deskripsi)
        'card-bg': 'rgba(26, 16, 50, 0.7)', // Latar belakang kartu (transparan)
        'border-color': 'rgba(0, 244, 224, 0.3)', // Border teal tipis
      },
      // Keyframes untuk animasi "fade-in-up" (tetap) dan "glow" (baru)
      keyframes: {
        'fade-in-up': {
          '0%': { opacity: '0', transform: 'translateY(20px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        'glow': {
          '0%': { opacity: '0.3' },
          '50%': { opacity: '0.7' },
          '100%': { opacity: '0.3' },
        },
      },
      animation: {
        'fade-in-up': 'fade-in-up 0.6s ease-out both',
        // Animasi glow untuk sudut kartu
        'glow': 'glow 4s ease-in-out infinite alternate',
      },
      // Pola background grid (keren)
      backgroundImage: {
        'grid-pattern': "linear-gradient(rgba(0, 244, 224, 0.07) 1px, transparent 1px), linear-gradient(90deg, rgba(0, 244, 224, 0.07) 1px, transparent 1px)",
      },
    },
  },
  plugins: [],
}
