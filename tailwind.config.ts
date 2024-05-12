import type { Config } from "tailwindcss";


const {
  default: flattenColorPalette,
} = require("tailwindcss/lib/util/flattenColorPalette");
const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  darkMode: 'class',
  theme: {
    extend: {
      extend: {
        colors: {
          mediumturquoise: "#35c2bd",
          goldenrod: {
            "100": "#ffcf5e",
            "200": "#e6b545",
          },
          black: "#000",
          gray: {
            "100": "rgba(0, 0, 0, 0.9)",
            "200": "rgba(255, 255, 255, 0.9)",
            "300": "rgba(0, 0, 0, 0.7)",
          },
          white: "#fff",
        },
        spacing: {},
        fontFamily: {
          inter: "Inter",
          "gill-sans-ultra-bold": "'Gill Sans Ultra Bold'",
          aldrich: "Aldrich",
        },
        borderRadius: {
          "81xl": "100px",
        },
      },
      fontSize: {
        "2xl": "21px",
        mid: "17px",
        lg: "18px",
        inherit: "inherit",
      },
      screens: {
        mq1025: {
          raw: "screen and (max-width: 1025px)",
        },
        mq975: {
          raw: "screen and (max-width: 975px)",
        },
        mq725: {
          raw: "screen and (max-width: 725px)",
        },
        mq450: {
          raw: "screen and (max-width: 450px)",
        },
      },
      animation:{
        spotlight: "spotlight 2s ease .75s 1 forwards",
        scroll: "scroll var(--animation-duration, 40s) var(--animation-direction, forwards) linear infinite"
      },
      
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      keyframes:{
      scroll: {
        to: {
          transform: "translate(calc(-50% - 0.5rem))",
        },
      }
    },
     
    },
  },
  plugins: [addVariablesForColors],
};
function addVariablesForColors({ addBase, theme }: any) {
  let allColors = flattenColorPalette(theme("colors"));
  let newVars = Object.fromEntries(
    Object.entries(allColors).map(([key, val]) => [`--${key}`, val])
  );
 
  addBase({
    ":root": newVars,
  });
}
export default config;
