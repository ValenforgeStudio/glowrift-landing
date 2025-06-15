module.exports = {
  content: [
    "./**/*.njk",
    "./**/*.html",
    "./**/*.js"
  ],
  safelist: [
    'with-header-offset',
    'section-padding',
    'headline',
    'subhead',
    'glow-button',
    'glow-button-outline',
    'muted-text',
    'theme-toggle',
    'nav-link',
    'nav-link-mobile',
    'glowrift-card'
  ],
  theme: {
    extend: {
      colors: {
        glowrift: {
          primary: '#FEC260',
          accent: '#FF9F45',
          muted: '#AFAFAF',
          'text-light': '#1a1a1a',
          'text-dark': '#f5f5f5',
          'bg-light': '#f0f0f0',
          'bg-dark': '#0d0d0d',
        }
      },
      fontFamily: {
        sans: ['Inter', 'ui-sans-serif', 'system-ui'],
        display: ['Playfair Display', 'serif']
      }
    }
  },
  plugins: []
};
