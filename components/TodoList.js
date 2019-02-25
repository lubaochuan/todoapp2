import React from 'react'
import { Alert } from 'react-native'
import { List, ListItem, Text } from 'native-base'

export default function TodoList(props){
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
