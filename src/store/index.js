import React from 'react'
import LoginStore from './login.store'

class RootStore {
  constructor() {
    this.loginStore = new LoginStore()
  }
}
const store = new RootStore()
const StoreContext = React.createContext(store)
export const useStore = () => React.useContext(StoreContext)
