import { type Config } from "tailwindcss";
import { fontFamily } from "tailwindcss/defaultTheme";

export default {
  content: ["./src/**/*.tsx"],
  theme: {
    extend: {
      colors: {
        'section-fill': '#3b3272',
        'section-border': '#2e2759',

        'button-fill-normal': '#594ca8',
        'button-border-normal': '#433980',

        'light-blue': '#85e0ff',
        'black': '#000000',
        'white': '#ffffff',
      },
      fontFamily: {
        sans: ["var(--font-sans)", ...fontFamily.sans],
      },
    },
  },
  plugins: [],
} satisfies Config;
