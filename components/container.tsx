import { useTheme } from "@/context/theme-context";
import { StyleSheet, View } from "react-native";
import { useSafeAreaInsets } from "react-native-safe-area-context";

const Container = ({ children }: { children: React.ReactNode }) => {
  const { colors } = useTheme();
  const insets = useSafeAreaInsets();

  const containerStyle = StyleSheet.flatten([
    styles.container,
    { backgroundColor: colors.background, paddingTop: insets.top },
  ]);

  return <View style={containerStyle}>{children}</View>;
};

export default Container;

const styles = {
  container: {
    flex: 1,
    paddingHorizontal: 16,
  },
};
