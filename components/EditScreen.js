import React from "react"
import { Text } from "react-native"
import { Container, Content, Card, CardItem, Body, Button, Input } from "native-base"

export default class EditScreen extends React.Component {
  state = { text: this.props.navigation.getParam('item').todo }

  static navigationOptions = ({ navigation }) => {
    return {
      title: 'Edit Todo',
    }
  }

  onChangeText = (text) => this.setState({text})

  onSubmitEditing = () => {
    const {text} = this.state

    if (!text) return // Don't submit if empty

    console.log("submit updated todo:"+text)
    const index = this.props.navigation.getParam('index');
    const onUpdateTodo = this.props.navigation.getParam('onUpdateTodo')
    onUpdateTodo(index, {todo: text})

    this.setState({text: ''})
    this.props.navigation.goBack()
  }

  render() {
    const { navigation } = this.props
    const index = navigation.getParam('index')
    console.log("edit item at index:"+index)

    return (
      <Container>
        <Content padder>
        <Input bordered autoCorrect={false}
          value={this.state.text}
          onChangeText={this.onChangeText}
          onSubmitEditing={this.onSubmitEditing}/>
        <Button  full
           style={{ marginTop: 10 }}
           onPress={this.onSubmitEditing}>
           <Text>Save</Text>
         </Button>
         <Button  full
           style={{ marginTop: 10 }}
           onPress={() => this.props.navigation.goBack()}>
           <Text>Cancel</Text>
         </Button>
        </Content>
      </Container>
    )
  }
}
