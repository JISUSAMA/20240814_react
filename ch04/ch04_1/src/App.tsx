import {useRef, useEffect, useState} from 'react'
import Clock from './pages/Clock'

function App() {
  const [count, setCount] = useState(0)
  // let today = new Date()

  //  1) setInterval 함수는 페이지가 호출될때 한번만 호출되어야 한다.
  // /*const id = setInterval(() => {
  //   today = new Date()
  //   console.log(today)
  //   document.querySelector('div>Clock')
  //   //시간 업데이트를 위한 구문이 필요
  // }, 1000)*/

  // 2) useEffect를 사용하는 이유는 컴포넌트가 생성시 한번만 호출되어야 하기 때문
  // useEffect(() => {
  //   id
  //   return function () {
  //     clearInterval(id)
  //   }
  // }, []) //[] 는 의존성 목록이고, 목록이 비었으므로 컴포넌트생성시에만 호출

  //3) 메서드 호출에 관여하는 useRef 훅 사용
  // let today = useRef(new Date())
  // useEffect(() => {
  //   const id = setInterval(() => {
  //     today.current = new Date()
  //     console.log(today.current.toLocaleTimeString())
  //   }, 1000)
  //   return () => clearInterval(id)
  // })

  //4) 데이터 관리(useMemo, useCallback, useState, useReducer) 중
  // useState 훅 사용
  const [today, setToday] = useState(new Date())
  useEffect(() => {
    const id = setInterval(() => {
      setToday(new Date())
    }, 1000)
    return () => clearInterval(id)
  }, [])

  return (
    <div className="w-full h-full">
      <Clock today={today}></Clock>
    </div>
  )
}

export default App
