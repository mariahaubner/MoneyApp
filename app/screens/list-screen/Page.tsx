import * as React from "react"
import { View, SafeAreaView } from "react-native"
import { NavigationInjectedProps } from "react-navigation"
import { Button, BulletItem, ViewScreen } from "../../components"
import { styles } from "../styles"
import { useStores } from "../../models/root-store"

export interface Props extends NavigationInjectedProps<{}> {}

export const Page: React.FunctionComponent<Props> = props => {
  const entryStore = useStores().entryStore
  const formScreen = React.useMemo(() => () => props.navigation.navigate("form"), [
    props.navigation,
  ])

  return (
    <ViewScreen
      {...props}
      back
      title="listScreen.title"
      footer={
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
      }
    >
      {entryStore.map((entry, idx) => (
        <BulletItem key={idx} text={entry.article} />
      ))}
    </ViewScreen>
  )
}
