import Container from "@/components/container";
import ThemeToggleButton from "@/components/theme-toggle-button";
import { font } from "@/constants/theme";
import { useTheme } from "@/context/theme-context";
import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";

export default function Index() {
  const { isDark, colors } = useTheme();

  const headingStyle = StyleSheet.flatten([
    styles.heading,
    { color: colors.text },
  ]);

  const subheadingStyle = StyleSheet.flatten([
    styles.subheading,
    { color: colors.muted },
  ]);

  return (
    <Container>
      <View style={styles.header}>
        <View>
          <Text style={headingStyle}>All Notes</Text>
          <Text style={subheadingStyle}>10 notes</Text>
        </View>
        <ThemeToggleButton />
      </View>

      <StatusBar style={isDark ? "light" : "dark"} />
    </Container>
  );
}

const styles = StyleSheet.create({
  header: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingTop: 16,
  },
  heading: {
    fontSize: font.size.xl,
    fontWeight: font.weight.extraBold,
  },
  subheading: {
    fontSize: font.size.sm,
    fontWeight: font.weight.medium,
  },
});
