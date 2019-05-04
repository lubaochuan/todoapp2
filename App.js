import React from 'react'
import { Container, Header, Content } from 'native-base'
import { createStackNavigator, createAppContainer } from "react-navigation"
import { createStore, applyMiddleware } from 'redux'
import { Provider } from 'react-redux'

import todoApp from './src/reducers'
import HomeScreen from './components/HomeScreen'
import EditScreen from "./components/EditScreen"

// for testing only
import {
  addTodo,
  toggleTodo,
  setVisibilityFilter,
  VisibilityFilters
} from './src/actions'

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
  applyMiddleware(logger)
)

// Dispatch some actions
store.dispatch(addTodo('Learn about actions'))
store.dispatch(addTodo('Learn about reducers'))
store.dispatch(addTodo('Learn about store'))
store.dispatch(toggleTodo(0))
store.dispatch(toggleTodo(1))

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
    return (
      <Provider store={store}>
        <AppContainer />
      </Provider>
    )
  }
}
