/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx}'],
  theme: {
    extend: {
      colors: {
        background: '#F7F5F3',
        foreground: '#1D201F',
        primary: '#707170',
        secondary: '#D6D5D3',
      },
      fontFamily: {
        sans: ['"Albert Sans"', 'ui-sans-serif', '-apple-system', 'BlinkMacSystemFont', 'sans-serif'],
        serif: ['"STIX Two Text"', 'ui-serif', 'Georgia', 'serif'],
      },
      maxWidth: {
        content: '632px',
        wide: '960px',
      },
      letterSpacing: {
        body: '-0.01em',
        heading: '-0.02em',
      },
      lineHeight: {
        body: '1.45em',
        heading: '1.25',
      },
    },
  },
  plugins: [],
}
