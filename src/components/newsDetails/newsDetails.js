import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { fetchArticleItem } from './actions'
import { fetchUsers } from 'components/users/actions'
import Comments from 'components/comments/comments'
import './style.css'

const ArticlePage = ({ match: { params: id } }) => {
  const dispath = useDispatch()

  const articleItem = useSelector((state) => {
    return state.newsDetailsReducer.newsItem
  })
  const articles = useSelector((state) => {
    return state.newsReducer.articles
  })

  useEffect(() => {
    dispath(fetchArticleItem(id.id))
    dispath(fetchUsers(id.id))
  }, [])

  if (!articleItem) {
    return (
      <div className="spinner-border text-danger" >
        <span className="sr-only">Loading...</span>
      </div>
    )
  }
  return (
    <div>
      <h1 className='news-title'>{articleItem.title}</h1>
      <h4 className='news-body font-italic'>{articleItem.body}</h4>
      <div>
        <h5 className="">Comments...</h5>
        <Comments id={id.id} />
      </div>
    </div>
  )
}

export default ArticlePage