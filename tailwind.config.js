module.exports = {
  darkMode: 'class', // ✅ Enables manual dark mode toggle
  content: [
    "./*.{njk,html,js}",
    "./layouts/**/*.{njk,html,js}",
    "./components/**/*.{njk,html,js}",
    "./assets/scripts/**/*.{js}",
    "!./dist/**/*" // 🚫 Exclude output directory to avoid infinite loops
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
          'bg-light': '#F5EAD9',
          'bg-dark': '#060603',
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
