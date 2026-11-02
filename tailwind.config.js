module.exports = Object.assign({
      theme: {
        extend: {
          colors: {
            ember: {
              50:  '#FDF6E8',
              100: '#F8E9C6',
              200: '#F0CD88',
              300: '#E8A830',
              400: '#C87820',
              500: '#A05A10',
              600: '#7A3E08',
              700: '#5C2C04',
              800: '#3D1A04',
              900: '#1E0D02',
            },
          },
          fontFamily: {
            display: ['"Cormorant Garamond"', 'Georgia', 'serif'],
            body:    ['"Crimson Pro"', 'Georgia', 'serif'],
          },
          letterSpacing: {
            'widest2': '0.25em',
          },
        },
      },
    }, { content: ['./index.html'] });