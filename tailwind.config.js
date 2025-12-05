/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx,html}",
    "./*.html"
  ],
  theme: {
    extend: {
      colors: {
        // Nevada-inspired palette
        'nevada': {
          'navy': '#1a365d',
          'gold': '#d69e2e',
          'sand': '#f7f3e9',
          'sage': '#4a5d4a',
        },
        // Candidate accent colors (subtle)
        'lombardo': {
          'light': '#fef2f2',
          'DEFAULT': '#991b1b',
          'dark': '#7f1d1d',
        },
        'ford': {
          'light': '#eff6ff',
          'DEFAULT': '#1e40af',
          'dark': '#1e3a8a',
        },
        'hill': {
          'light': '#f0fdfa',
          'DEFAULT': '#0f766e',
          'dark': '#115e59',
        },
      },
      fontFamily: {
        'serif': ['Merriweather', 'Georgia', 'serif'],
        'sans': ['Inter', 'system-ui', 'sans-serif'],
        'mono': ['JetBrains Mono', 'Consolas', 'monospace'],
      },
      typography: (theme) => ({
        DEFAULT: {
          css: {
            color: theme('colors.gray.800'),
            a: {
              color: theme('colors.nevada.navy'),
              '&:hover': {
                color: theme('colors.nevada.gold'),
              },
            },
          },
        },
      }),
    },
  },
  plugins: [],
}
