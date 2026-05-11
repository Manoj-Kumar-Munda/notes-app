import { font, spacing } from "@/constants/theme";
import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  listContent: {
    paddingTop: spacing.spacing_16,
  },
  header: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: spacing.spacing_16,
  },
  heading: {
    fontSize: font.size.xl,
    fontWeight: font.weight.extraBold,
  },
  subheading: {
    fontSize: font.size.sm,
    fontWeight: font.weight.medium,
  },
  separator: {
    height: spacing.spacing_2,
  },
  footer: {
    height: spacing.spacing_16,
  },
});