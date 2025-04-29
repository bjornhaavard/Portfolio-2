/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./script.js",
    "./styles.css",
  ],
  safelist: [
    'bg-black',
    'text-white',
    'text-green-400',
    'text-green-500',
    'text-gray-400',
    'bg-green-600',
    'hover:bg-green-700',
    'bg-zinc-900',
    'border-green-500/20',
    'hover:border-green-500/50',
    'from-black/50',
    'via-transparent',
    'to-black/50',
    'bg-black/90',
  ],
  theme: {
    extend: {
      colors: {
        black: '#000000',
        white: '#ffffff',
        transparent: 'transparent',
        green: {
          400: '#34d399',
          500: '#22c55e',
          600: '#16a34a',
          700: '#15803d',
        },
        zinc: {
          900: '#18181b',
        },
        gray: {
          400: '#9ca3af',
        },
      },
    },
  },
  plugins: [],
}
