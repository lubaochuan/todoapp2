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
      //console.log("toggle todo with index:"+action.index)
      return state.map((todo, index) => {
        if (index === action.index) {
          return Object.assign({}, todo, {
            completed: !todo.completed
          })
        }
        return todo
      })
    case UPDATE_TODO:
      //console.log("update todo:"+JSON.stringify(action.todo)
      //  + " with index:"+action.index)
      return state.map((todo, index) => {
        if (index === action.index) {
          return Object.assign({}, todo, action.todo)
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

