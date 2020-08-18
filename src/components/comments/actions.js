import {USER_COMMENTS_ACTION_TYPES} from './constants'

export const fetchArticalComments = (id, users) => {

  return async (dispatch) => {
    const fetchArticalComments = await fetch(`https://jsonplaceholder.typicode.com/comments?postId=${id}`)
    const jsonComments = await fetchArticalComments.json()
    const commentsWithUser = jsonComments.reduce((acc, item)=>{
      const userItem = users.find(({id})=> id === item.id)
      item.userName = userItem && userItem.username
      acc.push(item)
      return acc
    },[])
    
    
    dispatch({  
      type: USER_COMMENTS_ACTION_TYPES.FETCH_ITEM_COMMENTS,
      payload: commentsWithUser
    })
  }
}


export const fetchComments = () =>{

  return async (dispatch) => {

    const comments = await fetch(`https://jsonplaceholder.typicode.com/comments`)
    const jsonComments = await comments.json()


    dispatch({
      type:USER_COMMENTS_ACTION_TYPES.FETCH_COMMENTS,
      payload: jsonComments
    })
  }
}
