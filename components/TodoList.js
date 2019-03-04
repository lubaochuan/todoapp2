import React from 'react'
import { Alert } from 'react-native'
import { List, ListItem, Text } from 'native-base'

export default function TodoList(props){
  const { list, onDeleteTodo, onEditTodo } = props
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
                {text: 'Edit', onPress: () => onEditTodo(index, item)},
                {text: 'Delete', onPress: () => onDeleteTodo(index)},
                {text: 'Cancel'},
              ],
              { cancelable: false }
            )}>
          <Text>{item.todo}</Text>
        </ListItem>
      }>
    </List>
  )
}
