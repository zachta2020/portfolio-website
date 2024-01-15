import { type Config } from "tailwindcss";
import { fontFamily } from "tailwindcss/defaultTheme";

export default {
  content: ["./src/**/*.tsx"],
  theme: {
    extend: {
      colors: {
        'red': '#ea333d',
        'light-red': '#ff8d67',
        'dark-red': '#be1755',
        'green': '#75fb79',
        'light-green': '#e3fbc3',
        'dark-green': '#4ccd74',
        'blue': '#4397f7',
        'light-blue': '#85e0ff', 
        'dark-blue': '#295bd8',
        'gray': '#ebebeb',
        'light-gray': '#f4f4f4',
        'white': '#ffffff',
      },
      fontFamily: {
        sans: ["var(--font-sans)", ...fontFamily.sans],
      },
    },
  },
  plugins: [],
} satisfies Config;
