import {useState} from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import * as D from './data'
function App() {
  //const [count, setCount] = useState(0)
  console.log('App called')
  return (
    <>
      <h1>Hello React Vite!</h1>
      <p>
        {D.randomName()},{D.randomJobTitle()},{D.randomDayMonthYear()}
      </p>
      <img src="{D.randomAvatar()}" height="50" />
      <img src="{D.randomImage()}" height="300" />
    </>
  )
}
export default App
