import React from "react"
import { Text } from "react-native"
import { Container, Content, Card, CardItem, Body, Button } from "native-base"

export default class EditScreen extends React.Component {
  static navigationOptions = ({ navigation }) => {
    return {
      title: 'Edit Todo',
    }
  }

  state = { text: ''}

  onChangeText = (text) => this.setState({text})

  onSubmitEditing = () => {
    const {text} = this.state

    if (!text) return // Don't submit if empty

    console.log("submit:"+text)
    const index = navigation.getParam('index');
    const onUpdateTodo = this.props.navigation.getParams('onUpdateTodo')
    onUpdateTodo({index, item: {todo: text}})
    this.setState({text: ''})
  }

  render() {
    const { navigation } = this.props;
    const index = navigation.getParam('index');
    const item = navigation.getParam('item');

    return (
      <Container>
        <Content padder>
        <Input bordered autoCorrect={false}
          value={this.state.text}
          onChangeText={this.onChangeText}
          onSubmitEditing={this.onSubmitEditing}/>
        <Button  full
           style={{ marginTop: 10 }}
           onPress={() => this.onSubmitEditing}>
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
