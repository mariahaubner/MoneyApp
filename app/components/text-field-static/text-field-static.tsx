import * as React from "react"
import { View, TextStyle, ViewStyle } from "react-native"
import { color, spacing, typography } from "../../theme"
import { Text } from "../"
import { mergeAll, flatten } from "ramda"

// the base styling for the TextInput
const INPUT: TextStyle = {
  minHeight: 44,
  backgroundColor: color.palette.lightPurple,
  borderRadius: 4,
  paddingHorizontal: spacing[2],
  paddingVertical: spacing[2],
}

const TEXT: TextStyle = {
  fontFamily: typography.primary,
  color: color.palette.black,
  fontSize: 18,
}

// currently we have no presets, but that changes quickly when you build your app.
const PRESETS: { [name: string]: ViewStyle } = {
  default: {},
}

const enhance = (style, styleOverride) => {
  return mergeAll(flatten([style, styleOverride]))
}

interface TextFieldStaticProps {
  text: string
  labelTx?: string
  label?: string
  preset?: "default"
  style?: ViewStyle | ViewStyle[]
  inputStyle?: ViewStyle | ViewStyle[]
}

/**
 * A component which has a label and an input together.
 */
export const TextFieldStatic: React.FunctionComponent<TextFieldStaticProps> = props => {
  const {
    text,
    labelTx,
    label,
    preset = "default",
    style: styleOverride,
    inputStyle: inputStyleOverride,
  } = props
  let containerStyle: ViewStyle = { ...PRESETS[preset] }
  containerStyle = enhance(containerStyle, styleOverride)

  let inputStyle: TextStyle = INPUT
  inputStyle = enhance(inputStyle, inputStyleOverride)

  return (
    <View style={containerStyle}>
      <Text preset="fieldLabel" tx={labelTx} text={label} />
      <View style={inputStyle}>
        <Text style={TEXT} text={text} />
      </View>
    </View>
  )
}
