/** Tailwind Config (optional if using CDN). 
 * Tetap disediakan bila ingin build lokal dengan PostCSS.
 */
module.exports = {
  content: ["./public/**/*.{html,js}", "./src/**/*.{css,html,js}"],
  theme: {
    extend: {
      fontFamily: {
        display: ['Sora', 'ui-sans-serif', 'system-ui'],
        sans: ['Inter', 'ui-sans-serif', 'system-ui']
      },
      colors: {
        brand: {
          50:'#edf6ff',100:'#d7eaff',200:'#b3d3ff',300:'#86b7ff',
          400:'#5b97ff',500:'#2f74ff',600:'#1b57e6',700:'#1444b4',
          800:'#0f3487',900:'#0a255d'
        },
        ink: '#0b1220',
      },
      boxShadow:{
        glow: '0 10px 40px rgba(47,116,255,0.35)',
        neon: '0 0 20px rgba(47,116,255,0.65)'
      },
      keyframes: {
        'bg-pan': {
          '0%': { backgroundPosition: '0% 50%' },
          '50%': { backgroundPosition: '100% 50%' },
          '100%': { backgroundPosition: '0% 50%' }
        },
        'fade-up': {
          '0%': { opacity: 0, transform: 'translateY(12px)' },
          '100%': { opacity: 1, transform: 'translateY(0)' }
        },
        'float': {
          '0%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-6px)' },
          '100%': { transform: 'translateY(0px)' }
        }
      },
      animation: {
        'bg-pan': 'bg-pan 16s ease infinite',
        'fade-up': 'fade-up .7s ease forwards',
        'float': 'float 6s ease-in-out infinite'
      }
    }
  },
  plugins: [],
};
