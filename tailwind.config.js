/*
** TailwindCSS Configuration File
**
** Docs: https://tailwindcss.com/docs/configuration
** Default: https://github.com/tailwindcss/tailwindcss/blob/master/stubs/defaultConfig.stub.js
*/
module.exports = {
  theme: {
    screens: {
      xs: '500px',
      sm: '640px',
      md: '768px',
      lg: '1024px',
      xl: '1280px',
      '2xl': '1440px',
      '3xl': '1680px',
      '4xl': '1920px',
      '5xl': '2100px',
      '6xl': '2300px',
      '7xl': '2500px'
    },
    fontFamily: {
    },
    colors: {
      transparent: 'transparent',
      black: {
        700: '#000000'
      },
      white: {
        100: '#ffffff',
        300: '#F8F8F7'
      },
      red: {
        300: 'red',
        400: '#6E1420'
      },
      blue: {
        100: '#EFF5F6',
        200: '#DBE9EB',
        400: '#1E3D71',
        500: '#001733'
      },
      orange: {
        400: '#1E3D71'
      },
      gray: {
        200: '#DDD9D1',
        300: '#BEBEBE',
        400: '#8E8980',
        500: '#707070'
      }
    },
    fontSize: {
      '3xs': '.61rem', // 16
      '2xs': '.69rem', // 18
      xs: '.73rem', // 19
      sm: '.84rem', // 22
      base: '1rem', // 26
      lg: '1.15rem', // 30
      xl: '1.38rem', // 36
      '2xl': '2.11rem', // 55
      '3xl': '2.5rem' // 65
    },
  },
  variants: {},
  plugins: [],
  purge: {
    // Learn more on https://tailwindcss.com/docs/controlling-file-size/#removing-unused-css
    enabled: process.env.NODE_ENV === 'production',
    content: [
      'components/**/*.vue',
      'layouts/**/*.vue',
      'pages/**/*.vue',
      'plugins/**/*.js',
      'nuxt.config.js'
    ]
  },
  mode: 'jit'
}
