import { TextStyle, StyleSheet } from "react-native"
import { color, spacing } from "../theme"

const colors = {
  purple: "#5D2555",
  lightPurple: "#BAB6C8",
  darkPurple: "#20162D",
}

const TEXT: TextStyle = {
  color: color.palette.white,
  fontFamily: "Montserrat",
}
const BOLD: TextStyle = { fontWeight: "bold" }

const elements = StyleSheet.create({
  defaultButton: {
    backgroundColor: colors.purple,
    paddingHorizontal: spacing[4],
    paddingVertical: spacing[4],
  },
  image: {
    alignSelf: "center",
    borderRadius: 16,
    marginVertical: spacing[3],
    maxWidth: "100%",
  },
})

const container = StyleSheet.create({
  footer: {
    paddingHorizontal: spacing[4],
    paddingVertical: spacing[4],
  },
  footerContainer: { backgroundColor: colors.darkPurple },
  full: {
    flex: 1,
  },
  header: {
    paddingBottom: spacing[4] + spacing[1],
    paddingHorizontal: 0,
    paddingTop: spacing[3],
  },
  screen: {
    backgroundColor: color.transparent,
    paddingHorizontal: spacing[4],
  },
})

const text = StyleSheet.create({
  content: {
    ...TEXT,
    color: colors.lightPurple,
    fontSize: 15,
    lineHeight: 22,
    marginBottom: spacing[5],
  },
  defaultButton: {
    ...TEXT,
    ...BOLD,
    fontSize: 13,
    letterSpacing: 2,
  },
  header: {
    ...TEXT,
    ...BOLD,
    fontSize: 12,
    letterSpacing: 1.5,
    lineHeight: 15,
    textAlign: "center",
  },
  title: {
    ...TEXT,
    ...BOLD,
    fontSize: 28,
    lineHeight: 56,
    textAlign: "center",
  },
})

export const styles = { elements, container, text }
