import { USER_COMMENTS_ACTION_TYPES } from "./constants"


const initialState = {
  comments: [],
  allComments: []
}

const commentsReducer = (state = initialState, action) => {
  switch (action.type) {
    case USER_COMMENTS_ACTION_TYPES.FETCH_ITEM_COMMENTS:
      return {
        ...state,
        comments: action.payload
      }
    case USER_COMMENTS_ACTION_TYPES.FETCH_COMMENTS:
      return {
        ...state,
        allComments: action.payload
      }
    default:
      return state
  }
}

export default commentsReducer