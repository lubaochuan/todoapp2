import {todoAppRef} from './firebase'

/*
 * action types
 */

export const SET_TODOS = 'SET_TODOS'
export const ADD_TODO = 'ADD_TODO'
export const TOGGLE_TODO = 'TOGGLE_TODO'
export const UPDATE_TODO = 'UPDATE_TODO'
export const DELETE_TODO = 'DELETE_TODO'

/*
 * other constants
 */

export const VisibilityFilters = {
  SHOW_ALL: 'SHOW_ALL',
  SHOW_COMPLETED: 'SHOW_COMPLETED',
  SHOW_ACTIVE: 'SHOW_ACTIVE'
}

/*
 * action creators
 */

export const addTodo = (text) => async dispatch => {
  todoAppRef.child("todos").push().set({text, completed: false})
}

export const toggleTodo = (id, completed) => async dispatch => {
  console.log("toggleTodo("+id+","+completed+") dispatched")
  todoAppRef.child("todos").child(id).update({"completed": !completed})
}

export const updateTodo = (id, todo) => async dispatch => {
  console.log("update todo:"+JSON.stringify(todo))
  todoAppRef.child("todos").child(id).update(todo)
}

export const deleteTodo = id => async dispatch => {
  todoAppRef.child("todos").child(id).remove()
}

export function setVisibilityFilter(filter) {
  return { type: SET_VISIBILITY_FILTER, filter }
}

export const fetchTodos = () => async dispatch => {
  console.log("fetchTodos is called")
  todoAppRef.on("value", snapshot => {
    console.log(snapshot.val())
    dispatch({
      type: SET_TODOS,
      payload: snapshot.val()
    })
  }, function(error) {console.log(error)})
}

export function setTodos() {
  return { type: SET_TODOS }
}

