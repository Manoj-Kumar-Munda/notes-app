import { useState } from "react";
import { ImageBackground } from "expo-image";
import {
  Text,
  View,
  TextInput,
  ScrollView,
  KeyboardAvoidingView,
  Platform,
  Pressable,
  StyleSheet,
} from "react-native";
import { useTheme } from "@/context/theme-context";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import { font, spacing, rounded } from "@/constants/theme";
import Feather from "@expo/vector-icons/Feather";

const CreateNotesSceen = () => {
  const { colors } = useTheme();
  const insets = useSafeAreaInsets();
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const [titleFocused, setTitleFocused] = useState(false);
  const [contentFocused, setContentFocused] = useState(false);

  const iconStyles = StyleSheet.flatten([
    styles.icon,
    {
      backgroundColor: colors.primaryLight,
    },
  ]);

  const buttonStyles = StyleSheet.flatten([
    styles.button,
    {
      backgroundColor: colors.primary,
    },
  ]);

  const inputStyles = (isFocused: boolean) =>
    StyleSheet.flatten([
      styles.input,
      {
        borderColor: isFocused ? colors.primary : colors.primaryLight,
        color: colors.text,
        backgroundColor: colors.background,
      },
    ]);

  const headingStyles = StyleSheet.flatten([
    styles.heading,
    {
      color: colors.text,
    },
  ]);

  return (
    <KeyboardAvoidingView
      style={{ flex: 1, backgroundColor: colors.background }}
      behavior={Platform.OS === "ios" ? "padding" : undefined}
    >
      <ScrollView
        contentContainerStyle={{
          flexGrow: 1,
          paddingBottom: insets.bottom + spacing.spacing_32,
        }}
        keyboardShouldPersistTaps="handled"
      >
        <ImageBackground
          source={require("@/assets/images/headerBg.png")}
          style={{ width: "100%", height: 150 }}
        >
          <View style={styles.headerContent}>
            <Text style={headingStyles}>Create Note</Text>
            <Text
              style={[
                styles.subheading,
                {
                  color: colors.text,
                },
              ]}
            >
              Save your thoughts and ideas in a new note.
            </Text>
          </View>
        </ImageBackground>

        <View style={styles.form}>
          <View style={styles.fields}>
            <View style={styles.fieldGroup}>
              <View style={styles.labelRow}>
                <View style={iconStyles}>
                  <Feather name="type" size={14} color={colors.primary} />
                </View>
                <Text style={[styles.label, { color: colors.text }]}>
                  Title
                </Text>
              </View>
              <TextInput
                style={inputStyles(titleFocused)}
                placeholder="Give your note a title"
                placeholderTextColor={colors.muted}
                value={title}
                onChangeText={setTitle}
                onFocus={() => setTitleFocused(true)}
                onBlur={() => setTitleFocused(false)}
                maxLength={100}
              />
            </View>

            <View style={styles.fieldGroup}>
              <View style={styles.labelRow}>
                <View style={iconStyles}>
                  <Feather name="file-text" size={14} color={colors.primary} />
                </View>
                <Text style={[styles.label, { color: colors.text }]}>
                  Content
                </Text>
              </View>
              <TextInput
                style={[styles.textArea, inputStyles(contentFocused)]}
                placeholder="Type your notes here..."
                placeholderTextColor={colors.muted}
                value={content}
                onChangeText={setContent}
                onFocus={() => setContentFocused(true)}
                onBlur={() => setContentFocused(false)}
                multiline
              />
            </View>
          </View>

          <Pressable
            style={({ pressed }) => [
              buttonStyles,
              { opacity: pressed ? 0.85 : 1 },
            ]}
          >
            <Feather name="plus" size={18} color="#fff" />
            <Text style={styles.buttonText}>Create</Text>
          </Pressable>
        </View>
      </ScrollView>
    </KeyboardAvoidingView>
  );
};

export default CreateNotesSceen;

const styles = StyleSheet.create({
  heading: {
    fontSize: font.size.xl,
    fontWeight: font.weight.bold,
  },
  subheading: {
    opacity: 0.8,
    marginTop: spacing.spacing_4,
    fontSize: font.size.sm,
  },
  headerContent: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  form: {
    marginTop: spacing.spacing_20,
    padding: spacing.spacing_16,
    flex: 1,
    justifyContent: "space-between",
  },
  fields: {
    gap: spacing.spacing_20,
  },
  fieldGroup: {
    gap: spacing.spacing_8,
  },
  labelRow: {
    flexDirection: "row",
    alignItems: "center",
    gap: spacing.spacing_8,
  },
  icon: {
    width: spacing.spacing_28,
    height: spacing.spacing_28,
    borderRadius: rounded.default,
    justifyContent: "center",
    alignItems: "center",
  },
  label: {
    fontSize: font.size.sm,
    fontWeight: font.weight.medium,
  },
  input: {
    fontSize: font.size.default,
    borderWidth: 1,
    borderRadius: rounded.default,
    paddingHorizontal: spacing.spacing_16,
    paddingVertical: spacing.spacing_16,
  },
  textArea: {
    minHeight: 180,
    textAlignVertical: "top",
  },
  button: {
    borderRadius: rounded.default,
    paddingVertical: spacing.spacing_16,
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    gap: spacing.spacing_8,
    marginTop: spacing.spacing_8,
  },
  buttonText: {
    color: "#fff",
    fontSize: font.size.default,
    fontWeight: font.weight.bold,
  },
});
