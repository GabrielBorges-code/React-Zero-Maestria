import React from 'react'
import { Link } from 'react-router-dom'

const NotFound = () => {
  return (
    <div>
      <h1>404</h1>
      <h2>Essa página não existe</h2>
      <p>Aperta para <Link to="/">voltar</Link></p>
    </div>
  )
}

export default NotFound