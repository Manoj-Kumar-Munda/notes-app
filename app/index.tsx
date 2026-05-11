import Container from "@/components/container";
import NoteCard from "@/components/note-card";
import ThemeToggleButton from "@/components/theme-toggle-button";
import { notes, type NoteType } from "@/constants/data";
import { font, spacing } from "@/constants/theme";
import { useTheme } from "@/context/theme-context";
import { FlatList, ListRenderItem, StyleSheet, Text, View } from "react-native";

export default function Index() {
  const { colors } = useTheme();

  const renderNote: ListRenderItem<NoteType> = ({ item }) => (
    <NoteCard {...item} />
  );

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
      <FlatList
        data={notes}
        keyExtractor={(item) => item.id}
        renderItem={renderNote}
        showsVerticalScrollIndicator={false}
        contentContainerStyle={styles.listContent}
        ItemSeparatorComponent={() => <View style={styles.separator} />}
        ListHeaderComponent={
          <View style={styles.header}>
            <View>
              <Text style={headingStyle}>All Notes</Text>
              <Text style={subheadingStyle}>{notes.length} notes</Text>
            </View>
            <ThemeToggleButton />
          </View>
        }
        ListFooterComponent={<View style={styles.footer} />}
      />
    </Container>
  );
}

const styles = StyleSheet.create({
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
