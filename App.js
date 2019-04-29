import React from 'react'
import { Container, Header, Content } from 'native-base'
import { createStackNavigator, createAppContainer } from "react-navigation"
import { createStore, applyMiddleware } from 'redux'
import { Provider } from 'react-redux'
import reduxThunk from 'redux-thunk'

import todoApp from './src/reducers'
import HomeScreen from './components/HomeScreen'
import EditScreen from "./components/EditScreen"

const logger = store => next => action => {
  console.group(action.type)
  console.info('dispatching', action)
  let result = next(action)
  console.log('next state', store.getState())
  console.groupEnd()
  return result
}

const store = createStore(
  todoApp,
  applyMiddleware(reduxThunk, logger)
)

const MainStack = createStackNavigator({
  Home: {
    screen: HomeScreen
  },
  EditScreen: {
    screen: EditScreen
  }
},
{
  initialRouteName: "Home"
})

const AppContainer = createAppContainer(MainStack)

export default class App extends React.Component {
  render() {
    <Provider store={store}>
      <AppContainer />
    </Provider>
  }
}
