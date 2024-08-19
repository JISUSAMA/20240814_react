import {Component, ReactNode, useState} from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import ClassComponent from './ClassComponent'
//1) Component  class
// export default class App extends Component {
//   render(): ReactNode {
//     const isLoading = true
//     if (isLoading) return <p>loading...</p>
//     const children = isLoading ? (
//       <p>loading...</p>
//     ) : (
//       <ul>
//         <li>
//           <a href="http://www.google.com">
//             <p>go to Google</p>
//           </a>
//         </li>
//       </ul>
//     )
//     return <div>{children}</div>
//   }
// }
// function App() {
//   const [count, setCount] = useState(0)
//   return <></>
// }

// export default App
export default class App extends Component {
  render(): ReactNode {
    return (
      <ul>
        <ClassComponent href="http://www.google.com" text="go to Google" />
        <ClassComponent href="http://www.facebook.com" text="go to facebook" />
      </ul>
    )
  }
}
