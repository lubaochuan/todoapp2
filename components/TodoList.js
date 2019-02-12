import React from 'react'
import { List, ListItem, Text } from 'native-base'

export default function TodoList(props){
  const { list, onDeleteTodo } = props
  return (
    <List
      dataArray={list}
      renderRow={(item, _, index)=>
        <ListItem onPress={()=>onDeleteTodo(index)}>
          <Text>{item.todo}</Text>
        </ListItem>
      }>
    </List>
  )
}
