import React from 'react'
import { Container, Header, Content } from 'native-base'

import { connect } from 'react-redux'
import { addTodo, toggleTodo, updateTodo, deleteTodo } from '../src/actions'

import TodoList from './TodoList'
import TodoInput from "./TodoInput"

class HomeScreen extends React.Component {
  static navigationOptions = ({ navigation }) => {
    return {
      title: 'Todos',
    }
  }

  onEditTodo = (index, item) => {
    this.props.navigation.navigate("EditScreen", {index, item})
  }

  onDeleteTodo = (index) => {}

  render() {
    const {list, onAddTodo, onToggleTodo, onDeleteTodo} = this.props

    return (
      <Container>
        <Content>
          <TodoInput
            onAddTodo={onAddTodo}/>
          <TodoList
            list={list}
            onToggleTodo={onToggleTodo}
            onEditTodo={this.onEditTodo}
            onDeleteTodo={onDeleteTodo}
          />
        </Content>
      </Container>
    )
  }
}

const transformTodos = (todos) => {
  let array = []
  const keys = Object.keys(todos)
  for (const key of keys) {
    if (key != "hidden"){
      array.push({id:key, text:todos[key].text,
                  completed:todos[key].completed})
    }
  }
  console.log("todos:"+JSON.stringify(array))
  return array
}

const mapStateToProps = state => {
  return {
    list: transformTodos(state.todos)
  }
}

const mapDispatchToProps = dispatch => {
  return {
    onAddTodo: text => dispatch(addTodo(text)),
    onToggleTodo: (index, completed) => dispatch(toggleTodo(index, completed)),
    onDeleteTodo: index => dispatch(deleteTodo(index))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(HomeScreen)
