import * as React from "react"
import { View, SafeAreaView } from "react-native"
import { NavigationInjectedProps } from "react-navigation"
import { Button, TextField, ViewScreen, DatePicker } from "../../components"
import { styles } from "../styles"
import { useStores } from "../../models/root-store"

export interface Props extends NavigationInjectedProps<{}> {}

const DELIMITER = " "
export const Page: React.FunctionComponent<Props> = props => {
  const rootStore = useStores()
  const listScreen = React.useMemo(() => () => props.navigation.navigate("list"), [
    props.navigation,
  ])

  const initalEntry = {
    article: "",
    count: 0,
    shop: "",
    categories: [""],
    date: new Date(),
  }
  const [entry, setEntry] = React.useState(initalEntry)

  return (
    <ViewScreen
      {...props}
      back
      title="formScreen.title"
      footer={
        <SafeAreaView style={styles.container.footerContainer}>
          <View style={styles.container.footer}>
            <Button
              style={styles.elements.defaultButton}
              textStyle={styles.text.defaultButton}
              tx="common.ok"
              onPress={() => {
                rootStore.addEntry(entry)
                setEntry(initalEntry)
                listScreen()
              }}
            />
          </View>
        </SafeAreaView>
      }
    >
      <View>
        <View style={styles.container.row}>
          <TextField
            labelTx="formScreen.article"
            placeholderTx="formScreen.articlePlaceholder"
            style={styles.elements.input5}
            onChangeText={article => setEntry({ ...entry, article })}
            value={entry.article}
          />
          <TextField
            labelTx="formScreen.count"
            placeholderTx="formScreen.countPlaceholder"
            keyboardType="number-pad"
            style={styles.elements.input1}
            onChangeText={value => setEntry({ ...entry, count: parseInt(value) })}
            value={entry.count.toString()}
          />
        </View>
        <View>
          <TextField
            labelTx="formScreen.shop"
            placeholderTx="formScreen.shopPlaceholder"
            onChangeText={shop => setEntry({ ...entry, shop })}
            value={entry.shop}
          />
        </View>
        <View>
          <TextField
            labelTx="formScreen.categories"
            placeholderTx="formScreen.categoriesPlaceholder"
            onChangeText={value => {
              setEntry({ ...entry, categories: value.split(DELIMITER) })
            }}
          >
            {entry.categories.join(DELIMITER)}
          </TextField>
        </View>

        <DatePicker value={entry.date} onChange={date => setEntry({ ...entry, date })} />
      </View>
    </ViewScreen>
  )
}
