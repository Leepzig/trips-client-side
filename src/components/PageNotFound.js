import React from 'react'
import { useHistory } from 'react-router-dom'

const PageNotFound = () => {

  const [onLoad, setOnLoad] = React.useState(true)
  
  const history = useHistory()
  if (onLoad) {
    history.push("/home")
    setOnLoad(false)
  }

  return (
    <div>
      <h1>Sorry! Looks like there's been an error in your request, please try again, and have a great day!!!</h1>
    </div>
  )
}

export default PageNotFound
