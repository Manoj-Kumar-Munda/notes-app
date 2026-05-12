const colors = {
  GHOST_WHITE: "#F8F8FF",
  DARK: "#171717",
  WHITE: "#ffffff",
  GRAY: "#6b7280",
  LIGHT_GRAY: "#DFE3EA",
  DARK_GRAY: "#2B3240",
  ICON_DARK: "#090A0F",
  ICON_LIGHT: "#F8FAFC",
  ORANGE_LIGHT: "#ffedd5",
  ORANGE: "#f97316",
};

const palette = {
  light: {
    background: colors.GHOST_WHITE,
    icon: colors.ICON_DARK,
    text: colors.DARK,
    muted: colors.GRAY,
    border: colors.LIGHT_GRAY,
    primary: colors.ORANGE,
    primaryLight: colors.ORANGE_LIGHT,
  },
  dark: {
    background: colors.DARK,
    icon: colors.ICON_LIGHT,
    text: colors.WHITE,
    muted: colors.GRAY,
    border: colors.DARK_GRAY,
    primary: colors.ORANGE,
    primaryLight: colors.ORANGE_LIGHT,
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
  spacing_20: 20,
  spacing_24: 24,
  spacing_28: 28,
  spacing_32: 32,
};

const rounded = {
  default: 8,
};

export { font, palette, spacing, rounded };
