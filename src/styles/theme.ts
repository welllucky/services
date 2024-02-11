const theme = {
  media: {
    mobileS: "320px",
    mobileM: "375px",
    mobileL: "425px",
    mobileXL: "480px",
    tabletS: "576px",
    tablet: "768px",
    laptop: "1024px",
    laptopL: "1440px",
    desktopS: "1980px",
    desktop: "2560px"
  },

  colors: {
    neutral: {
      light: {
        5: "#4F5256",
        15: "#5C5E62",
        25: "#6D6F73",
        35: "#8F9194",
        45: "#A0A2A4",
        55: "#B2B3B5",
        65: "#C3C4C5",
        75: "#D4D5D6",
        85: "#E5E6E6",
        95: "#F6F7F7"
      },
      dark: {
        5: "#47494D",
        15: "#3E4144",
        25: "#36383B",
        35: "#2E2F32",
        45: "#252728",
        55: "#1D1E1F",
        65: "#151617",
        75: "#0C0D0E",
        85: "#040405"
      },
      default: "#53565A",
      black: "#040405",
      white: "#F6F7F7",
      opacity: "rgba(0,0,0, 0.8)"
    },
    red: {
      light: {
        5: "#E8273F",
        15: "#EB3E53",
        25: "#ED5568",
        35: "#EF6B7C",
        45: "#F28290",
        55: "#F499A4",
        65: "#F7B0B8",
        75: "#F9C6CD",
        85: "#FBDDE1",
        95: "#FEF4F5"
      },
      dark: {
        5: "#BE0F2C",
        15: "#AA0E27",
        25: "#960C23",
        35: "#820A1E",
        45: "#6E0919",
        55: "#5A0715",
        65: "#460610",
        75: "#1E0207",
        85: "#040405",
        95: "#0A0102"
      },
      default: "#E71C35"
    },
    green: {
      light: {
        5: "#81C44C",
        15: "#8ECA5F",
        25: "#9BD172",
        35: "#A9D785",
        45: "#B6DD98",
        55: "#C3E3AA",
        65: "#D0E9BD",
        75: "#DEF0D0",
        85: "#EBF6E3",
        95: "#F8FCF6"
      },
      dark: {
        5: "#74B740",
        15: "#68A439",
        25: "#5A8F19",
        35: "#4F7D2C",
        45: "#436A25",
        55: "#37571E",
        65: "#2B4417",
        75: "#1F3011",
        85: "#121D0A",
        95: "#060A03"
      },
      default: "#7AC143"
    },
    parGreen: {
      light: {
        5: "#C4DA39",
        15: "#CADE4E",
        25: "#D1E263",
        35: "#D7E678",
        45: "#DDEA8D",
        55: "#E3EDA1",
        65: "#E9F1B6",
        75: "#F0F5CB",
        85: "#F6F9E0",
        95: "#FCFDF5"
      },
      dark: {
        5: "#B7CD2D",
        15: "#A4B828",
        25: "#91A223",
        35: "#7D8C1F",
        45: "#6A771A",
        55: "#576115",
        65: "#444C10",
        75: "#30360C",
        85: "#1D2007",
        95: "#0A0B02"
      },
      default: "#C1D82F"
    }
  }
};

export type ThemeProps = typeof theme;
export { theme as ThemeProps };
