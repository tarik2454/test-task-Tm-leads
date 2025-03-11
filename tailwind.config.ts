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
        purple: '#6A54FF',
        cyan: '#57E1FF',
        green: '#35FF9E',

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
        34: '0.34',
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
        sm: ['14px', '1.4'],
        base: ['16px', '1.25'], // done
        lg: ['18px', '1.5'],
        xl: ['20px', '1.2'],
        '2xl': ['24px', '1.3'],
        '4xl': ['36px', '0.9'],
      },
      screens: {
        sm: '375px',
        md: '-1px',
        lg: '-1px',
        xl: '1440px',
        '2xl': '-1px',
      },
      borderRadius: {
        sm: '8px',
        md: '16px',
        lg: '29px',
      },
    },
  },
  plugins: [],
};

export default config;
