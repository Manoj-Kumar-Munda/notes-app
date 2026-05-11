const notes = [
  {
    id: "project-ideas",
    title: "Project Ideas",
    content:
      "Brainstorm AI workflow SaaS ideas for developers, creators, and students.",
    createdAt: "2026-05-01",
  },
  {
    id: "meeting-notes",
    title: "Meeting Notes",
    content:
      "Discussed onboarding flow improvements and dark mode support for the app.",
    createdAt: "2026-05-02",
  },
  {
    id: "shopping-list",
    title: "Shopping List",
    content:
      "Buy keyboard, mouse pad, monitor stand, and USB-C hub for workspace setup.",
    createdAt: "2026-05-03",
  },
  {
    id: "workout-routine",
    title: "Workout Routine",
    content:
      "Morning stretching, 30 minutes cardio, and evening strength training plan.",
    createdAt: "2026-05-04",
  },
  {
    id: "react-native-tips",
    title: "React Native Tips",
    content:
      "Use useWindowDimensions for responsive layouts and avoid fixed widths.",
    createdAt: "2026-05-05",
  },
  {
    id: "travel-plan",
    title: "Travel Plan",
    content:
      "Plan a short trip with a checklist for clothes, gadgets, and documents.",
    createdAt: "2026-05-06",
  },
  {
    id: "reading-list",
    title: "Reading List",
    content:
      "Finish Atomic Habits and start Deep Work by the end of this month.",
    createdAt: "2026-05-07",
  },
  {
    id: "design-feedback",
    title: "Design Feedback",
    content:
      "Increase spacing between cards and improve contrast in dark theme.",
    createdAt: "2026-05-08",
  },
  {
    id: "daily-goals",
    title: "Daily Goals",
    content:
      "Complete API integration, fix layout bugs, and push updates to GitHub.",
    createdAt: "2026-05-09",
  },
  {
    id: "content-ideas",
    title: "Content Ideas",
    content:
      "Create YouTube videos about Expo, Supabase auth, and AI workflows.",
    createdAt: "2026-05-10",
  },
];

type NoteType = (typeof notes)[0];

export { notes, type NoteType };
