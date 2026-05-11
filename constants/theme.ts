const colors = {
  GHOST_WHITE: "#F8F8FF",
  DARK: "#171717",
  WHITE: "#ffffff",
  GRAY: "#6b7280",
};

const palette = {
  light: {
    background: colors.GHOST_WHITE,
    icon: colors.DARK,
    text: colors.DARK,
    muted: colors.GRAY,
  },
  dark: {
    background: colors.DARK,
    icon: colors.WHITE,
    text: colors.WHITE,
    muted: colors.GRAY,
  },
};

const font = {
  size: {
    default: 16,
    sm: 14,
    xs: 12,
    xl: 24,
  },
  weight: {
    regular: "400",
    medium: "500",
    bold: "700",
    extraBold: "800",
  },
} as const;

const spacing = {
  default: 4,
  "!6": 16,
};

const theme = {
  palette,
  font,
  spacing,
} as const;

export { font, palette, spacing };
export default theme;
