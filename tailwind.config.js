/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{html,js,svelte,ts}'],
  theme: {
    extend: {
      fontFamily: {
        firaCode: ['Fira Code', 'monospace'],
        ubuntuMono: ['Ubuntu Mono', 'monospace']
      }
    }
  },
  plugins: []
};