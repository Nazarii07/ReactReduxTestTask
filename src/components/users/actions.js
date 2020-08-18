import { USERS } from "./constans"

export const fetchUsers = (id) => {

  return async (dispatch) => {
    const fetchUsers = await fetch('https://jsonplaceholder.typicode.com/users')
    const jsonUsers = await fetchUsers.json()


    dispatch({
      type: USERS.FETCH_USERS,
      payload: jsonUsers
    })
  }
}