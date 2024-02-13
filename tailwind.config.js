/** @type {import('tailwindcss').Config} */
const colors = require('tailwindcss/colors')
const svelteUx = require('svelte-ux/plugins/tailwind.cjs');
export default {
  content: [
    './src/**/*.{html,js,svelte,ts}',
    './node_modules/svelte-ux/**/*.{svelte,js}'
  ],
  ux: {
    // See customization docs
    themes: {
      light: {
        primary: colors['indigo']['500'],
        'primary-content': 'white',
        secondary: colors['yellow']['500'],
        'surface-100': 'white',
        'surface-200': colors['gray']['100'],
        'surface-300': colors['gray']['300'],
        'surface-content': colors['gray']['900'],
        'color-scheme': 'light'
      },
      dark: {
        primary: colors['indigo']['500'],
        'primary-content': 'white',
        secondary: colors['yellow']['500'],
        'surface-100': colors['zinc']['800'],
        'surface-200': colors['zinc']['900'],
        'surface-300': colors['zinc']['950'],
        'surface-content': colors['zinc']['100'],
        'color-scheme': 'dark'
      },
    },
  },
  theme: {
    colors: {
      primary: colors.indigo,
      secondary: colors.yellow,
      neutral: colors.gray,
    },
    extend: {},
  },
  plugins: [svelteUx],
}

