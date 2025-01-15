/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        primary: '#8B5CF6',
        background: {
          dark: '#FFFFFF',
          card: '#F8FAFC'
        }
      },
      animation: {
        'pulse': 'pulse 4s cubic-bezier(0.4, 0, 0.6, 1) infinite',
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-purple': 'linear-gradient(135deg, #8B5CF6 0%, #6D28D9 25%, #4C1D95 50%, #2D1B69 75%, #1E1B4B 100%)',
        'gradient-glow': 'radial-gradient(circle at center, rgba(139,92,246,0.15) 0%, rgba(139,92,246,0.05) 25%, rgba(255,255,255,0) 100%)'
      }
    },
  },
  plugins: [],
};