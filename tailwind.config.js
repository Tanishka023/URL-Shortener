/** @type {import('tailwindcss').Config} */
export default {
  content: [
  "./src/**/*.{js,ts,jsx,tsx}",
  "./components/**/*.{js,ts,jsx,tsx}"
],

  theme: {
    extend: {
      colors: {
        muted: '#f5f5f5',
        'muted-foreground': '#a1a1aa',
        background: '#ffffff',
        foreground: '#000000',
        input: '#e2e8f0',
        ring: '#3b82f6',
      },
    },
  },
  plugins: [],
};