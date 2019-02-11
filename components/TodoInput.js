import React, { Component } from 'react'
import { Input } from 'native-base'

export default class TodoInput extends Component {
  state = { text: 'add new todo' }

  onSubmitEditing = () => {
    const {text} = this.state

    if (!text) return // Don't submit if empty

    console.log("submit:"+this.state.text)
    this.setState({text: ''})
  }

  render() {
    return (
      <Input placeholder='Add new todo' bordered
        value={this.state.text}
        onChangeText={(text) => this.setState({text})}
        onSubmitEditing={this.onSubmitEditing}/>
    )
  }
}
