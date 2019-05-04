import React from 'react'
import { Alert } from 'react-native'
import { List, ListItem, Text } from 'native-base'

export default function TodoList(props){
  const { list, onToggleTodo, onEditTodo } = props
  
  return (
    <List
      dataArray={list}
      renderRow={(item, _, index)=>
        <ListItem
          onPress={()=>{onToggleTodo(Number(index))}}
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
            <Text
              style={{textDecorationLine: item.completed ? 'line-through':'none'}}>
              {item.text}
            </Text>
        </ListItem>
      }>
    </List>
  )
}
