import * as React from "react"
import { View, SafeAreaView } from "react-native"
import { NavigationInjectedProps } from "react-navigation"
import { Button, Header, Screen, Text, Wallpaper } from "../../components"
import { color } from "../../theme"
import { styles } from "../styles"
import { TextInput } from "react-native-gesture-handler"

export interface WelcomeScreenProps extends NavigationInjectedProps<{}> {}

export const Page: React.FunctionComponent<WelcomeScreenProps> = props => {
  const goBack = React.useMemo(() => () => props.navigation.goBack(null), [props.navigation])
  const listScreen = React.useMemo(() => () => props.navigation.navigate("list"), [
    props.navigation,
  ])

  return (
    <View style={styles.container.full}>
      <Wallpaper />
      <Screen style={styles.container.screen} preset="scroll" backgroundColor={color.transparent}>
        <Header
          headerTx="welcomeScreen.poweredBy"
          leftIcon="back"
          onLeftPress={goBack}
          style={styles.container.header}
          titleStyle={styles.text.header}
        />
        <Text style={styles.text.title} text="Neuen Eintrag anlegen" />
        <View>
          <TextInput
            style={styles.elements.input}
            placeholder="Artikel"
            onChangeText={() => undefined}
            value={undefined}
          />
          <TextInput
            style={styles.elements.input}
            placeholder="Anzahl"
            keyboardType="number-pad"
            onChangeText={() => undefined}
            value={undefined}
          />
          <TextInput
            style={styles.elements.input}
            placeholder="Laden"
            onChangeText={() => undefined}
            value={undefined}
          />
          <TextInput
            style={styles.elements.input}
            placeholder="Kategorie(n)"
            onChangeText={() => undefined}
            value={undefined}
          />
        </View>
      </Screen>
      <SafeAreaView style={styles.container.footerContainer}>
        <View style={styles.container.footer}>
          <Button
            style={styles.elements.defaultButton}
            textStyle={styles.text.defaultButton}
            tx="common.ok"
            onPress={() => undefined}
          />
        </View>
      </SafeAreaView>
    </View>
  )
}
