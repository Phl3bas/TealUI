import { ConfigInterface } from "../types";

const DEFAULT_CONFIG: ConfigInterface = {
  options: {},
  theme: {
    screens: {
      sm: "760px",
      md: "1020px",
      lg: "1280px",
      xl: "1400px",
    },
    colors: {
      transparent: "transparent",
      current: "currentColor",
      red: {
        "000": "hsla(0,100%,97.6%,var(--tl-background-alpha,1))",
        "100": "hsla(0,67.4%,91.6%,var(--tl-background-alpha,1))",
        "200": "hsla(0,65.5%,82.9%,var(--tl-background-alpha,1))",
        "300": "hsla(0,66.4%,74.3%,var(--tl-background-alpha,1))",
        "400": "hsla(0,65.7%,65.7%,var(--tl-background-alpha,1))",
        "500": "hsla(0,66.1%,57.3%,var(--tl-background-alpha,1))",
        "600": "hsla(0,66.4%,46.7%,var(--tl-background-alpha,1))",
        "700": "hsla(0,66.4%,42%,var(--tl-background-alpha,1))",
        "800": "hsla(0,66.3%,37.3%,var(--tl-background-alpha,1))",
        "900": "hsla(0,66.5%,32.7%,var(--tl-background-alpha,1))",
      },
      pink: {
        "000": "hsla(320,75%,96.9%,var(--tl-background-alpha,1))",
        "100": "hsla(318.8,66.7%,90.6%,var(--tl-background-alpha,1))",
        "200": "hsla(317.8,66.7%,81.2%,var(--tl-background-alpha,1))",
        "300": "hsla(318.1,66.7%,71.8%,var(--tl-background-alpha,1))",
        "400": "hsla(317.8,66.7%,62.4%,var(--tl-background-alpha,1))",
        "500": "hsla(318,66.7%,52.9%,var(--tl-background-alpha,1))",
        "600": "hsla(318.1,66.4%,47.8%,var(--tl-background-alpha,1))",
        "700": "hsla(317.9,66.7%,42.4%,var(--tl-background-alpha,1))",
        "800": "hsla(318.1,66.3%,37.3%,var(--tl-background-alpha,1))",
        "900": "hsla(317.8,66.7%,31.8%,var(--tl-background-alpha,1))",
      },
      purple: {
        "000": "hsla(282,62.5%,96.9%,var(--tl-background-alpha,1))",
        "100": "hsla(285,46.2%,89.8%,var(--tl-background-alpha,1))",
        "200": "hsla(284.4,48.1%,79.6%,var(--tl-background-alpha,1))",
        "300": "hsla(283.8,47.4%,69.4%,var(--tl-background-alpha,1))",
        "400": "hsla(283.8,48.1%,59.2%,var(--tl-background-alpha,1))",
        "500": "hsla(284,48%,49%,var(--tl-background-alpha,1))",
        "600": "hsla(284,48.4%,44.1%,var(--tl-background-alpha,1))",
        "700": "hsla(283.8,48%,39.2%,var(--tl-background-alpha,1))",
        "800": "hsla(283.6,47.7%,34.5%,var(--tl-background-alpha,1))",
        "900": "hsla(284.2,48%,29.4%,var(--tl-background-alpha,1))",
      },
      indigo: {
        "000": "hsla(260,100%,97.6%,var(--tl-background-alpha,1))",
        "100": "hsla(257.8,57.4%,90.8%,var(--tl-background-alpha,1))",
        "200": "hsla(257.5,57.9%,81.4%,var(--tl-background-alpha,1))",
        "300": "hsla(257.6,57.7%,72.2%,var(--tl-background-alpha,1))",
        "400": "hsla(257.5,57.9%,62.7%,var(--tl-background-alpha,1))",
        "500": "hsla(257.5,57.8%,53.5%,var(--tl-background-alpha,1))",
        "600": "hsla(257.8,58%,46.7%,var(--tl-background-alpha,1))",
        "700": "hsla(257.6,58%,40.2%,var(--tl-background-alpha,1))",
        "800": "hsla(257.6,57.9%,33.5%,var(--tl-background-alpha,1))",
        "900": "hsla(257.5,57.7%,26.9%,var(--tl-background-alpha,1))",
      },
      blue: {
        "000": "hsla(204,50%,96.1%,var(--tl-background-alpha,1))",
        "100": "hsla(206.3,59.3%,89.4%,var(--tl-background-alpha,1))",
        "200": "hsla(206.7,57.8%,78.6%,var(--tl-background-alpha,1))",
        "300": "hsla(206.5,58.3%,68%,var(--tl-background-alpha,1))",
        "400": "hsla(207.1,58.3%,57.6%,var(--tl-background-alpha,1))",
        "500": "hsla(206.8,58.2%,46.9%,var(--tl-background-alpha,1))",
        "600": "hsla(206.9,58.1%,42.2%,var(--tl-background-alpha,1))",
        "700": "hsla(206.5,58.1%,37.5%,var(--tl-background-alpha,1))",
        "800": "hsla(206.6,58.1%,32.7%,var(--tl-background-alpha,1))",
        "900": "hsla(206.7,58%,28%,var(--tl-background-alpha,1))",
      },
      teal: {
        "000": "hsla(180,70%,96.1%,var(--tl-background-alpha,1))",
        "100": "hsla(180,66.7%,89.4%,var(--tl-background-alpha,1))",
        "200": "hsla(180,62.1%,77.3%,var(--tl-background-alpha,1))",
        "300": "hsla(180,53.8%,61.8%,var(--tl-background-alpha,1))",
        "400": "hsla(180,62.3%,44.7%,var(--tl-background-alpha,1))",
        "500": "hsla(180,62.1%,38.2%,var(--tl-background-alpha,1))",
        "600": "hsla(180,62.3%,34.3%,var(--tl-background-alpha,1))",
        "700": "hsla(180,61.5%,30.6%,var(--tl-background-alpha,1))",
        "800": "hsla(180,62%,26.9%,var(--tl-background-alpha,1))",
        "900": "hsla(180,62.4%,22.9%,var(--tl-background-alpha,1))",
      },
      green: {
        "000": "hsla(138,71.4%,97.3%,var(--tl-background-alpha,1))",
        "100": "hsla(134.3,46.7%,91.2%,var(--tl-background-alpha,1))",
        "200": "hsla(132.9,38.9%,78.8%,var(--tl-background-alpha,1))",
        "300": "hsla(133.1,39.5%,68.2%,var(--tl-background-alpha,1))",
        "400": "hsla(132.9,38.9%,57.6%,var(--tl-background-alpha,1))",
        "500": "hsla(132.8,39.2%,47.1%,var(--tl-background-alpha,1))",
        "600": "hsla(133.1,39%,39.2%,var(--tl-background-alpha,1))",
        "700": "hsla(132.6,38.8%,31.4%,var(--tl-background-alpha,1))",
        "800": "hsla(132.8,38.8%,23.7%,var(--tl-background-alpha,1))",
        "900": "hsla(133.1,40%,15.7%,var(--tl-background-alpha,1))",
      },
      yellow: {
        "000": "hsla(49.4,100%,96.7%,var(--tl-background-alpha,1))",
        "100": "hsla(47.4,91.5%,90.8%,var(--tl-background-alpha,1))",
        "200": "hsla(175.2,99.2%,52.7%,var(--tl-background-alpha,1))",
        "300": "hsla(47.1,100%,77.3%,var(--tl-background-alpha,1))",
        "400": "hsla(46.8,100%,69.6%,var(--tl-background-alpha,1))",
        "500": "hsla(47,100%,62%,var(--tl-background-alpha,1))",
        "600": "hsla(46.9,100%,54.3%,var(--tl-background-alpha,1))",
        "700": "hsla(47.1,100%,46.5%,var(--tl-background-alpha,1))",
        "800": "hsla(47,100%,38.8%,var(--tl-background-alpha,1))",
        "900": "hsla(47.1,100%,31%,var(--tl-background-alpha,1))",
      },
      orange: {
        "000": "hsla(26.7,100%,96.5%,var(--tl-background-alpha,1))",
        "100": "hsla(27.1,100%,90%,var(--tl-background-alpha,1))",
        "200": "hsla(27.4,100%,79.8%,var(--tl-background-alpha,1))",
        "300": "hsla(27.7,100%,69.8%,var(--tl-background-alpha,1))",
        "400": "hsla(27.7,100%,59.6%,var(--tl-background-alpha,1))",
        "500": "hsla(27.5,100%,49.6%,var(--tl-background-alpha,1))",
        "600": "hsla(27.7,100%,43.3%,var(--tl-background-alpha,1))",
        "700": "hsla(27.5,100%,37.3%,var(--tl-background-alpha,1))",
        "800": "hsla(27.7,100%,31%,var(--tl-background-alpha,1))",
        "900": "hsla(27.4,100%,24.9%,var(--tl-background-alpha,1))",
      },
      black: {
        "000": "hsla(0,0%,20%,var(--tl-background-alpha,1))",
        "100": "hsla(0,0%,14.9%,var(--tl-background-alpha,1))",
        "200": "hsla(0,0%,5.1%,var(--tl-background-alpha,1))",
        "300": "hsla(0,0%,0%,var(--tl-background-alpha,1))",
      },
      white: {
        "000": "hsla(0,0%,100%,var(--tl-background-alpha,1))",
        "100": "hsla(0,0%,97.6%,var(--tl-background-alpha,1))",
        "200": "hsla(0,0%,94.9%,var(--tl-background-alpha,1))",
        "300": "hsla(0,0%,92.5%,var(--tl-background-alpha,1))",
      },
      semantic: {
        primary: "hsla(180,62.3%,44.7%,var(--tl-background-alpha,1))",
        success: "hsla(132.9,38.9%,57.6%,var(--tl-background-alpha,1))",
        attention: "hsla(46.8,100%,69.6%,var(--tl-background-alpha,1))",
        danger: "hsla(0,66.1%,57.3%,var(--tl-background-alpha,1))",
        info: "hsla(207.1,58.3%,57.6%,var(--tl-background-alpha,1))",
      },
      brand: {
        primary: "hsla(180,62.3%,44.7%,var(--tl-background-alpha,1))",
        "primary-alt": "hsla(180,62.1%,38.2%,var(--tl-background-alpha,1))",
        secondary: "hsla(132.9,38.9%,78.8%,var(--tl-background-alpha,1))",
        "secondary-alt": "hsla(132.9,38.9%,57.6%,var(--tl-background-alpha,1))",
        accent: "hsla(283.8,48.1%,59.2%,var(--tl-background-alpha,1))",
        "accent-alt": "hsla(27.7,100%,59.6%,var(--tl-background-alpha,1))",
      },
      grey: {
        "000": "hsla(0,0%,92.9%,var(--tl-background-alpha,1))",
        "100": "hsla(0,0%,86.3%,var(--tl-background-alpha,1))",
        "200": "hsla(0,0%,79.2%,var(--tl-background-alpha,1))",
        "300": "hsla(0,0%,72.2%,var(--tl-background-alpha,1))",
        "400": "hsla(0,0%,65.5%,var(--tl-background-alpha,1))",
        "500": "hsla(0,0%,58.4%,var(--tl-background-alpha,1))",
        "600": "hsla(0,0%,50.2%,var(--tl-background-alpha,1))",
        "700": "hsla(0,0%,41.6%,var(--tl-background-alpha,1))",
        "800": "hsla(0,0%,33.3%,var(--tl-background-alpha,1))",
        "900": "hsla(0,0%,25.1%,var(--tl-background-alpha,1))",
      },
      "cool-grey": {
        "000": "hsla(200,13.6%,91.4%,var(--tl-background-alpha,1))",
        "100": "hsla(201.8,12.6%,82.9%,var(--tl-background-alpha,1))",
        "200": "hsla(201.2,13%,74.3%,var(--tl-background-alpha,1))",
        "300": "hsla(203.5,13.1%,65.7%,var(--tl-background-alpha,1))",
        "400": "hsla(203.6,12.8%,57.3%,var(--tl-background-alpha,1))",
        "500": "hsla(202.5,12.9%,48.6%,var(--tl-background-alpha,1))",
        "600": "hsla(203.6,12.8%,42.7%,var(--tl-background-alpha,1))",
        "700": "hsla(202.5,12.9%,36.5%,var(--tl-background-alpha,1))",
        "800": "hsla(204,12.8%,30.6%,var(--tl-background-alpha,1))",
        "900": "hsla(202.5,12.9%,24.3%,var(--tl-background-alpha,1))",
      },
      "warm-grey": {
        "000": "hsla(36,10.6%,90.8%,var(--tl-background-alpha,1))",
        "100": "hsla(33.3,9.7%,81.8%,var(--tl-background-alpha,1))",
        "200": "hsla(36,10.8%,72.7%,var(--tl-background-alpha,1))",
        "300": "hsla(34.7,10.3%,63.7%,var(--tl-background-alpha,1))",
        "400": "hsla(35,10.3%,54.5%,var(--tl-background-alpha,1))",
        "500": "hsla(35,10.3%,45.5%,var(--tl-background-alpha,1))",
        "600": "hsla(34.3,10.3%,39.8%,var(--tl-background-alpha,1))",
        "700": "hsla(36.7,10.3%,34.1%,var(--tl-background-alpha,1))",
        "800": "hsla(36,10.3%,28.4%,var(--tl-background-alpha,1))",
        "900": "hsla(35,10.3%,22.7%,var(--tl-background-alpha,1))",
      },
    },
    opacity: {
      0: "0",
      5: "0.05",
      10: "0.1",
      20: "0.2",
      25: "0.25",
      30: "0.3",
      40: "0.4",
      50: "0.5",
      60: "0.6",
      70: "0.7",
      75: "0.75",
      80: "0.8",
      90: "0.9",
      95: "0.95",
      100: "1",
    },
    spacing: {
      "0": "var(--tl-size-0)",
      "1": "var(--tl-size-1)",
      "2": "var(--tl-size-2)",
      "3": "var(--tl-size-3)",
      "4": "var(--tl-size-4)",
      "5": "var(--tl-size-5)",
      "6": "var(--tl-size-6)",
      "7": "var(--tl-size-7)",
      "8": "var(--tl-size-8)",
      "9": "var(--tl-size-9)",
      "10": "var(--tl-size-10)",
      "11": "var(--tl-size-11)",
      "12": "var(--tl-size-12)",
      "13": "var(--tl-size-13)",
      "14": "var(--tl-size-14)",
      "15": "var(--tl-size-15)",
      "16": "var(--tl-size-16)",
      "17": "var(--tl-size-17)",
      "18": "var(--tl-size-18)",
      "19": "var(--tl-size-19)",
      "20": "var(--tl-size-20)",
      "21": "var(--tl-size-21)",
      "22": "var(--tl-size-22)",
      "23": "var(--tl-size-23)",
      "24": "var(--tl-size-24)",
      "25": "var(--tl-size-25)",
    },
    boxShadow: {
      none: "var(--tl-shadow-0)",
      xs: "var(--tl-shadow-1)",
      sm: "var(--tl-shadow-2)",
      md: "var(--tl-shadow-3)",
      lg: "var(--tl-shadow-4)",
      xl: "var(--tl-shadow-5)",
      "2xl": "var(--tl-shadow-6)",
      "3xl": "var(--tl-shadow-7)",
      "4xl": "var(--tl-shadow-8)",
      "inset-xs": "var(--tl-insetshadow-1)",
      "inset-xm": "var(--tl-insetshadow-2)",
      "inset-md": "var(--tl-insetshadow-3)",
      "inset-lg": "var(--tl-insetshadow-4)",
    },
    borderWidth: {
      0: "0px",
      1: "1px",
      2: "2px",
      3: "3px",
      4: "4px",
    },
    borderColor: (theme: any) => theme("colors"),
    borderStyle: {
      none: "none",
      hidden: "hidden",
      dotted: "dotted",
      dashed: "dashed",
      solid: "solid",
      double: "double",
      groove: "groove",
      ridge: "ridge",
      inset: "inset",
      outset: "outset",
    },
    borderTopWidth: (theme: any) => theme("borderWidth"),
    borderRightWidth: (theme: any) => theme("borderWidth"),
    borderBottomWidth: (theme: any) => theme("borderWidth"),
    borderLeftWidth: (theme: any) => theme("borderWidth"),
    borderTopStyle: (theme: any) => theme("borderStyle"),
    borderRightStyle: (theme: any) => theme("borderStyle"),
    borderBottomStyle: (theme: any) => theme("borderStyle"),
    borderLeftStyle: (theme: any) => theme("borderStyle"),
    borderTopColor: (theme: any) => theme("color"),
    borderRightColor: (theme: any) => theme("color"),
    borderBottomColor: (theme: any) => theme("color"),
    borderLeftColor: (theme: any) => theme("color"),

    borderRadius: {
      none: "var(--tl-radius-none)",
      sm: "var(--tl-radius-sm)",
      md: "var(--tl-radius-md)",
      lg: "var(--tl-radius-lg)",
      xl: "var(--tl-radius-xl)",
      "2xl": "var(--tl-radius-2xl)",
      "3xl": "var(--tl-radius-3xl)",
      round: "var(--tl-radius-round)",
    },
    borderTopRadius: (theme: any) => theme("borderRadius"),
    borderRightRadius: (theme: any) => theme("borderRadius"),
    borderBottomRadius: (theme: any) => theme("borderRadius"),
    borderLeftRadius: (theme: any) => theme("borderRadius"),
    borderTopLeftRadius: (theme: any) => theme("borderRadius"),
    borderTopRightRadius: (theme: any) => theme("borderRadius"),
    borderBottomRightRadius: (theme: any) => theme("borderRadius"),
    borderBottomLeftRadius: (theme: any) => theme("borderRadius"),
    backgroundColor: (theme: any) => theme("colors"),
    "--tl-background-alpha": (theme: any) => theme("opacity"),
    gap: (theme: any) => theme("spacing"), // change for own values
    height: (theme: any) => ({
      ...theme("spacing"),
      "1/2": "50%",
      "1/3": "33.333%",
      "2/3": "66.666%",
      "1/4": "24%",
      "3/4": "75%",
      "1/5": "20%",
      "2/5": "40%",
      "3/5": "60%",
      "4/5": "80%",
      full: "100%",
      screen: "100vh",
    }),
    minHeight: (theme: any) => ({
      ...theme("spacing"),
      full: "100%",
      screen: "100vh",
    }),
    maxHeight: (theme: any) => ({
      ...theme("spacing"),
      full: "100%",
      screen: "100vh",
    }),
    width: (theme: any) => ({
      ...theme("spacing"),
      "1/2": "50%",
      "1/3": "33.333%",
      "2/3": "66.666%",
      "1/4": "24%",
      "3/4": "75%",
      "1/5": "20%",
      "2/5": "40%",
      "3/5": "60%",
      "4/5": "80%",
      "1/6": "16.666%",
      "2/6": "33.444%",
      "3/6": "50%",
      "4/6": "66.666%",
      "5/6": "83.444%",
      "1/12": "8.333%",
      "2/12": "16.666%",
      "3/12": "24.999%",
      "4/12": "33.332%",
      "5/12": "41.665%",
      "6/12": "50%",
      "7/12": "58.333%",
      "8/12": "66.666%",
      "9/12": "74.999%",
      "10/12": "83.332%",
      "11/12": "91.665%",
      full: "100%",
      screen: "100vw",
    }),
    minWidth: (theme: any) => ({
      ...theme("spacing"),
      "1/2": "50%",
      "1/3": "33.333%",
      "2/3": "66.666%",
      "1/4": "24%",
      "3/4": "75%",
      "1/5": "20%",
      "2/5": "40%",
      "3/5": "60%",
      "4/5": "80%",
      "1/6": "16.666%",
      "2/6": "33.444%",
      "3/6": "50%",
      "4/6": "66.666%",
      "5/6": "83.444%",
      "1/12": "8.333%",
      "2/12": "16.666%",
      "3/12": "24.999%",
      "4/12": "33.332%",
      "5/12": "41.665%",
      "6/12": "50%",
      "7/12": "58.333%",
      "8/12": "66.666%",
      "9/12": "74.999%",
      "10/12": "83.332%",
      "11/12": "91.665%",
      full: "100%",
      screen: "100vh",
    }),
    maxWidth: (theme: any) => ({
      ...theme("spacing"),
      "1/2": "50%",
      "1/3": "33.333%",
      "2/3": "66.666%",
      "1/4": "24%",
      "3/4": "75%",
      "1/5": "20%",
      "2/5": "40%",
      "3/5": "60%",
      "4/5": "80%",
      "1/6": "16.666%",
      "2/6": "33.444%",
      "3/6": "50%",
      "4/6": "66.666%",
      "5/6": "83.444%",
      "1/12": "8.333%",
      "2/12": "16.666%",
      "3/12": "24.999%",
      "4/12": "33.332%",
      "5/12": "41.665%",
      "6/12": "50%",
      "7/12": "58.333%",
      "8/12": "66.666%",
      "9/12": "74.999%",
      "10/12": "83.332%",
      "11/12": "91.665%",
      full: "100%",
      screen: "100vh",
    }),
    padding: (theme: any) => ({
      auto: "auto",
      ...theme("spacing"),
    }),
    paddingX: (theme: any) => ({
      auto: "auto",
      ...theme("spacing"),
    }),
    paddingY: (theme: any) => ({
      auto: "auto",
      ...theme("spacing"),
    }),
    paddingTop: (theme: any) => ({
      auto: "auto",
      ...theme("spacing"),
    }),
    paddingRight: (theme: any) => ({
      auto: "auto",
      ...theme("spacing"),
    }),
    paddingBottom: (theme: any) => ({
      auto: "auto",
      ...theme("spacing"),
    }),
    paddingLeft: (theme: any) => ({
      auto: "auto",
      ...theme("spacing"),
    }),

    margin: (theme: any) => ({
      auto: "auto",
      ...theme("spacing"),
    }),
    marginX: (theme: any) => ({
      auto: "auto",
      ...theme("spacing"),
    }),
    marginY: (theme: any) => ({
      auto: "auto",
      ...theme("spacing"),
    }),
    marginTop: (theme: any) => ({
      auto: "auto",
      ...theme("spacing"),
    }),
    marginRight: (theme: any) => ({
      auto: "auto",
      ...theme("spacing"),
    }),
    marginBottom: (theme: any) => ({
      auto: "auto",
      ...theme("spacing"),
    }),
    marginLeft: (theme: any) => ({
      auto: "auto",
      ...theme("spacing"),
    }),

    fontSize: {
      h1: "3.81rem",
      h2: "2.5rem",
      h3: "2rem",
      h4: "1.5rem",
      h5: "1.2rem",
      body: "1rem",
      sm: "0.8rem",
    },
    color: (theme: any) => theme("colors"),
    display: {
      none: "none",
      initial: "initial",
      inherit: "inherit",
      grid: "grid",
      block: "block",
      inlineblock: "inline-block",
      inlineflex: "inline-flex",
    },
    position: {
      static: "static",
      relative: "relative",
      absolute: "absolute",
      fixed: "fixed",
      sticky: "sticky",
    },
    justifyContent: {
      start: "start",
      end: "end",
      center: "center",
      between: "space-between",
      around: "space-around",
      even: "space-even",
      stretch: "stretch",
      normal: "normal",
    },
    justifyItems: {
      start: "start",
      end: "end",
      center: "center",
      stretch: "stretch",
    },
    justifySelf: {
      start: "start",
      end: "end",
      center: "center",
      stretch: "stretch",
    },
    alignItems: {
      start: "start",
      end: "end",
      center: "center",
      stretch: "strech",
      baseline: "baseline",
    },
    alignContent: {
      start: "start",
      end: "end",
      center: "center",
      between: "space-between",
      around: "space-around",
      even: "space-even",
      stretch: "stretch",
      normal: "normal",
    },
    alignSelf: {
      start: "start",
      end: "end",
      center: "center",
      stretch: "stretch",
    },
    placeContent: {
      start: "start",
      end: "end",
      center: "center",
      between: "space-between",
      around: "space-around",
      even: "space-even",
      stretch: "stretch",
      normal: "normal",
    },
    placeItems: {
      start: "start",
      end: "end",
      center: "center",
      stretch: "stretch",
    },
    placeSelf: {
      start: "start",
      end: "end",
      center: "center",
      stretch: "stretch",
    },
    flex: {
      "1": "1 1 0%",
      auto: "1 1 auto",
      initial: "0 1 auto",
      none: "none",
    },
    flexWrap: {
      wrap: "wrap",
      reverse: "reverse",
      nowrap: "nowrap",
    },
    flexDirection: {
      row: "row;display:flex",
      col: "column;display:flex",
      "row-rev": "row-reverse;display:flex",
      "col-rev": "column-reverse;display:flex",
    },
    gridTemplateColumns: {
      1: "repeat(1, minmax(0, 1fr))",
      2: "repeat(2, minmax(0, 1fr))",
      3: "repeat(3, minmax(0, 1fr))",
      4: "repeat(4, minmax(0, 1fr))",
      5: "repeat(5, minmax(0, 1fr))",
      6: "repeat(6, minmax(0, 1fr))",
      7: "repeat(7, minmax(0, 1fr))",
      8: "repeat(8, minmax(0, 1fr))",
      9: "repeat(9, minmax(0, 1fr))",
      10: "repeat(10, minmax(0, 1fr))",
      11: "repeat(11, minmax(0, 1fr))",
      12: "repeat(12, minmax(0, 1fr))",
    },
    gridTemplateRows: {
      auto: "auto",
      min: "min-content",
      max: "max-content",
      "1fr": "minmax(0, 1fr)",
    },
    gridColumn: {
      auto: "auto",
      span: {
        "1": "span 1 / span 1",
        "2": "span 2 / span 2",
        "3": "span 3 / span 3",
        "4": "span 4 / span 4",
        "5": "span 5 / span 5",
        "6": "span 6 / span 6",
        "7": "span 7 / span 7",
        "8": "span 8 / span 8",
        "9": "span 9 / span 9",
        "10": "span 10 / span 10",
        "11": "span 11 / span 11",
        "12": "span 12 / span 12",
        full: " 1 / -1",
      },
      start: {
        "1": "1",
        "2": "2",
        "3": "3",
        "4": " 4",
        "5": " 5",
        "6": " 6",
        "7": " 7",
        "8": " 8",
        "9": " 9",
        "10": "10",
        "11": "11",
        "12": "12",
        auto: "auto",
      },
      end: {
        "1": "1",
        "2": "2",
        "3": "3",
        "4": " 4",
        "5": " 5",
        "6": " 6",
        "7": " 7",
        "8": " 8",
        "9": " 9",
        "10": "10",
        "11": "11",
        "12": "12",
        auto: "auto",
      },
    },
    gridRow: {
      auto: "auto",
      span: {
        "1": "span 1 / span 1",
        "2": "span 2 / span 2",
        "3": "span 3 / span 3",
        "4": "span 4 / span 4",
        "5": "span 5 / span 5",
        "6": "span 6 / span 6",
        "7": "span 7 / span 7",
        "8": "span 8 / span 8",
        "9": "span 9 / span 9",
        "10": "span 10 / span 10",
        "11": "span 11 / span 11",
        "12": "span 12 / span 12",
        full: " 1 / -1",
      },
      start: {
        "1": "1",
        "2": "2",
        "3": "3",
        "4": " 4",
        "5": " 5",
        "6": " 6",
        "7": " 7",
        "8": " 8",
        "9": " 9",
        "10": "10",
        "11": "11",
        "12": "12",
        auto: "auto",
      },
      end: {
        "1": "1",
        "2": "2",
        "3": "3",
        "4": " 4",
        "5": " 5",
        "6": " 6",
        "7": " 7",
        "8": " 8",
        "9": " 9",
        "10": "10",
        "11": "11",
        "12": "12",
        auto: "auto",
      },
    },
    overflow: {
      scroll: "scroll",
    },
    overflowY: (theme: any) => theme("overflow"),
    overflowX: (theme: any) => theme("overflow"),
    listStyle: {
      none: "none",
      square: "square",
      inside: "inside",
      circle: "circle",
      armenian: "armenian",
      decimal: "decimal",
      hebrew: "hebrew",
      hiragana: "hiagana",
      katakana: "katakana",
      "lower-alpha": "lower-alpha",
      "upper-alpha": "upper-alpha",
      "lower-roman": "lower-roman",
      "upper-roman": "upper-roman",
    },
    textDecoration: {
      none: "none",
      underline: "underline",
      strike: "line-through",
      dashed: "dashed",
      wavy: "wavy",
    },
    cursor: {
      pointer: "pointer",
      text: "text",
    },
  },
  variants: {
    boxShadow: ["responsive", "hover", "focus"],
    borderWidth: ["responsive"],
    borderColor: ["responsive", "hover", "focus"],
    borderRadius: ["responsive"],
    borderTopRadius: ["responsive"],
    borderRightRadius: ["responsive"],
    borderBottomRadius: ["responsive"],
    borderLeftRadius: ["responsive"],
    borderTopLeftRadius: ["responsive"],
    borderTopRightRadius: ["responsive"],
    borderBottomRightRadius: ["responsive"],
    borderBottomLeftRadius: ["responsive"],
    borderStyle: ["responsive"],
    borderTopWidth: ["responsive"],
    borderRightWidth: ["responsive"],
    borderBottomWidth: ["responsive"],
    borderLeftWidth: ["responsive"],
    borderTopStyle: ["responsive"],
    borderRightStyle: ["responsive"],
    borderBottomStyle: ["responsive"],
    borderLeftStyle: ["responsive"],
    borderTopColor: ["responsive", "hover", "focus"],
    borderRightColor: ["responsive", "hover", "focus"],
    borderBottomColor: ["responsive", "hover", "focus"],
    borderLeftColor: ["responsive", "hover", "focus"],
    backgroundColor: ["responsive", "visited", "hover", "focus"],
    "--tl-background-alpha": ["responsive", "visited", "hover", "focus"],
    gap: ["responsive"],
    height: ["responsive"],
    minHeight: ["responsive"],
    maxHeight: ["responsive"],
    width: ["responsive"],
    minWidth: ["responsive"],
    maxWidth: ["responsive"],
    padding: ["responsive"],
    paddingY: ["responsive"],
    paddingX: ["responsive"],
    paddingTop: ["responsive"],
    paddingRight: ["responsive"],
    paddingBottom: ["responsive"],
    paddingLeft: ["responsive"],
    margin: ["responsive"],
    marginY: ["responsive"],
    marginX: ["responsive"],
    marginTop: ["responsive"],
    marginRight: ["responsive"],
    marginBottom: ["responsive"],
    marginLeft: ["responsive"],
    fontSize: ["responsive"],
    color: ["responsive", "visited", "hover", "focus"],
    display: ["responsive"],
    flex: ["responsive"],
    flexWrap: ["responsive"],
    flexDirection: ["responsive"],
    gridTemplateColumns: ["responsive"],
    gridTemplateRows: ["responsive"],
    gridColumn: ["responsive"],
    gridRow: ["responsive"],
    justifyContent: ["responsive"],
    justifyItems: ["responsive"],
    justifySelf: ["responsive"],
    alignItems: ["responsive"],
    alignContent: ["responsive"],
    alignSelf: ["responsive"],
    placeContent: ["responsive"],
    placeItems: ["responsive"],
    placeSelf: ["responsive"],
    overflow: ["responsive"],
    overflowY: ["responsive"],
    overflowX: ["responsive"],
    position: ["responsive"],
    listStyle: ["responsive"],
    textDecoration: ["responsive"],
    cursor: ["responsive"],
  },
  classNames: {
    boxShadow: "shadow",
    borderWidth: "border",
    borderColor: "border",
    borderRadius: "radius",
    borderTopRadius: "radius-t",
    borderRightRadius: "radius-r",
    borderBottomRadius: "radius-b",
    borderLeftRadius: "radius-l",
    borderTopLeftRadius: "radius-tl",
    borderTopRightRadius: "radius-tr",
    borderBottomRightRadius: "radius-br",
    borderBottomLeftRadius: "radius-bl",
    borderStyle: "border",
    borderTopWidth: "border-t",
    borderRightWidth: "border-r",
    borderBottomWidth: "border-b",
    borderLeftWidth: "border-l",
    borderTopStyle: "border-t",
    borderRightStyle: "border-r",
    borderBottomStyle: "border-b",
    borderLeftStyle: "border-l",
    borderTopColor: "border-t",
    borderRightColor: "border-r",
    borderBottomColor: "border-b",
    borderLeftColor: "border-l",
    backgroundColor: "bg",
    "--tl-background-alpha": "bg-a",
    gap: "gap",
    height: "h",
    minHeight: "min-h",
    maxHeight: "max-h",
    width: "w",
    minWidth: "min-w",
    maxWidth: "max-w",
    padding: "p",
    paddingY: "py",
    paddingX: "px",
    paddingTop: "pt",
    paddingRight: "pr",
    paddingBottom: "pb",
    paddingLeft: "pl",
    margin: "m",
    marginY: "my",
    marginX: "mx",
    marginTop: "mt",
    marginRight: "mr",
    marginBottom: "mb",
    marginLeft: "ml",
    fontSize: "text",
    color: "text",
    display: "",
    flex: "flex",
    flexWrap: "flex",
    flexDirection: "flex",
    gridTemplateColumns: "gridtemp-cols",
    gridTemplateRows: "gridtemp-rows",
    gridColumn: "grid-cols",
    gridRow: "grid-rows",
    justifyContent: "justifycontent",
    justifyItems: "justifyitems",
    justifySelf: "justifyself",
    alignContent: "aligncontent",
    alignItems: "alignitems",
    alignSelf: "alignself",
    placeContent: "placecontent",
    placeItems: "placeitems",
    placeSelf: "placeself",
    overflow: "overflow",
    overflowY: "overflow-y",
    overflowX: "overflow-x",
    position: "",
    listStyle: "list",
    textDecoration: "text-decoration",
    cursor: "",
  },
};

export default DEFAULT_CONFIG;
