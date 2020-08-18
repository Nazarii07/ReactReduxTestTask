import { NEWS_DETAILS_ACTION_TYPES } from "./constants"

export const fetchArticleItem = (id) => {

  return async (dispatch) => {
    const fetchArticleItem = await fetch(`https://jsonplaceholder.typicode.com/posts/${id}`)

    const json = await fetchArticleItem.json()

    dispatch({
      type: NEWS_DETAILS_ACTION_TYPES.FETCH_ITEM,
      payload: json
    })
  }
}