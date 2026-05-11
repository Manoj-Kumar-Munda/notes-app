import { font, rounded, spacing } from "@/constants/theme";
import { type NoteType } from "@/constants/data";
import { useTheme } from "@/context/theme-context";
import Feather from "@expo/vector-icons/Feather";
import { StyleSheet, Text, View } from "react-native";

type NoteCardProps = NoteType;

const formatDate = (date: string) =>
  new Intl.DateTimeFormat("en", {
    month: "short",
    day: "numeric",
    year: "numeric",
  }).format(new Date(date));

const NoteCard: React.FC<NoteCardProps> = ({ title, content, createdAt }) => {
  const { colors } = useTheme();

  return (
    <View
      style={[
        styles.card,
        { backgroundColor: colors.background, borderColor: colors.border },
      ]}
    >
      <View style={styles.headingRow}>
        <View style={styles.textGroup}>
          <Text style={[styles.title, { color: colors.text }]}>{title}</Text>
          <Text
            numberOfLines={2}
            ellipsizeMode="tail"
            style={[styles.content, { color: colors.muted }]}
          >
            {content}
          </Text>
        </View>

        <Feather name="chevron-down" size={18} color={colors.icon} />
      </View>

      <View style={styles.metaRow}>
        <Feather name="calendar" size={14} color={colors.muted} />
        <Text style={[styles.metaText, { color: colors.muted }]}>
          {formatDate(createdAt)}
        </Text>
      </View>
    </View>
  );
};

export default NoteCard;

const styles = StyleSheet.create({
  card: {
    padding: spacing.spacing_16,
    borderRadius: rounded.default,
    borderWidth: 1,
  },
  headingRow: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    gap: spacing.spacing_8,
  },
  textGroup: {
    flex: 1,
  },
  title: {
    fontSize: font.size.default,
    fontWeight: font.weight.bold,
    marginBottom: spacing.spacing_4,
  },
  content: {
    fontSize: font.size.sm,
    lineHeight: 20,
  },
  metaRow: {
    flexDirection: "row",
    alignItems: "center",
    gap: spacing.spacing_4,
    marginTop: spacing.spacing_16,
  },
  metaText: {
    fontSize: font.size.xs,
    fontWeight: font.weight.medium,
  },
});
