import { spacing } from "@/constants/theme";
import { useTheme } from "@/context/theme-context";
import { useResponsive } from "@/hooks/useResponsive";
import { StatusBar } from "expo-status-bar";
import { StyleSheet, View } from "react-native";
import { useSafeAreaInsets } from "react-native-safe-area-context";

const Container = ({ children }: { children: React.ReactNode }) => {
  const { colors, isDark } = useTheme();
  const insets = useSafeAreaInsets();
  const { isLandscape, isTablet } = useResponsive();

  const containerStyle = StyleSheet.flatten([
    styles.container,
    {
      backgroundColor: colors.background,
      paddingTop: insets.top,
      paddingBottom: insets.bottom,
      paddingHorizontal:
        isTablet || isLandscape
          ? insets.left + insets.right + spacing.spacing_32
          : spacing.spacing_16,
    },
  ]);

  return (
    <>
      <StatusBar style={isDark ? "light" : "dark"} />
      <View style={containerStyle}>{children}</View>
    </>
  );
};

export default Container;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: spacing.spacing_16,
    paddingBottom: spacing.spacing_16,
  },
});
