import * as React from "react"
import { NavigationInjectedProps } from "react-navigation"
import { styles } from "../screens/styles"
import { Wallpaper } from "./wallpaper/wallpaper"
import { Screen } from "./screen/screen"
import { Header } from "./header/header"
import { Text } from "./text/text"
import { View } from "react-native"
import { color } from "../theme"

export interface Props extends NavigationInjectedProps<{}> {
  back?: boolean
  footer?: React.ReactNode
  title?: string
}

export const ViewScreen: React.FunctionComponent<Props> = props => {
  const goBack = React.useMemo(() => () => props.navigation.goBack(null), [props.navigation])

  return (
    <View style={styles.container.full}>
      <Wallpaper />
      <Screen style={styles.container.screen} preset="scroll" backgroundColor={color.transparent}>
        <Header
          headerTx="common.poweredBy"
          leftIcon={props.back ? "back" : undefined}
          onLeftPress={props.back ? goBack : undefined}
          style={styles.container.header}
          titleStyle={styles.text.header}
        />
        {props.title && <Text style={styles.text.title} tx={props.title} />}
        {props.children}
      </Screen>
      {props.footer}
    </View>
  )
}
