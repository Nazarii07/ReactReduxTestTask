import { NEWS_ACTION_TYPES } from "./constans"
import { NEWS_DETAILS_ACTION_TYPES } from "components/newsDetails/constants"

export const fetchArticle = (comments = []) => {

  return async (dispatch) => {

    const storage = localStorage.getItem('articles')
    let json = storage && JSON.parse(storage)

    if(!storage){
     const fetchArticle = await fetch('https://jsonplaceholder.typicode.com/posts?_limit=10')
     json = await fetchArticle.json()
     json = json.reduce((acc, item) => {
       item.popularCount = 0
       item.createdAt = new Date()
       item.commentsCount = comments.filter((comment) => comment.postId === item.id ).length
       acc.push(item)
       return acc
     },[])
    //  debugger
    localStorage.setItem('articles', JSON.stringify(json))
    }

    dispatch({
      type: NEWS_ACTION_TYPES.FETCH_ARTICLES,
      payload: json
    })
  }
}

export const removeArticles = (articles, id) =>{
  const updatedArticles = articles.reduce((acc, item) =>{
    if(item.id !== id){
      acc.push(item)
    }
    return acc
  },[])
  localStorage.setItem('articles', JSON.stringify(updatedArticles))
  return{
    type: NEWS_ACTION_TYPES.UPDATE_ARTICLES,
    payload: {
      articles: updatedArticles
    }
  }
}

export const updateArticles = (articles, title, description, id) =>{
  let updateNews
  if(id){
    updateNews = articles.reduce((acc, item) =>{
      if(item.id === Number(id)){
        item.title = title
        item.body = description
      }
      acc.push(item)
      return acc
    },[])
  }else{
    updateNews = [...articles]
    updateNews.unshift({
      userId: 1,
      title,
      body: description,
      id: articles.length + 1,
      commentsCount: 0,
      popularCount: 0,
      createdAt: new Date()
    })
  }
  
  localStorage.setItem('articles', JSON.stringify(updateNews))
  return{
    type: NEWS_ACTION_TYPES.UPDATE_ARTICLES,
    payload: {
      articles: updateNews
    }
  }
}
export const getArticle = (articles, id) =>{

  const article = articles.find((item) => item.id === Number(id))

  return{
    type: NEWS_DETAILS_ACTION_TYPES.FETCH_ITEM,
    payload: article
  }
}
export const sortArticle = (sortField, articles) =>{

  const sortedArticles = articles.sort((a,b) => {
    if(b[sortField] < a[sortField]) return -1
  })
  localStorage.setItem('articles', JSON.stringify(sortedArticles))
  return{
    type: NEWS_ACTION_TYPES.UPDATE_ARTICLES,
    payload: {
      articles: [...sortedArticles]
    }
  }
}

export const updateFields = (articles, id) =>{

  const updateNews = articles.reduce((acc, item)=>{
    if(item.id === Number(id)){
      item.popularCount += 1
    }
    acc.push(item)
    return acc
  },[])
  localStorage.setItem('articles', JSON.stringify(updateNews))
  return{
    type: NEWS_ACTION_TYPES.UPDATE_ARTICLES,
    payload: {
      articles: updateNews
    }
  }
}
