import type { Config } from 'tailwindcss';

const config: Config = {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        black: {
          100: '#030718',
          200: '#000000',
        },
        blue: {
          100: '#E7F7F8',
          200: '#201A4F',
        },
        purple: '#6A54FF',
        cyan: '#57E1FF',
        green: '#35FF9E',
        gray: '#EAEFF0',

        primaryBackground: '#FFFFFF ',
        secondaryBackground: '#030718',
        purpleBackground: '#6A54FF',
        primaryText: '#FFFFFF',
        secondaryText: '#000000',

        white: '#FFFFFF',
        current: 'currentColor',
        transparent: 'transparent',
      },
      opacity: {
        20: '0.2',
        30: '0.3',
        34: '0.34',
        40: '0.4',
        50: '0.5',
        67: '0.67',
        70: '0.7',
        80: '0.80',
      },
      fontFamily: {
        sans: ['IBM Plex Sans', 'sans-serif'],
      },
      fontWeight: {
        normal: '400',
        medium: '500',
        bold: '700',
      },
      fontSize: {
        sm: ['14px', '1.43'],
        base: ['16px', '1.25'],
        lg: ['18px', '1.5'],
        xl: ['20px', '1.4'],
        '2xl': ['24px', '1.25'],
        title: ['28px', '1.29'],
        '4xl': ['35px', '1.26'],
      },
      screens: {
        sm: '375px',
        md: '768px',
        lg: '-1px',
        xl: '1440px',
        '2xl': '-1px',
      },
      boxShadow: {
        cyan: '0px 0px 4px #57E1FF',
      },
      letterSpacing: {
        minus1: '-0.01em',
        minus2: '-0.02em',
        minus4: '-0.04em',
      },
      borderRadius: {
        sm: '3px',
        md: '4px',
        lg: '8px',
      },
    },
  },
  plugins: [],
};

export default config;
