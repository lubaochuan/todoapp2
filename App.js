import React from 'react'
import { Container, Header, Content } from 'native-base'

import TodoList from './components/TodoList'
import TodoInput from "./components/TodoInput"

export default class App extends React.Component {
  state = {
    list: [{todo: "Eat"}, {todo: "Drink"}, {todo: "Be merry"}]}

  onAddTodo = (todo) => {
    console.log("add new todo:"+todo.todo)
    const {list} = this.state

    this.setState({
      list: [todo, ...list],
    }, ()=> console.log(this.state))
  }

  onDeleteTodo = (index) => {
    console.log("delete todo at index:"+index)
    const {list} = this.state

    this.setState({
      list: list.filter((todo, i) => i != index),
    },
    ()=> console.log("todo at index "+index+" deleted."))
  }

  render() {
    return (
      <Container>
        <Header />
        <Content>
          <TodoInput
            onAddTodo={this.onAddTodo}/>
          <TodoList
            list={this.state.list}
            onDeleteTodo={this.onDeleteTodo}/>
        </Content>
      </Container>
    )
  }
}
