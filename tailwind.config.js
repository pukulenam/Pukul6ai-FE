module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}"
  ],
  theme: {
    extend: {
      backgroundImage: {
        'pict1' : `url('../src/asset/banner/banner1.jpg')`,
        'pict2' : `url('../src/asset/banner/banner2.jpg')`,
      }
    },
    keyframes: {
      spining: {
        "0%": {
          transform: "rotate(0deg)"
        },
        "100%": {
          transform: "rotate(360deg)"
        }
      },
      zoom: {
        '0%': {
          transform: 'scale(1, 1)'
        },
        '25%': {
          transform: 'scale(1.1, 1.1)'
        },
        "50%": {
          transform: 'scale(1.2, 1.2)'
        },
        '75%': {
          transform: 'scale(1.1, 1.1)'
        },
        '100%': {
          transform: 'scale(1, 1)'
        },
      },
      rotate: {
        '0%, 100%': {
          transform: 'rotate(3deg)'
        },
        '50%': {
          transform: 'rotate(-3deg)'
        }
      },
      fade: {
        '100%': {
          opacity: 1
        },
        '90%': {
          opacity: 0.9
        },
        '80%': {
          opacity: 0.8
        },
        '70%': {
          opacity: 0.7
        },
        '60%': {
          opacity: 0.6
        },
        '50%': {
          opacity: 0.5
        },
        '40%': {
          opacity: 0.4
        },
        '30%': {
          opacity: 0.3
        },
        '20%': {
          opacity: 0.2
        },
        '10%': {
          opacity: 0.1
        },
        '0%': {
          opacity: 0
        },
      },
      slidein: {
        '0%': {
          opacity: 0,
          transform: 'translateX(-100px)'
        },
        '50%': {
          opacity: 0.5,
          translateX: 'translateX(-50px)'
        },
        '100%': {
          opacity: 1,
          translateX: 'translateX(0px)'
        }
      },
      slideout: {
        '0%': {
          opacity: 1,
          transform: 'translateX(0px)',
        },
        '50%': {
          opacity: 0.5,
          translateX: 'translateX(-50px)',
        },
        '100%': {
          opacity: 0,
          translateX: 'translateX(-100px)',
          display: 'none',
          position: 'absolute'
        }
      },
      pulse: {
        '0%, 100%': {
          opacity: 1
        },
        '50%': {
          opacity: .5
        }
      }
    },
    animation: {
      'quick-zoom' : 'zoom 0.4s ease-in-out',
      'wiggle' : 'rotate 1s ease-in-out infinite',
      'fadein': 'fade 0.5s ease-in-out',
      'slideinleft': 'slidein 1s ease-in-out',
      'slideoutleft': 'slideout 1s ease-out',
      'spin' : 'spining 1s linear infinite',
      'pulse' : 'pulse 0.7s cubic-bezier(0.4, 0, 0.6, 1) infinite'
    },
  },
  plugins: [require("daisyui")],
  daisyui: {
    
  }
}
