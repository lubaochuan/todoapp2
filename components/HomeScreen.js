import React from 'react'
import { Container, Header, Content } from 'native-base'

import { connect } from 'react-redux'
import { addTodo, toggleTodo, updateTodo } from '../src/actions'

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
    const {list, onAddTodo, onToggleTodo} = this.props

    return (
      <Container>
        <Content>
          <TodoInput
            onAddTodo={onAddTodo}/>
          <TodoList
            list={list}
            onToggleTodo={onToggleTodo}
            onEditTodo={this.onEditTodo}
            onDeleteTodo={this.onDeleteTodo}
          />
        </Content>
      </Container>
    )
  }
}

const mapStateToProps = state => {
  return {
    list: state.todos
  }
}

const mapDispatchToProps = dispatch => {
  return {
    onAddTodo: text => dispatch(addTodo(text)),
    onToggleTodo: index => dispatch(toggleTodo(index))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(HomeScreen)
