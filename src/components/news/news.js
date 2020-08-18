import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { fetchArticle, removeArticles, updateFields } from './actions'
import { Link, useHistory } from 'react-router-dom'
import {fetchComments} from '../comments/actions'
import './style.css'

const HomeBlog = ({ isAdmin = false }) => {
  const history = useHistory()

  const dispach = useDispatch()
  const articles = useSelector((state) => {
    return state.newsReducer.articles
  })
  const comments = useSelector((state) =>{
    return state.commentsReducer.allComments
  })
  useEffect(() => {
    !isAdmin ? dispach(fetchArticle()) : dispach(fetchComments())
  }, [])
  useEffect(() =>{
    comments.length && dispach(fetchArticle(comments))
  },[comments])
  if (!articles.length) {
    return (
      <div>
        <div className="spinner-border text-success" >
          <span className="sr-only">Loading...</span>
        </div>
      </div>
    )
  }


  const handleRemove = (id) =>{
    dispach(removeArticles(articles, id))
  }
  const handleEdit = (id) =>{
    history.push(`/edit/${id}`)
  }
  const handleOnClick = (id) =>{
    dispach(updateFields(articles, id))
  }
  

  return articles.map((item) => {
    return (
      <div className="card mt-2" key={item.id}>
        <div className="card-body">
          {isAdmin &&
            <div>
              <button className="btn btn-info mr-3 mb-3" onClick={() => handleEdit(item.id)}>Edit</button>
              <button className="btn btn-danger mb-3" onClick={() => handleRemove(item.id)}>Remove</button>
            </div>}
          <Link to={`/${item.id}`} className="card-title text-uppercase text-decoration-none text-info" onClick={()=>handleOnClick(item.id)}>{item.title}</Link>
          <p className="card-text">{item.body}</p>
        </div>
      </div>
    )
  })
}

export default HomeBlog