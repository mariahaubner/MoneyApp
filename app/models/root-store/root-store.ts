import { Instance, SnapshotOut, types } from "mobx-state-tree"
import { NavigationStoreModel } from "../../navigation/navigation-store"

export const EntryModel = types
  .model({
    article: types.string,
    count: types.number,
    shop: types.optional(types.string, ""),
    categories: types.optional(types.array(types.string), []),
  })
  .actions(self => ({
    editEntry(entry) {
      self.article = entry.article
      self.categories = entry.categories
      self.count = entry.count
      self.shop = entry.shop
    },
  }))

/**
 * A RootStore model.
 */
export const RootStoreModel = types
  .model("RootStore")
  .props({
    navigationStore: types.optional(NavigationStoreModel, {}),
    entryStore: types.array(EntryModel),
    currentEntry: types.maybe(types.reference(EntryModel)),
  })
  .actions(self => ({
    setEntry(entry) {
      self.currentEntry = entry
    },
    addEntry(entry) {
      self.entryStore.push(entry)
    },
    deleteEntry(index) {
      self.entryStore.splice(index, 1)
    },
  }))

/**
 * The RootStore instance.
 */
export interface RootStore extends Instance<typeof RootStoreModel> {}

/**
 * The data of a RootStore.
 */
export interface RootStoreSnapshot extends SnapshotOut<typeof RootStoreModel> {}
