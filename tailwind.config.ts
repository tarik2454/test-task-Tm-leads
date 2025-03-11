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
        blue: '#E7F7F8',
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
        30: '0.3',
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
        sm: ['14px', '1.43'], // done
        base: ['16px', '1.25'], // done
        lg: ['18px', '1.5'],
        xl: ['20px', '1.2'],
        '2xl': ['24px', '1.25'], // done
        '4xl': ['35px', '1.26'], // done
      },
      screens: {
        sm: '375px',
        md: '-1px',
        lg: '-1px',
        xl: '1440px',
        '2xl': '-1px',
      },
      boxShadow: {
        cyan: '0px 0px 4px #57E1FF',
      },
      borderRadius: {
        sm: '3px',
      },
    },
  },
  plugins: [],
};

export default config;
