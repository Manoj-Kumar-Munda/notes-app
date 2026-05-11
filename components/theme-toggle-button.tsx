import { rounded, spacing } from "@/constants/theme";
import { useTheme } from "@/context/theme-context";
import Feather from "@expo/vector-icons/Feather";
import { Pressable, StyleSheet } from "react-native";

const ThemeToggleButton = () => {
  const { isDark, toggleTheme, colors } = useTheme();

  const buttonStyle = StyleSheet.flatten([
    styles.button,
    {
      backgroundColor: colors.background,
      borderColor: colors.border,
    },
  ]);

  return (
    <Pressable
      onPress={toggleTheme}
      style={({ pressed }) => [buttonStyle, pressed && styles.pressed]}
    >
      <Feather
        name={isDark ? "sun" : "moon"}
        size={20}
        color={colors.icon}
        strokeWidth={2}
      />
    </Pressable>
  );
};

export default ThemeToggleButton;

const styles = StyleSheet.create({
  button: {
    width: spacing.spacing_32,
    height: spacing.spacing_32,
    alignItems: "center",
    justifyContent: "center",
    borderWidth: 1,
    borderRadius: rounded.default,
  },
  pressed: {
    transform: [{ scale: 0.98 }],
  },
});
