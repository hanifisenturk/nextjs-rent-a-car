/** @type {import('tailwindcss').Config} */

module.exports = {
  content: ["./src/**/*.{ts,tsx}"],

  theme: {
    extend: {
      colors: {
        transparent: "transparent",
        current: "currentColor",
        black: "#000",
        white: "#fff",
        primary: {
          900: "#0A196F",
          800: "#102587",
          700: "#1A37A7",
          600: "#264BC8",
          default: "#3563E9",
          400: "#658DF1",
          300: "#85A8F8",
          200: "#A5C8FC",
          100: "#D6E4FD",
        },
        success: {
          900: "#3B6506",
          800: "#4C7A0B",
          700: "#659711",
          600: "#7FB519",
          default: "#9CD323",
          400: "#BCE455",
          300: "#D3F178",
          200: "#E8FAA6",
          100: "#F5FCD2",
        },
        error: {
          900: "#7A0619",
          800: "#930B16",
          700: "#B71112",
          600: "#DB2719",
          default: "#FF4423",
          400: "#FF7F59",
          300: "#FFA37A",
          200: "#FFC8A6",
          100: "#FFE7D3",
        },
        warning: {
          900: "#7A4D0B",
          800: "#936312",
          700: "#B7821D",
          600: "#DBA32A",
          default: "#FFC73A",
          400: "#FFD96B",
          300: "#FFE488",
          200: "#FFEFB0",
          100: "#FFF8D7",
        },
        info: {
          900: "#102E7A",
          800: "#1A4393",
          700: "#2A60B7",
          600: "#3D81DB",
          default: "#54A6FF",
          400: "#7EC2FF",
          300: "#98D3FF",
          200: "#BAE5FF",
          100: "#DCF3FF",
        },
        secondary: {
          900: "#040815",
          800: "#080C19",
          700: "#0D121F",
          600: "#131825",
          default: "#1A202C",
          400: "#596780",
          300: "#90A3BF",
          200: "#C3D4E9",
          100: "#E0E9F4",
        },
      },
      fontSize: {
        xs: [
          "0.75rem",
          {
            letterSpacing: "-1%",
            lineHeight: "auto",
          },
        ],
        sm: [
          "0.875rem",
          {
            letterSpacing: "-2%",
            lineHeight: "auto",
          },
        ],
        base: [
          "1rem",
          {
            letterSpacing: "-2%",
            lineHeight: "150%",
          },
        ],
        md: [
          "1.125rem",
          {
            letterSpacing: "-2%",
            lineHeight: "150%",
          },
        ],
        lg: [
          "1.25rem",
          {
            letterSpacing: "-2%",
            lineHeight: "150%",
          },
        ],
        xl: [
          "1.5rem",
          {
            letterSpacing: "-2%",
            lineHeight: "150%",
          },
        ],
        "2xl": [
          "2rem",
          {
            letterSpacing: "-2%",
            lineHeight: "150%",
          },
        ],
        "3xl": [
          "2.25rem",
          {
            letterSpacing: "-3%",
            lineHeight: "150%",
          },
        ],
        "4xl": [
          "2.5rem",
          {
            letterSpacing: "-3%",
            lineHeight: "150%",
          },
        ],
        "5xl": [
          "4.5rem",
          {
            letterSpacing: "-4%",
            lineHeight: "150%",
          },
        ],
      },
    },
  },
  plugins: [],
};
