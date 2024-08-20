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
// export default class App extends Component {
//   render(): ReactNode {
//     return (
//       <ul>
//         <ClassComponent href="http://www.google.com" text="go to Google" />
//         <ClassComponent href="http://www.facebook.com" text="go to facebook" />
//       </ul>
//     )
//   }
// }

//2) fuction component
// const App = function () {
//   return <h1>function Component</h1>
// }
// const App = () => <h1>function Component</h1>
// export default App

import ArrowComponent from './ArrowComponent'
import P from './P'
import P2 from './P2'
export default function App() {
  const texts = ['hello', 'world'].map(function (text: string, index: number) {
    return <p key={index} children={text} />
  })
  //사용자 컴포넌트를 사용했을 경우
  const texts2 = ['hello', 'world'].map((text, index) => (
    <P key={index} children={text}></P>
  ))
  const texts3 = ['hello', 'world'].map((text, index) => (
    <P2 key={index} children={text}></P2>
  ))
  return (
    <>
      <ul>
        <ClassComponent href="http://www.google.com" text="go to Google" />
        <ClassComponent href="http://www.facebook.com" text="go to facebook" />
        <ArrowComponent href="http://www.google.com" text="go to Google" />
        <ArrowComponent href="http://www.facebook.com" text="go to facebook" />
      </ul>
      <div children={texts} />
      <div children={texts2} />
      <div children={texts3} />
    </>
  )
}
