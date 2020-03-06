import { TextStyle, StyleSheet } from "react-native"
import { color, spacing } from "../theme"

const TEXT: TextStyle = {
  color: color.palette.white,
  fontFamily: "Montserrat",
}
const BOLD: TextStyle = { fontWeight: "bold" }

const elements = StyleSheet.create({
  defaultButton: {
    backgroundColor: color.palette.purple,
    paddingHorizontal: spacing[3],
    paddingVertical: spacing[4],
  },
  image: {
    alignSelf: "center",
    borderRadius: 16,
    marginVertical: spacing[3],
    maxWidth: "100%",
  },
  input: {
    backgroundColor: color.palette.white,
    borderRadius: 4,
    height: 40,
    marginVertical: spacing[2],
    paddingHorizontal: spacing[2],
  },
})

const container = StyleSheet.create({
  footer: {
    paddingHorizontal: spacing[4],
    paddingVertical: spacing[4],
  },
  footerContainer: { backgroundColor: color.palette.darkPurple },
  form: {
    flexDirection: "column",
    justifyContent: "space-between",
  },
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
  welcomeFooterContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    paddingHorizontal: spacing[2],
    paddingVertical: spacing[4],
  },
})

const text = StyleSheet.create({
  content: {
    ...TEXT,
    color: color.palette.lightPurple,
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
