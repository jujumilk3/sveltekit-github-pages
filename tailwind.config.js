/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{html,js,svelte,ts}'],
  theme: {
    extend: {},
  },
  plugins: [],
  purge: [
    './src/**/*.html',
    './src/**/*.js',
    './src/**/*.ts',
    './src/**/*.svelte'],
}

