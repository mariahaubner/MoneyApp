import * as React from "react"
import { View, SafeAreaView } from "react-native"
import { NavigationInjectedProps } from "react-navigation"
import { Button, Header, Screen, Text, Wallpaper } from "../../components"
import { color } from "../../theme"
import { styles } from "../styles"
import { TextInput } from "react-native-gesture-handler"
import { useStores } from "../../models/root-store"

export interface Props extends NavigationInjectedProps<{}> {}

const DELIMITER = " "

export const Page: React.FunctionComponent<Props> = props => {
  const rootStore = useStores()

  const goBack = React.useMemo(() => () => props.navigation.goBack(null), [props.navigation])
  const listScreen = React.useMemo(() => () => props.navigation.navigate("list"), [
    props.navigation,
  ])

  const inistalEntry = {
    article: "",
    count: 0,
    shop: "",
    categories: [""],
  }
  const [entry, setEntry] = React.useState(inistalEntry)

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
        <Text style={styles.text.title} tx="formScreen.title" />
        <View>
          <TextInput
            style={styles.elements.input}
            placeholder="formScreen.article"
            onChangeText={article => setEntry({ ...entry, article })}
            value={entry.article}
          />
          <TextInput
            style={styles.elements.input}
            placeholder="formScreen.count"
            keyboardType="number-pad"
            onChangeText={value => setEntry({ ...entry, count: parseInt(value) })}
            value={entry.count.toString()}
          />
          <TextInput
            style={styles.elements.input}
            placeholder="formScreen.shop"
            onChangeText={shop => setEntry({ ...entry, shop })}
            value={entry.shop}
          />
          <TextInput
            style={styles.elements.input}
            placeholder="formScreen.categories"
            onChangeText={value => {
              setEntry({ ...entry, categories: value.split(DELIMITER) })
            }}
          >
            {entry.categories.join(DELIMITER)}
          </TextInput>
        </View>
      </Screen>
      <SafeAreaView style={styles.container.footerContainer}>
        <View style={styles.container.footer}>
          <Button
            style={styles.elements.defaultButton}
            textStyle={styles.text.defaultButton}
            tx="common.ok"
            onPress={() => {
              rootStore.addEntry(entry)
              listScreen()
            }}
          />
        </View>
      </SafeAreaView>
    </View>
  )
}
