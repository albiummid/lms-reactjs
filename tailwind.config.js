/** @type {import('tailwindcss').Config} */
const defaultTheme = require('tailwindcss/defaultTheme')
module.exports = {
  mode: 'jit',
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      boxShadow: {
        '3xl': '0px 0px 28px 0 rgb(0 0 0 / 10%)',
        '4xl': '0 12px 28px 0 rgb(0 0 0 / 20%)',
        fb: '0 1px 2px rgba(0, 0, 0, 0.2)',
      },
      fontFamily: {
        sans: ['Inter var', ...defaultTheme.fontFamily.sans],
      },
      colors: {
        current: '#050505',
        primary: '#7F56D9',
        ghost: '#9A9AA9',
        cloud: '#fafafb',
        lavender: '#E3CEFA',
        vizard: '#E9E8FF',
        cyan: '#D0EFFF',
        turquoise: '#D1F5F9',
        purple_main: '#7D23E0',
        grey_border: '#8D8D8D',
        desc_gray: '#414141',
        deep_red: '#FF3A3A',
        light_gray: '#f2f2f2',
        light_orange: '#FDEEEE',
        light_red: '#FF5070',
        light_yellow: '#FFD130',
        light_green: '#1CC24A',
        deep_green: '#009E2B',
        web_wash: '#F0F2F5',
      },
    },
    keyframes: {
      fade_in: {
        '0%': { opacity: 0 },
        '100%': { opacity: 1 },
      },
      fade_out: {
        '0%': { opacity: 1 },

        '100%': {
          opacity: 0,
        },
      },
      slide_up: {
        '0%': { transform: 'translateY(100%)' },
        '100%': { transform: 'translateY(0%)' },
      },
      slide_down: {
        '0%': { transform: 'translateY(0%)' },
        '100%': { transform: 'translateY(100%)' },
      },
    },
    animation: {
      fade_in: 'fade_in 1s ease-in',
      fade_out: 'fade_out 1s ease-out',
      slide_up: 'slide_up 1s ease-in-out',
      slide_down: 'slide_down 1s ease-in-out',
    },
  },
  backgroundImage: {},
  plugins: [],
  corePlugins: {
    preflight: true,
  },
  important: true,
}
