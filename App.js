import React from 'react'
import { Container, Header, Content } from 'native-base'

import TodoList from './components/TodoList'
import TodoInput from "./components/TodoInput"

export default class App extends React.Component {
  state = {
    list: [{todo: "Eat"}, {todo: "Drink"}, {todo: "Be merry"}]}

  render() {
    return (
      <Container>
        <Header />
        <Content>
          <TodoInput />
          <TodoList list={this.state.list}/>
        </Content>
      </Container>
    )
  }
}
