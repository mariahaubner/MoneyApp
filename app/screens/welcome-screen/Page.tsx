import * as React from "react"
import { View, SafeAreaView, Image } from "react-native"
import { NavigationInjectedProps } from "react-navigation"
import { Button, Header, Screen, Text, Wallpaper } from "../../components"
import { color } from "../../theme"
import { styles } from "../styles"
const atmImage = require("./atm.png")

export interface WelcomeScreenProps extends NavigationInjectedProps<{}> {}

export const Page: React.FunctionComponent<WelcomeScreenProps> = props => {
  const listScreen = React.useMemo(() => () => props.navigation.navigate("list"), [
    props.navigation,
  ])
  const formScreen = React.useMemo(() => () => props.navigation.navigate("form"), [
    props.navigation,
  ])

  return (
    <View style={styles.container.full}>
      <Wallpaper />
      <Screen style={styles.container.screen} preset="scroll" backgroundColor={color.transparent}>
        <Header
          headerTx="welcomeScreen.poweredBy"
          style={styles.container.header}
          titleStyle={styles.text.header}
        />
        <Text style={styles.text.title} text="MoneyApp v0.01" />
        <Text style={styles.text.content} tx="welcomeScreen.intro" />
        <Image source={atmImage} style={styles.elements.image} />
        <Text style={styles.text.title} preset="header" tx="welcomeScreen.readyForLaunch" />
      </Screen>
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
    </View>
  )
}
