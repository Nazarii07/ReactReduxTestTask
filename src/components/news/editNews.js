import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useHistory } from 'react-router-dom';
import { updateArticles, getArticle, updateFields } from './actions';


const EditNews = ({ match: { params: id } }) => {
  const history = useHistory()
  const dispath = useDispatch()
  const [title, setTitle] = useState('')
  const [description, setDescription] = useState('')

  const articles = useSelector((state) => {
    return state.newsReducer.articles
  })
  const articleItem = useSelector((state) => {
    return state.newsDetailsReducer.newsItem
  })

  useEffect(() => {
    id.id && dispath(getArticle(articles, id.id))
  }, [])
  useEffect(() => {
    if (id.id) {
      setTitle(articleItem.title)
      setDescription(articleItem.body)
    }

  }, [articleItem])

  const hadleChangeTitle = (e) => {
    setTitle(e.target.value)
  }
  const hadleChangeDescription = (e) => {
    setDescription(e.target.value)
  }
  const handleSave = () => {
    id ? dispath(updateArticles(articles, title, description, id.id)) : dispath(updateArticles(articles, title, description))
    history.push('/admin')

  }

  return (
    <div className="d-flex flex-column align-items-center w-100">
      <div className='d-flex flex-column align-items-center w-100'>
        <label>Title</label>
        <textarea rows="10" cols="25" className="border border-info rounded w-100 p-2" type="text" value={title} onChange={hadleChangeTitle}></textarea>
      </div>
      <div className='d-flex flex-column align-items-center w-100'>
        <label>Description</label>
        <textarea rows="10" cols="25" className="border border-info rounded w-100 p-2" type="text" value={description} onChange={hadleChangeDescription} ></textarea>
      </div>
      <button className="btn btn-success my-3" onClick={handleSave}>SAVE</button>
    </div>
  )
}

export default EditNews