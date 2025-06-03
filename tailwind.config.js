/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      color: {
        'main': '#ff4500',
        'support': '#008080',
        'light': '#fffcfa',
        'dark': '#111',
        'grey-light-extra': '#eee',
        'grey-light': '#ccc',
        'grey-medium': '#898989',
        'grey-dark': '#333',
      }
    },
  },
  plugins: [],
}

