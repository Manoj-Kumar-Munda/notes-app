import { useTheme } from "@/context/theme-context";
import { Switch } from "react-native";

const ThemeToggleButton = () => {
  const { isDark, toggleTheme, colors } = useTheme();

  return (
    <Switch
      trackColor={{ false: colors.primaryLight, true: colors.primaryLight }}
      thumbColor={colors.primary}
      onValueChange={toggleTheme}
      value={isDark}
    />
  );
};

export default ThemeToggleButton;
