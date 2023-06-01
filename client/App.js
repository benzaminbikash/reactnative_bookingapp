import React from 'react'
import StackNavigator from './src/Route/StackNavigator'
import { ModalPortal } from 'react-native-modals'
import store from './src/redux/store'
import { Provider } from 'react-redux'

const App = () => {
  return (
    <Provider store={store}>
      <StackNavigator />
      <ModalPortal />
    </Provider>
  )
}

export default App
