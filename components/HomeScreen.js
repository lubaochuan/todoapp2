import React from 'react'
import { Container, Header, Content } from 'native-base'

import TodoList from './TodoList'
import TodoInput from "./TodoInput"

export default class HomeScreen extends React.Component {
  static navigationOptions = ({ navigation }) => {
    return {
      title: 'Todos',
    }
  }

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

  onEditTodo = (index, item) => {
    this.props.navigation.navigate("EditScreen",
      {index, item, onUpdateTodo: this.onUpdateTodo})
  }

  onUpdateTodo = (index, newItem) => {
    console.log("update todo at index:"+index+" to "+newItem.todo)
    this.setState(state => {
      const list = state.list.map((item, i) => {
        if (i == index) {
          return newItem
        } else {
          return item
        }
      })
      return {list}
  })}

  render() {
    return (
      <Container>
        <Content>
          <TodoInput
            onAddTodo={this.onAddTodo}/>
          <TodoList
            list={this.state.list}
            onDeleteTodo={this.onDeleteTodo}
            onEditTodo={this.onEditTodo}/>
        </Content>
      </Container>
    )
  }
}
