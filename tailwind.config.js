
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
        lightblue: '#61DAFB',
        brand: '#27368D',
        footbg: '#DFF7FC',
        greyc: '#808080',
        pinkbg: '#f4e9f0',
        navybg: '#152367',
        navydarkbg: '#0A0F42',
        greyl: '#d0d8fa',
        offwhite: '#FAF8F7',
        purpleoff: '#f2f1f6',
        blue: '#1A8DD5',
        red: '#F32828',
        pink: '#FE2272',
        yellow: '#D89913',
        yellowlight: '#FAC515',
        green: '#7B7B57',
        purpledark: '#280972',
        reddark: '#BB2025',
        greenlight: '#2BDE88',
        purplel: '#D5CEFF',
        greenl: '#DAFFBD',
        darkn: '#212121',
        blackl: 'rgb(0 0 0 / 19%)',
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
        '5xxxl': '57px',
        '7xxl': '78px',
      },
      backgroundImage: {
        'hero': "url('/images/bg-banner.png')",
        'mainbtn': "radial-gradient(97.67% 400.58% at 0% 35.83%,#3B8EDB 0%,#3BC2DB 100%)",
        'rollingimg': "url('/images/desktop-2-1.png')", 
        'rollbef': "radial-gradient(150% 150% at 50% 0%,rgba(255,255,255,0) 0%,#EEDDE8 100%)",
        'bluebox': "radial-gradient(450% 200% at 50% 20%,rgba(211,245,251,.1) 0%,#A5EAF7 100%)",
        'rollang': "radial-gradient(#70E6FC, #1E34B4)",
        'service': "url('/images/img-s-11.png')",
        'servicend': "url(/images/fanfact-bg.jpg)",
        'footer': "url(/images/footer_bg_1.jpg)",
        'testileft': "url(/images/bg-faq-bg-1-2.jpg)",
        'about': "url('/images/hero-about1-1.jpg')",
        'about2': "url('/images/erygf.png')",
        'about3': "url('/images/efvij.png')",
        'servebg': "url('/images/404-bg.png')",
        'contact': "url('/images/ruehvr.png')",
        'case': "url('/images/banner_bg.png')",
        'casemind': "url('/images/nl-sp.png')",
        'footerb': "url('/images/footerbg.png')",
        'clientapp': "linear-gradient(360deg, #0000008c 30%, #0000 100%, #0000 100%)",
        'client': "linear-gradient(180deg,rgba(59, 195, 219, 0.56) 30%, transparent 100%)",
       },
       DropShadow: {
        '3xl': '0 15px 45px rgb(59 194 219 / 55%)',
        'innerpage': 'rgba(149, 157, 165, 0.2) 0px 8px 24px',
       },
       minHeight: {
        'custom1': '520px',
        'custom': '700px',
       },
       height:{
        '97': '65px',
        '98': '360px',
        '99': '450px',
        '101': '370px',
        '100': '549px',
       },
       minWidth:{
        'med': '200px !important',
       },
       maxWidth:{
        'screen-1xl': '1720px',
       },
       lineHeight: {
        '11': '75px',
       },
       cursorCustom: {
        'cursor': "url('/images/megaphone-1.png'), auto",
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
        rotconnect: {
          '0%': {
            rotate: '0deg',
            
          },
          '100%': {
            rotate: '360deg',
            
          },
        },
        bounce2: {
          '0%,50%': {
            transform: 'translateY(-200%)',
          },
          '100%': {
            transform: 'translateX(0%)',
          },
        },
        marquee: {
          '0%': { transform: 'translateX(100%)' },
          '100%': { transform: 'translateX(-100%)' },
        },
        marqueeleft: {
          '0%': { transform: 'translateX(-100%)' },
          '100%': { transform: 'translateX(100%)' },
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
          'rotconnect': 'rotconnect linear 20s infinite',
          'bounce2': 'bounce2 1s ease',
          'spin2': 'spin 8s linear infinite',
          'spin3': 'spin 30s linear infinite',
          'marquee': 'marquee 30s linear infinite',
          'marqueeleft': 'marqueeleft 30s linear infinite',
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
