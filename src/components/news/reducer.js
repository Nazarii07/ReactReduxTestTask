import { NEWS_ACTION_TYPES } from "./constans"

const initialState = {
  articles: [],
}

const newsReducer = (state = initialState, action) => {
  switch (action.type) {
    case NEWS_ACTION_TYPES.FETCH_ARTICLES:
      return {
        ...state,
        articles: action.payload
      }
    case NEWS_ACTION_TYPES.UPDATE_ARTICLES:
      return{
        ...state,
        articles: action.payload.articles
      }
    default:
      return state
  }
}

export default newsReducer

