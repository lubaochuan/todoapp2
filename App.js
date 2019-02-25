import React from 'react'
import { Container, Header, Content } from 'native-base'
import { createStackNavigator, createAppContainer } from "react-navigation"

import HomeScreen from './components/HomeScreen'
import EditScreen from "./components/EditScreen"

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
    return <AppContainer />
  }
}
