import React from "react"
import { Text } from "react-native"
import { Container, Content, Card, CardItem, Body, Button, Input } from "native-base"

import { connect } from 'react-redux'
import { updateTodo } from '../src/actions'

class EditScreen extends React.Component {
  state = this.props.navigation.getParam('item')

  static navigationOptions = ({ navigation }) => {
    return {
      title: 'Edit Todo',
    }
  }

  onChangeText = (text) => this.setState({text})

  onSubmitEditing = () => {
    const item = this.state

    if (!item.text) return // Don't submit if empty

    console.log("submit updated todo:"+JSON.stringify(item))
    const index = this.props.navigation.getParam('index')
    this.props.onUpdateTodo(index, item)
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

const mapDispatchToProps = dispatch => {
  return {
    onUpdateTodo: (index, todo) => dispatch(updateTodo(index, todo))
  }
}

export default connect(null, mapDispatchToProps)(EditScreen)
