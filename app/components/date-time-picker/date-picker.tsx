import * as React from "react"
import { View, TextStyle, ViewStyle } from "react-native"
import { styles } from "../../screens/styles"
import { Button } from "../button/button"
import { Text } from "../text/text"
import DateTimePicker from "@react-native-community/datetimepicker"
import { color, spacing, typography } from "../../theme"
import { mergeAll, flatten } from "ramda"

const CONTAINER: ViewStyle = {
  // nothing so far
}

const INPUT: TextStyle = {
  height: 44,
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

const BUTTON: TextStyle = {
  height: 44,
}

// currently we have no presets, but that changes quickly when you build your app.
const PRESETS: { [name: string]: ViewStyle } = {
  default: {},
}

const enhance = (style, styleOverride) => {
  return mergeAll(flatten([style, styleOverride]))
}

export function DatePicker({
  value,
  onChange,
  preset = "default",
  style: styleOverride,
  inputStyle: inputStyleOverride,
}: {
  value: Date
  onChange: (date: Date) => void
  preset?: "default"
  style?: ViewStyle | ViewStyle[]
  inputStyle?: ViewStyle | ViewStyle[]
}) {
  const [showDatePicker, setShowDatePicker] = React.useState(false)

  let containerStyle: ViewStyle = { ...CONTAINER, ...PRESETS[preset] }
  containerStyle = enhance(containerStyle, styleOverride)

  let inputStyle: TextStyle = INPUT
  inputStyle = enhance(inputStyle, inputStyleOverride)

  return (
    <View style={containerStyle}>
      <Text preset="fieldLabel" tx="formScreen.date" />
      <View style={styles.container.row}>
        <View style={{ ...inputStyle, ...styles.elements.input5 }}>
          <Text style={TEXT} text={value.toLocaleDateString()} />
        </View>
        <View>
          <Button
            style={{ ...BUTTON, ...styles.elements.defaultButton, ...styles.elements.input1 }}
            textStyle={styles.text.defaultButton}
            onPress={() => setShowDatePicker(true)}
          >
            <Text text="🗓" />
          </Button>
        </View>
      </View>
      {showDatePicker && (
        <DateTimePicker
          value={value}
          onChange={(_, date) => {
            setShowDatePicker(false)
            onChange(date || value)
          }}
        />
      )}
    </View>
  )
}
