import { type Config } from "tailwindcss";

const config: Config = {
  content: ["./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
          "bg-0": "#2f2e2e",
          "text-0": "#efe3c9",
          "text-1": "#F0A039",
      },
      fontFamily: {
        corinthia: ["Corinthia", "cursive"],
      },
    },
  },
};

export default config;