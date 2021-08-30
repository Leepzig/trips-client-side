import React, {useState} from 'react'
import { useHistory } from 'react-router-dom'


const Login = ( { changeUser }) => {
  const [userLogin, setUserLogin] = useState("")

  let history = useHistory()
  
  const handleSubmit = (e) => {
    e.preventDefault()
    findCurrentUser(userLogin)
    // history.push("/")
  }

    //Current USer Functions
    function findCurrentUser(username) {
      fetch(`http://localhost:9393/users/${username}`)
      .then(response => response.json())
      .then( user => {
        changeUser(user)
        history.push(`/users/${user.id}/trips`)
      })
    }
    
    //TODO setup what happens if user login is incorrect
    //FIX IN BACKEND



  return (
    <div>
      <form onSubmit={handleSubmit}>
        <label htmlFor="login" value="Username">Username:</label><br/>
        <input type="text" name="login" value={userLogin} onChange={(e) => setUserLogin(e.target.value)} autoFocus={true}/>
        <input type="submit" value="Login"/>
      </form>
    </div>
  )
}

export default Login
