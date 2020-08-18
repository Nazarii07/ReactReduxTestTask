import { combineReducers } from 'redux'
import newsReducer from '../components/news/reducer'
import newsDetailsReducer from '../components/newsDetails/reducer'
import usersReducer from '../components/users/reducer'
import commentsReducer from '../components/comments/reducer'
 

const rootReducer = combineReducers({
  newsReducer,
  newsDetailsReducer,
  usersReducer,
  commentsReducer
})

export default rootReducer