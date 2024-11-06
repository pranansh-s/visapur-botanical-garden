import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      dropShadow: {
        hero: '0px 4px 4px rgba(0, 0, 0, 0.25)',
      },
      colors: {
        primary: 'var(--primary)',
        secondary: 'var(--secondary)',
        hotpink: 'var(--hotpink)',
        tertiary: {
          100: 'var(--tertiary-light)',
          200: 'var(--tertiary)',
          300: 'var(--tertiary-dark)',
        },
      },
      spacing: {
        lg: '200px',
      },
      fontFamily: {
        sans: 'var(--font-merriweather)',
        serif: 'var(--font-merriweather-sans)',
        braah: 'var(--font-braah-one)',
      },
    },
  },
  plugins: [],
};
export default config;
