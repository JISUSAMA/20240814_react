import React, {StrictMode} from 'react'
import {createRoot} from 'react-dom/client'
import App from './App.tsx'
import './index.css'

// 이전 방식
// const ce = React.createElement
// const virtualDOM = ce('ul', null, [ce('li')])
// const root = ReactDOM.createRoot(document.getElementById('root'))
// root.render(virtualDOM)

// key 속성은 같은 이름의 컴포넌트가 여러 개일 때 이들을 구분하기 위함.
const children = [
  <li key="0">
    <a href="http://www.google.com" target="_blank">
      <p>go to Google</p>
    </a>
  </li>,
  <li key="1">
    <a href="http://www.facebook.com" target="_blank">
      <p>go to Facebook</p>
    </a>
  </li>,
  <li key="2">
    <a href="http://www.twitter.com" target="_blank">
      <p>go to Twitter</p>
    </a>
  </li>
]
// JSX 방식
createRoot(document.getElementById('root')!).render(<ul>{children}</ul>)
