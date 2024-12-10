/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{html,js,svelte,ts}'],
  theme: {
    extend: {
      colors: {
        'github-dark': '#0d1117',
        'github-btn': '#238636',
        'github-border': '#30363d'
      }
    }
  },
  plugins: []
}