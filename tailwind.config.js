/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./script.js",
    "./css/styles.css",
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
    "text-red-500",
    /* Add your custom classes here */
    'code-animation',
    'code-line',
    'typing',
    'blink-caret'
  ],
  theme: {
    extend: {
      colors: {
        black: '#000000',
        white: '#ffffff',
        transparent: 'transparent',
        green: {
          400: '#a5d6a7',
          500: '#2ecc71',
        }
      },
      fontFamily: {
        'fira-code': ['Fira Code', 'monospace'],
      },
    },
  },
  plugins: [],
}