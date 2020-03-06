import * as React from "react"
import { View, SafeAreaView, Image } from "react-native"
import { NavigationInjectedProps } from "react-navigation"
import { Button, Text, ViewScreen } from "../../components"
import { styles } from "../styles"
const atmImage = require("./atm.png")

export interface Props extends NavigationInjectedProps<{}> {}

export const Page: React.FunctionComponent<Props> = props => {
  const listScreen = React.useMemo(() => () => props.navigation.navigate("list"), [
    props.navigation,
  ])
  const formScreen = React.useMemo(() => () => props.navigation.navigate("form"), [
    props.navigation,
  ])

  return (
    <ViewScreen
      {...props}
      footer={
        <SafeAreaView style={styles.container.footerContainer}>
          <View style={styles.container.welcomeFooterContainer}>
            <Button
              style={styles.elements.defaultButton}
              textStyle={styles.text.defaultButton}
              tx="common.gotoList"
              onPress={listScreen}
            />
            <Button
              style={styles.elements.defaultButton}
              textStyle={styles.text.defaultButton}
              tx="common.gotoForm"
              onPress={formScreen}
            />
          </View>
        </SafeAreaView>
      }
    >
      <Text style={styles.text.title} text="MoneyApp v0.01" />
      <Text style={styles.text.content} tx="welcomeScreen.intro" />
      <Image source={atmImage} style={styles.elements.image} />
      <Text style={styles.text.title} preset="header" tx="welcomeScreen.readyForLaunch" />
    </ViewScreen>
  )
}
