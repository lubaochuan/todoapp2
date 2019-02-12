import React from 'react'
import { List, ListItem, Text } from 'native-base'

export default function TodoList(props){
  return (
    <List
      dataArray={props.list}
      renderRow={item=>
        <ListItem>
          <Text>{item.todo}</Text>
        </ListItem>
      }>
    </List>
  )
}
