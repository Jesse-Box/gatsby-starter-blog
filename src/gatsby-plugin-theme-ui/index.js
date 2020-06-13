export default {
  breakpoints: ["40em", "56em", "64em"],

  space: [0, 4, 8, 16, 32, 64, 128, 256, 512],

  sizes: [540, 656, 1260],

  radii: [2, 8, 16, 32],

  fonts: {
    body:
      "system-ui, -apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Helvetica Neue, sans-serif",
    heading:
      "system-ui, -apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Helvetica Neue, sans-serif",
    monospace: "Menlo, monospace",
  },

  fontSizes: [
    "0.833em",
    "1em",
    "1.2em",
    "1.44em",
    "1.728em",
    "2.074em",
    "2.488em",
  ],

  fontWeights: {
    body: 400,
    heading: 600,
  },

  lineHeights: {
    body: 1.5,
    heading: 1.125,
  },

  colors: {
    text: "#F9FAFB",
    background: "#101010",
    primary: {
      light: "#FF7E70",
      base: "#FF5447",
      dark: "#D93732",
    },
    accent: "#47A6FF",
    secondary: "#ADB9C2",
    muted: "#292929",
    modes: {
      light: {
        text: "#1A1F23",
        background: "#F9FAFB",
        primary: {
          light: "#8870FF",
          base: "#6047FF",
          dark: "#4332D9",
        },
        accent: "#CF1726",
        secondary: "#5F7181",
        muted: "#E7EBEE",
      },
    },
  },

  styles: {
    root: {
      fontFamily: "body",
      fontWeight: "body",
      lineHeight: "body",
      fontSize: ["16px", "18px", "20px"],
      margin: 0,
      textRendering: "optimizelegibility",
    },
    h1: {
      color: "text",
      fontFamily: "heading",
      lineHeight: "heading",
      fontWeight: "heading",
      fontSize: 6,
      margin: 0,
      letterSpacing: "-0.64px",
    },
    h2: {
      color: "text",
      fontFamily: "heading",
      lineHeight: "heading",
      fontWeight: "heading",
      fontSize: 5,
      margin: 0,
    },
    h3: {
      color: "text",
      fontFamily: "heading",
      lineHeight: "heading",
      fontWeight: "heading",
      fontSize: 4,
      margin: 0,
    },
    h4: {
      color: "text",
      fontFamily: "heading",
      lineHeight: "heading",
      fontWeight: "heading",
      fontSize: 3,
      margin: 0,
    },
    h5: {
      color: "text",
      fontFamily: "heading",
      lineHeight: "heading",
      fontWeight: "heading",
      fontSize: 2,
      margin: 0,
    },
    h6: {
      color: "secondary",
      fontFamily: "body",
      lineHeight: "body",
      fontWeight: "body",
      fontSize: 0,
      margin: 0,
    },
    p: {
      color: "text",
      fontFamily: "body",
      fontWeight: "body",
      lineHeight: "body",
      fontSize: 1,
      margin: 0,
    },
    a: {
      color: "primary.base",
      textDecoration: "none",
      margin: 0,
      transition: "all 80ms ease-in",
      outline: "none",
      borderRadius: 1,

      ":hover": {
        textDecoration: "underline",
      },

      ":active": {
        boxShadow: theme => `0 0 0 2px ${theme.colors.accent}`,
      },

      ":focus": {
        boxShadow: theme => `0 0 0 2px ${theme.colors.accent}`,
      },
    },
    pre: {
      fontFamily: "monospace",
      overflowX: "auto",
      code: {
        color: "inherit",
      },
      margin: 0,
    },
    code: {
      fontFamily: "monospace",
      fontSize: "inherit",
      margin: 0,
    },
    table: {
      width: "100%",
      borderCollapse: "separate",
      borderSpacing: 0,
    },
    th: {
      textAlign: "left",
      borderBottomStyle: "solid",
    },
    td: {
      textAlign: "left",
      borderBottomStyle: "solid",
    },
    img: {
      maxWidth: "100%",
    },
    blockquote: {
      margin: 0,
      paddingX: 3,
      borderLeftStyle: "solid",
      borderLeftColor: "primary.base",
      borderLeftWidth: 0,
    },
  },

  buttons: {
    primary: {
      color: "background",
      bg: "primary.base",

      ":hover": {
        bg: "primary.light",
      },

      ":active": {
        bg: "primary.dark",
      },
    },
    naked: {
      bg: "background",
      outline: "none",
      color: "primary.base",

      ":hover": {
        bg: "muted",
      },

      ":active": {
        color: "primary.dark",
        boxShadow: theme => `0 0 0 2px ${theme.colors.accent}`,
      },

      ":focus": {
        boxShadow: theme => `0 0 0 2px ${theme.colors.accent}`,
      },
    },
  },

  borderWidths: [2, 4],

  borderStyles: {
    primary: "solid",
  },

  flexDirection: {
    horizontal: "row",
    vertical: "column",
  },

  justifyContent: {
    start: "flex-start",
    end: "flex-end",
    center: "center",
    spaceBetween: "space-between",
  },

  alignItems: {
    center: "center",
  },

  link: {
    nav: {
      ":hover": {
        bg: "muted",
        textDecoration: "none",
      },
    },
  },
}
