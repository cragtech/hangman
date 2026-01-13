import { useState } from 'react'
import './App.css'

import Title from './Title.jsx'
import Gallow from './Gallow.jsx'
import WordGuess from './WordGuess.jsx'
import Keyboard from './Keyboard.jsx'

function App() {
  const [wordToGuess, setWordToGuess] = useState("")

  return (
    <>
    <Title />
    <Gallow />
    <WordGuess />
    <Keyboard />
    </>
  )
}

export default App
