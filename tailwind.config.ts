import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        'accent': '#ff0055',
        'success': '#34c759',
        'error': '#ff3b30',
        'primary': '#0a0a0a',
        'secondary': '#1c1c1e',
        'tertiary': '#2c2c2e',
        'text-primary': '#ffffff',
        'text-secondary': '#a0a0a0',
        'border-color': '#3a3a3c',
      },
    },
  },
  plugins: [],
}
export default config
