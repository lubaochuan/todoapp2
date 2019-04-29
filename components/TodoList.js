import React from 'react'
import { Alert } from 'react-native'
import { List, ListItem, Text } from 'native-base'
import { connect } from 'react-redux'
import { deleteTodo } from '../src/actions'

function TodoList(props){
  const { list, onDeleteTodo } = props

  return (
    <List
      dataArray={list}
      renderRow={(item, _, index)=>
        <ListItem
          onLongPress={() =>
            Alert.alert(
              'Quick Menu',
              null,
              [
                {text: 'Edit', onPress: () => console.log("to edit")},
                {text: 'Delete', onPress: () => onDeleteTodo(item.id)},
                {text: 'Cancel'},
              ],
              { cancelable: false }
            )}>
          <Text>
            style={{textDecorationLine: item.completed ? 'line-through' : 'none'}}>
            {item.text}
          </Text>
        </ListItem>
      }>
    </List>
  )
}

const getTodosArray = (todos) => {
  let array = []
  const keys = Object.keys(todos)
  for (const key of keys) {
    array.push({id:key, text:todos[key].text,
                completed:todos[key].completed})
  }
  return array
}

const mapStateToProps = state => {
  return {
    list: getTodosArray(state.todos)
  }
}

const mapDispatchToProps = dispatch => {
  return {
    onDeleteTodo: (id) => {
      dispatch(deleteTodo(id))
    }
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(TodoList)

