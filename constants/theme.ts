const colors = {
  GHOST_WHITE: "#F8F8FF",
  DARK: "#171717",
  WHITE: "#ffffff",
  GRAY: "#6b7280",
  LIGHT_GRAY: "#DFE3EA",
  DARK_GRAY: "#2B3240",
  ICON_DARK: "#090A0F",
  ICON_LIGHT: "#F8FAFC",
};

const palette = {
  light: {
    background: colors.GHOST_WHITE,
    icon: colors.ICON_DARK,
    text: colors.DARK,
    muted: colors.GRAY,
    border: colors.LIGHT_GRAY,
  },
  dark: {
    background: colors.DARK,
    icon: colors.ICON_LIGHT,
    text: colors.WHITE,
    muted: colors.GRAY,
    border: colors.DARK_GRAY,
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
  spacing_4: 4,
  spacing_8: 8,
  spacing_2: 12,
  spacing_16: 16,
  spacing_32: 32,
};

const rounded = {
  default: 8,
};

export { font, palette, spacing, rounded };
