import { combineReducers } from 'redux'
import {
  ADD_TODO,
  TOGGLE_TODO,
  UPDATE_TODO,
  DELETE_TODO,
  SET_VISIBILITY_FILTER,
  VisibilityFilters
} from './actions'


const initialState = {
  visibilityFilter: VisibilityFilters.SHOW_ALL,
  todos: []
}

function todos(state = [], action) {
  switch (action.type) {
    case ADD_TODO:
      return [
        ...state,
        {
          text: action.text,
          completed: false
        }
      ]
    case TOGGLE_TODO:
      return state.map((todo, index) => {
        if (index === action.index) {
          return Object.assign({}, todo, {
            completed: !todo.completed
          })
        }
        return todo
      })
    case UPDATE_TODO:
      return state.map((todo, index) => {
        if (index === action.index) {
          return Object.assign({}, todo)
        }
        return todo
      })
    case DELETE_TODO:
      return state.filter((todo, index) => index != action.index)
    default:
      return state
  }
}

function todoApp(state = initialState, action) {
  switch (action.type) {
    case SET_VISIBILITY_FILTER:
      return Object.assign({}, state, {
        visibilityFilter: action.filter
      })
    case ADD_TODO:
    case TOGGLE_TODO:
    case UPDATE_TODO:
    case DELETE_TODO:
      return Object.assign({}, state, {
        todos: todos(state.todos, action)
      })
    default:
      return state
  }
}

export default todoApp

