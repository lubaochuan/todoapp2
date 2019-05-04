import React from 'react'
import { Container, Header, Content } from 'native-base'

import { connect } from 'react-redux'
import { addTodo } from '../sr/actions'

import TodoList from './TodoList'
import TodoInput from "./TodoInput"

class HomeScreen extends React.Component {
  static navigationOptions = ({ navigation }) => {
    return {
      title: 'Todos',
    }
  }

  onEditTodo = (index, item) => {
    this.props.navigation.navigate("EditScreen",
      {index, item, onUpdateTodo: this.onUpdateTodo})
  }

  onUpdateTodo = (index, newItem) => {}

  onDeleteTodo = (index) => {}

  render() {
    const {list, onAddTodo} = this.props

    return (
      <Container>
        <Content>
          <TodoInput
            onAddTodo={onAddTodo}/>
          <TodoList
            list={list}
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
    onAddTodo: text => dispatch(addTodo(text))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(HomeScreen)
