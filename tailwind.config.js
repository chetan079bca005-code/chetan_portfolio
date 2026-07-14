/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        cream: {
          50: '#fdfcfb',
          100: '#FAF6F0', // Main light background
          200: '#f3ede2',
          300: '#e7ddcb',
          900: '#141412', // Dark background
        },
        charcoal: {
          50: '#f6f6f6',
          100: '#e7e7e7',
          700: '#403e3c',
          800: '#2d2b29',
          900: '#1C1917', // Main text in light / main background in dark
        },
        terracotta: {
          50: '#fff7ed',
          100: '#ffedd5',
          600: '#ea580c',
          700: '#c2410c',
          800: '#9a3412', // Highlight color
        },
        moss: {
          700: '#15803d',
          800: '#166534',
        }
      },
      fontFamily: {
        serif: ['Lora', 'Georgia', 'serif'],
        sans: ['"Plus Jakarta Sans"', 'Inter', 'sans-serif'],
        mono: ['"JetBrains Mono"', '"Fira Code"', 'monospace'],
      },
      backgroundImage: {
        'notebook-grid': 'radial-gradient(circle, rgba(28, 25, 23, 0.04) 1px, transparent 1px)',
        'notebook-grid-dark': 'radial-gradient(circle, rgba(250, 246, 240, 0.04) 1px, transparent 1px)',
      },
    },
  },
  plugins: [],
}


