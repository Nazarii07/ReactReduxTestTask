import React from 'react'
import News from './../news'
import { useHistory } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { sortArticle } from 'components/news/actions'



const Admin = () => {
  const dispach = useDispatch()
  const articles = useSelector((state) => {
    return state.newsReducer.articles
  })

  const history = useHistory()

  const handleAdd = () => {
    history.push(`/add`)
  }
  const handleSort = (sortField) => {
    dispach(sortArticle(sortField, articles))
  }

  return (
    <div className="py-2">
      <div className="d-flex flex-row justify-content-between">
        <div className="d-flex flex-row justify-content-between align-items-center w-50 flex-wrap">
          <div className="d-flex justify-content-between align-items-center">
            <label className="w-70 mb-0" for="createdAt">Created at</label>
            <input className="ml-3" type='radio' name='sort' id="createdAt" onChange={() => handleSort('createdAt')} />
          </div>
          <div className="d-flex justify-content-between align-items-center">
            <label className="w-70 mb-0" for="popularCount">Most populare</label>
            <input className="ml-3" type='radio' name='sort' id="popularCount" onChange={() => handleSort('popularCount')} />
          </div>
          <div className="d-flex justify-content-between align-items-center">
            <label className="w-70 mb-0" for="commentsCount">Comments</label>
            <input className="ml-3" type='radio' name='sort' id="commentsCount"onChange={() => handleSort('commentsCount')} />
          </div>
        </div>
        <button onClick={handleAdd} className='btn btn-warning'>Add news</button>
      </div>
      <News isAdmin />
    </div>
  )
}


export default Admin