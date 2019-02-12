import React from 'react'
import { Container, Header, Content } from 'native-base'

import TodoList from './components/TodoList'
import TodoInput from "./components/TodoInput"

export default class App extends React.Component {
  state = {
    list: [{todo: "Eat"}, {todo: "Drink"}, {todo: "Be merry"}]}

  onAddTodo = (todo) => {
    const {list} = this.state

    this.setState({
      list: [todo, ...list],
    })
    console.log(this.state)
  }

  render() {
    return (
      <Container>
        <Header />
        <Content>
          <TodoInput
            onAddTodo={this.onAddTodo}/>
          <TodoList
            list={this.state.list}/>
        </Content>
      </Container>
    )
  }
}
