import {Component, useState} from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

//Componet class
export default class App extends Component {
  render(): ReactNode {
    const isLoading = true
    if (isLoading) return <p>loading...</p>
    const children = (
      <li>
        <a href="http://www.google.com">
          <p>go to Google</p>
        </a>
      </li>
    )
    return (
      <div>
        {isLoading && <p>loading...</p>}
        {!isLoading && <ul>loading...</ul>}
      </div>
    )
  }
}
// function App() {
//   const [count, setCount] = useState(0)
//   return <></>
// }

// export default App
