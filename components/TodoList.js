import React from 'react'
import { Container, Header, Content, List, ListItem, Text } from 'native-base'
import TodoInput from "./TodoInput"

export default class TodoList extends React.Component {
  render() {
    list = [{todo: "Eat"}, {todo: "Drink"}, {todo: "Be merry"}]

    return (
      <Container>
        <Header />
        <Content>
          <TodoInput />
          <List
            dataArray={list}
            renderRow={item=>
              <ListItem>
                <Text>{item.todo}</Text>
              </ListItem>
            }>
          </List>
        </Content>
      </Container>
    )
  }
}
