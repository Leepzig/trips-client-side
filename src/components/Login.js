import React, {useState} from 'react'
import { useHistory } from 'react-router-dom'
import { baseUrl } from './globals'


const Login = ( { changeUser }) => {
  const [userLogin, setUserLogin] = useState("")
  const [error, setError] = useState(null)

  let history = useHistory()
  
  const handleSubmit = (e) => {
    e.preventDefault()
    findCurrentUser(userLogin)
    // history.push("/")
  }

    //Current USer Functions
    async function findCurrentUser(username) {
      const response = await fetch(`${baseUrl}/users/${username}`)
      if (response.status === 401) {
        setError("That user doesn't exist, try again or sign up for an account!")
      } else {
        const user = await response.json()
        changeUser(user)
        history.push(`/users/${user.id}/trips`)
      }
    }

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <h3 style={{color:"red"}}>{error}</h3>
        <label htmlFor="login" value="Username">Username:</label><br/>
        <input type="text" name="login" value={userLogin} onChange={(e) => setUserLogin(e.target.value)} autoFocus={true}/>
        <input type="submit" value="Login"/>
      </form>
    </div>
  )
}

export default Login
