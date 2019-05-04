import React, { Component } from 'react'
import { Input } from 'native-base'

export default class TodoInput extends Component {
  state = { text: ''}

  onChangeText = (text) => this.setState({text})

  onSubmitEditing = () => {
    const {text} = this.state

    if (!text) return // Don't submit if empty

    console.log("submit:"+text)
    this.props.onAddTodo(text)
    this.setState({text: ''})
  }

  render() {
    return (
      <Input placeholder='Add new todo' bordered
        autoCorrect={false}
        value={this.state.text}
        onChangeText={this.onChangeText}
        onSubmitEditing={this.onSubmitEditing}/>
    )
  }
}
