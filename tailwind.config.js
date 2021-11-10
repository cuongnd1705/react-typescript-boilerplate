module.exports = {
  purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  darkMode: false,
  theme: {
    extend: {
      colors: {
        primary: {
          50: '#c0f1d5',
          100: '#a1e2bd',
          200: '#82d4a5',
          300: '#62c58c',
          400: '#43b774',
          500: '#24a85c',
          600: '#1c8348',
          700: '#155f34',
          800: '#0d3a20',
          900: '#05150c',
        },
        secondary: {
          50: '#bbbeeb',
          100: '#9ea2da',
          200: '#8287c8',
          300: '#656bb7',
          400: '#4950a5',
          500: '#2c3494',
          600: '#222872',
          700: '#181c4f',
          800: '#0d102d',
          900: '#03040a',
        },
        success: '#ffffff',
        info: '#ffffff',
        warning: '#ffffff',
        danger: '#ffffff',
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
