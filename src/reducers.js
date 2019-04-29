import { SET_TODOS, VisibilityFilters } from './actions'

const initialState = {
  visibilityFilter: VisibilityFilters.SHOW_ALL,
  todos: {}
}

function todoApp(state = initialState, action) {
  switch (action.type) {
    case SET_TODOS:
      return action.payload
    default:
      return state
  }
}

export default todoApp