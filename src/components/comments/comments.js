import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { fetchArticalComments } from './actions'
import './style.css'


const Comments = ({id}) => {

  const dispath = useDispatch()
  const comments = useSelector((state) =>{
    return state.commentsReducer.comments
  })
  const users = useSelector((state) =>{
    return state.usersReducer.users
  })


  useEffect(() =>{
    users.length && dispath(fetchArticalComments(id, users))
  },[users])
  console.log(comments, 'asdasdas')
  return (
    <div>
      {comments.map((item) => {
        return (
          <div key={item.id} className="border border-info rounded mb-3 p-2">
            <p className="font-weight-bolder">{item.userName ? item.userName: '...'}</p>
            <p className="comments-body">{item.body}</p>
          </div>
        )
      })}
    </div>
  )
}


export default Comments