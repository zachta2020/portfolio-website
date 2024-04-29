import { type Config } from "tailwindcss";
import { fontFamily } from "tailwindcss/defaultTheme";

export default {
  content: ["./src/**/*.tsx"],
  theme: {
    extend: {
      colors: {
        'deep-purple': '#3b3272',
        'dark-deep-purple': '#2e2759',

        'purple': '#594ca8',
        'dark-purple': '#433980',
        'pale-purple': '#a099cc',

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
