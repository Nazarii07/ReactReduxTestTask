import { NEWS_DETAILS_ACTION_TYPES } from "./constants"

const initialState = {
  newsItem: []
}

const newsDetailsReducer = (state = initialState, action) => {
  switch (action.type) {
    case NEWS_DETAILS_ACTION_TYPES.FETCH_ITEM:
      return {
        ...state,
        newsItem: action.payload
      }
    default:
      return state
  }
}

export default newsDetailsReducer