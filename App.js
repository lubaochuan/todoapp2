import React from 'react'
import { Container, Header, Content } from 'native-base'
import { createStackNavigator, createAppContainer } from "react-navigation"
import { createStore, applyMiddleware } from 'redux'
import { Provider } from 'react-redux'
import { persistStore, persistReducer } from 'redux-persist'
import storage from 'redux-persist/lib/storage' // defaults to localStorage for web and AsyncStorage for react-native
import reduxThunk from 'redux-thunk'

import todoApp from './src/reducers'
import { fetchTodos } from './src/actions'
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

const persistConfig = {
  key: 'root',
  storage,
}

const persistedReducer = persistReducer(persistConfig, todoApp)

const store = createStore(
  persistedReducer,
  applyMiddleware(reduxThunk, logger)
)

/*
// Enable persistence
persistStore(store)

// Dispatch some actions
store.dispatch(addTodo('Learn about actions'))
store.dispatch(addTodo('Learn about reducers'))
store.dispatch(addTodo('Learn about store'))
store.dispatch(toggleTodo(0))
store.dispatch(toggleTodo(1))
*/

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
  componentWillMount() {
    store.dispatch(fetchTodos())
  }

  render() {
    return (
      <Provider store={store}>
        <AppContainer />
      </Provider>
    )
  }
}
