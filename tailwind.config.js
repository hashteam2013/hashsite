
const defaultTheme = require('tailwindcss/defaultTheme')
module.exports = {
  purge: [],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      fontFamily: {
        'sans': ['Poppins', ...defaultTheme.fontFamily.sans],
      },
      
      colors: {
        primary: '#3bc2db',
        secondary: '#2f363c',
        footbg: '#DFF7FC',
        greyc: '#808080',
        pinkbg: '#f4e9f0',
        navybg: '#152367',
        navydarkbg: '#071245',
        greyl: '#f4f5f9',
      },
      screens: {
        'sm': '640px',
        'md': '768px',
        'lg': '1024px',
        'xl': '1280px',
        '2xl': '1536px',
      },
      fontSize:{
        '5xxl': '52px',
      },
      backgroundImage: {
        'hero': "url('/images/Group-1046.png')",
        'mainbtn': "radial-gradient(97.67% 400.58% at 0% 35.83%,#3B8EDB 0%,#3BC2DB 100%)",
        'rollingimg': "url('/images/desktop-2-1.png')", 
        'rollbef': "radial-gradient(150% 150% at 50% 0%,rgba(255,255,255,0) 0%,#EEDDE8 100%)",
        'bluebox': "radial-gradient(450% 200% at 50% 20%,rgba(211,245,251,.1) 0%,#A5EAF7 100%)",
        'service': "url('/images/img-s-11.png')",
        'servicend': "url(/images/fanfact-bg.jpg)",
       },
       boxShadow: {
        inner: '0 15px 45px rgb(59 194 219 / 55%)',
       },
       minHeight: {
        'custom1': '520px',
        'custom': '700px',
       },
       height:{
        '98': '360px',
        '99': '450px',
        '100': '549px',
       },
       lineHeight: {
        '11': '75px',
       },
       keyframes: {
        rollimg: {
          '0%': { backgroundPositionY: '0%' },
          '100%': { backgroundPositionY: '117%' },
        },
        growimg: {
          '0%': { 
            width: '0vw', 
            height: '0vw', 
            top: '200px', 
            right: '200px',
            opacity: '0.6', 
          },
          '100%': { 
            width: '50vw', 
            height: '50vw', 
            top: '-150px', 
            right: '200px',
            opacity: '0', 
          },
        },
        bannerot: {
          '0%': {
            top: '0px',
          },
          '100%': {
            top: '50px',
          },
        },
      },
        animation:{
          rollimg: 'rollimg linear 100s infinite',
          'growimg-delay': 'growimg 10s linear infinite 1s',
          'growimg-delay2': 'growimg 10s linear infinite 2s',
          'growimg-delay3': 'growimg 10s linear infinite 3s',
          'growimg-delay4': 'growimg 10s linear infinite 4s',
          'growimg-delay5': 'growimg 10s linear infinite 5s',
          'growimg-delay6': 'growimg 10s linear infinite 6s',
          'growimg-delay7': 'growimg 10s linear infinite 7s',
          'growimg-delay8': 'growimg 10s linear infinite 8s',
          'growimg-delay9': 'growimg 10s linear infinite 9s',
          'bannerot': 'bannerot linear 5s infinite',
        },
      rotate: {
        'x-[0.5deg]': '0.5deg',
        'y-[-3.1deg]': '-3.1deg',
      },
      skew: {
        'x-[-4.6deg]': '-4.6deg',
        'y-[-1deg]': '-1deg',
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
