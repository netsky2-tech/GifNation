import React, { useState } from 'react'
import { Link } from 'wouter'

const [keyboard, setKeyboard] = useState('')

const handleSubmit = evt => {
  // navegar a otra ruta
}

const handleInput = evt => {
  setKeyboard(evt.target.value)
}

const Home = () => {
  return (
    <form onSubmit={handleSubmit}>
      <input type='text' value={keyboard} onChange={handleInput} />
    </form>
  )
}

export default Home
