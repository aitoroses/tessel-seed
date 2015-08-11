import atom from 'appstate';

// AnimalStore :: AnimalStoreAPI
class AnimalStore {

  state = {
    list: [],
    lastAdded: ""
  }

  constructor() {
    // Data assignation namespace for the API
    this.bindState('animals')
  }

  // getList :: [String]
  getList() {
    return this.state.list || []
  }

  // getLastAdded :: String
  getLastAdded() {
    return this.state.lastAdded
  }
}

// store :: TesselStore
var store = atom.createStore(AnimalStore)

export default store;
