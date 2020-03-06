import * as React from "react"
import { View, SafeAreaView } from "react-native"
import { NavigationInjectedProps } from "react-navigation"
import { Button, Header, Screen, Text, Wallpaper, BulletItem } from "../../components"
import { color } from "../../theme"
import { styles } from "../styles"
import { useStores } from "../../models/root-store"

export interface WelcomeScreenProps extends NavigationInjectedProps<{}> {}

export const Page: React.FunctionComponent<WelcomeScreenProps> = props => {
  const entryStore = useStores().entryStore

  const goBack = React.useMemo(() => () => props.navigation.goBack(null), [props.navigation])
  const formScreen = React.useMemo(() => () => props.navigation.navigate("form"), [
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
        <Text style={styles.text.title} text="Liste" />
        {entryStore.map((entry, idx) => (
          <BulletItem key={idx} text={entry.article} />
        ))}
      </Screen>
      <SafeAreaView style={styles.container.footerContainer}>
        <View style={styles.container.footer}>
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
