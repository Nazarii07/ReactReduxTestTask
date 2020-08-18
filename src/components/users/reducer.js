import { USERS } from "./constans"


const initialState = {
  users: []
}

const usersReducer = (state = initialState, action) => {
  switch (action.type) {
    case USERS.FETCH_USERS:
      return {
        ...state,
        users: action.payload
      }
    default:
      return state
  }
}

export default usersReducer