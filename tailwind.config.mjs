/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      // colors: {
      //   background: "var(--background)",
      //   foreground: "var(--foreground)",
      // },
      colors: {
        "Tint": {
          1: "#E5F2E9",
          2: "#CAE4D3",
          3: "#B0D7BD",
          4: "#96C9A7",
          5: "#7CBC91",
          6: "#61AE7B",
          7: "#4E9968"

        },
        "Primary": "#417F56",
        "Shade": {
          1: "#396F4B",
          2: "#315F41",
          3: "#294F36",
          4: "#21402B",
          5: "#183020",
          6: "#102016",
          7: "#08100B"

        }
        ,
        "Gray": {
          1: "#F9F9F9",
          2: "#E1E1E1",
          3: "#EDEDED",
          4: "#CBCBCB",
          5: "#ADADAD",
          6: "#757575",
          7: "#717171",
          8: "#353535"
        },
        "Error": "#C30000",
        "Error-Light": "#ED2E2E",
        "Error-ExtraLight": "#FFF2F2",

        "Success": "#00966D",
        "Success-Light": "#00BA88",
        "Success-ExtraLight": "#F3FDFA",

        "Warning": "#A9791C",
        "Warning-Light": "#F4B740",
        "Warning-ExtraLight": "#FFF8E1"


      },

      boxShadow: {
        "DropShadow-2": "0px 2px 2px rgb(0,0,0,0.25)",
        "DropShadow-4": "0px 4px 4px rgb(0,0,0,0.25)",
        "DropShadow-6": "0px 6px 6px rgb(0,0,0,0.25)",
        "DropShadow-8": "0px 8px 8px rgb(0,0,0,0.25)",
        "DropShadow-12": "0px 12px 12px rgb(0,0,0,0.25)",
        "DropShadow-16": "0px 16px 16px rgb(0,0,0,0.25)",
        "CardShadow": "0px 25px 7px rgb(0,0,0,0) ,0px 16px 6px rgb(0,0,0,0.01), 0px 9px 5px rgb(0,0,0,0.05),0px 4px 4px rgb(0,0,0,0.09) , 0px 1px 2px rgb(0,0,0,0.10) , 0px 0px 0px rgb(0,0,0,0.10)",
        "ContactsCardShadow": "0px 66px 18px rgb(0,0,0,0) ,0px 42px 17px rgb(0,0,0,0.01),0px 24px 14px rgb(0,0,0,0.05), 0px 11px 11px rgb(0,0,0,0.09), 0px 3px 6px rgb(0,0,0,0.10),0px 0px 0px rgb(0,0,0,0.10)"

      },
      borderRadius: {
        "4xl": "32px",
        "5xl": "64px"
      },

      fontSize: {
        "Display1": "64px",
        "Display2": "56px",
        "H1": "44px",
        "H2": "40px",
        "H3": "32px",
        "H4": "24px",
        "H5": "20px",
        "H6": "16px",
        "H7": "20px",
        "Body-XL": "20px",
        "Body-LG": "18px",
        "Body-MD": "16px",
        "Body-SM": "14px",
        "Caption-LG": "14px",
        "Caption-MD": "12px",
        "Caption-SM": "10px",
        "Button-LG": "16px",
        "Button-SM": "14px",
        "Overline-LG": "16px",
        "Overline-SM": "12px",



      },
      fontFamily: {
        "SemiBold": "Estedad-SemiBold",
        "Bold": "Estedad-Bold",
        "Medium": "Estedad-Medium",
        "Regular": "Estedad-Regular",

      },
      container: {
        center: true
      },
      screens: {
        "xs": "360px",
        "sm": "634px",
        "md": "980px",
        "lg": "1440px",

      },
      spacing: {
        "4.5": "18px",
        "26.5": "108px",
        "27": "110px"
      }
    },
  },
  plugins: [function ({ addVariant }) {
    addVariant('child', '& > *')
    addVariant('child-hover', '& > *:hover')
  }],
};
