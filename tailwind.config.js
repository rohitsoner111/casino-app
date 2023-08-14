/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    fontSize: {
      'xs-1': '0.688rem',
      xs: '0.75rem',
      'sm-1': '0.813rem',
      sm: '0.875rem',
      'base-1': '0.938rem',
      base: '1rem',
      'lg-1': '1.063rem',
      lg: '1.125rem',
      xl: '1.25rem',
      '2xl-2': '1.375rem',
      '2xl': '1.5rem',
      '3xl': '1.875rem',
      '4xl-4': '2rem',
      '4xl-2': '2.125rem',
      '4xl': '2.25rem',
      '5xl-8': '2.5rem',
      '5xl-8': '2.5rem',
      '5xl-3': '2.813rem',
      '5xl': '3rem',
      '6xl': '4rem'
    },
    extend: {
      colors: {
        'green-100': '#12432E',
        gray: {
          100: '#f7fafc',
          200: '#edf2f7',
          300: '#e2e8f0',
          400: '#cbd5e0',
          500: '#a0aec0',
          600: '#718096',
          700: '#4a5568',
          800: '#2d3748',
          900: '#1a202c'
        },
        blue: {
          100: '#ebf8ff',
          200: '#bee3f8',
          300: '#90cdf4',
          400: '#63b3ed',
          500: '#37F1D1',
          600: '#2B2969',
          700: '#272C39',
          800: '#1D2734',
          900: '#252A36'
        },
        'theme-grey': {
          100: '#0A3422',
          200: 'linear-gradient(89.6deg, #0A3422 -1.27%, #0F5638 103.74%)',
          300: 'linear-gradient(#35082B, #35082B) padding-box, linear-gradient(to right, #EF2D62, #FF6392)',
          400: 'linear-gradient(180deg, #0C4E31 0%, #176C46 100%)',
          500: '#0F5638',
          600: '#1F2937',
          700: '#191f2b',
          800: '#566069',
          900: '#12432E'

        },
        'border-color': {
          100: '#23584C',
        },
        green: {
          600: '#38F1D1',
          700: '#17E579'
        },
        pink: '#FA2E53',
        'yellow': {
          700: '#ffb960'
        },
        orange: {
          400: '#FF8971',
          600: '#FF8126',
          700: '#E37507',
          800: '#FF8026',
          900: '#AD3A22'
        }
      },
      backgroundImage: {
        'check-icon': "url('/assets/images/common/white-check-selected.svg')"
      }
    },
    screens: {
      xs: '475px',
      sm: '640px',
      md: '768px',
      lg: '1024px',
      xl: '1280px',
      '2xl': '1536px'
    }
  },
  plugins: []
}
