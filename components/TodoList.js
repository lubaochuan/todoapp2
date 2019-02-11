import React from 'react'
import { Container, Header, Content, List, ListItem, Text } from 'native-base'

export default class TodoList extends React.Component {
  render() {
    return (
      <Container>
        <Header />
        <Content>
          <List>
            <ListItem>
              <Text>Eat</Text>
            </ListItem>
            <ListItem>
              <Text>Drink</Text>
            </ListItem>
            <ListItem>
              <Text>Be merry</Text>
            </ListItem>
          </List>
        </Content>
      </Container>
    )
  }
}
