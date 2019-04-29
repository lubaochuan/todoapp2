import React from 'react'
import { Container, Header, Content } from 'native-base'
import { connect } from 'react-redux'

import TodoList from './TodoList'
import TodoInput from "./TodoInput"
import fetchTodos from '../src/actions'

class HomeScreen extends React.Component {
  componentWillMount() {
    this.props.fetchTodos()
  }

  onAddTodo = (todo) => {
    /*
    console.log("add new todo:"+todo.todo)
    const {list} = this.state

    this.setState({
      list: [todo, ...list],
    }, ()=> console.log(this.state)) */
  }

  onDeleteTodo = (index) => {
    /*
    console.log("delete todo at index:"+index)
    const {list} = this.state

    this.setState({
      list: list.filter((todo, i) => i != index),
    },
    ()=> console.log("todo at index "+index+" deleted.")) */
  }

  onUpdateTodo = (index, item) => {
    console.log("update todo at index:"+index)
  }

  render() {
    return (
      <Container>
        <Header />
        <Content>
          <TodoInput
            onAddTodo={this.onAddTodo}/>
          <TodoList
            list={this.props.list}
            onDeleteTodo={this.onDeleteTodo}
            onUpdateTodo={this.onUpdateTodo}/>
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
    fetchTodos: () => {
      dispatch(fetchTodos())
    }
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(HomeScreen)

