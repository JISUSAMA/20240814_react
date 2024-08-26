import {useRef, useEffect, useState} from 'react'
import Clock from './pages/Clock'
import {useClock} from './hooks' //5)에서만 사용

function App() {
  const [count, setCount] = useState(0)

  //1) 순수 자바스크립트 함수인 setInterval 함수는
  //   페이지가 호출될 때 한번만 호출되어야 한다.
  // let today = new Date()
  // const id = setInterval(() => {
  //   today = new Date()
  //   console.log(today)
  //   const clock = document.querySelector('div>Clock')
  //   //시간 업데이트를 위한 구문이 필요
  // }, 1000)

  //2) 1번과 함께 컴포넌트 생성시 한번만 호출되는
  // 생명주기 관리(useEffect, useLayoutEffect)에서 useEffect 사용
  // useEffect(() => {
  //   id
  //   //useEffect 훅만으로는 Clock의 today를 갱신할 방법이 없다.
  //   return function () {
  //     clearInterval(id)
  //   }
  // }, []) //[]는 의존성목록이고 목록이 비었으므로 컴포넌트생성시에만 호출
  // return (
  //   <div className="w-full h-full">
  //     <Clock today={today}></Clock>
  //   </div>
  // )

  //3) 메서드 호출(useRef, useImperativeHandle)에서 useRef 사용
  // let today = useRef(new Date())
  // useEffect(() => {
  //   const id = setInterval(() => {
  //     today.current = new Date()
  //     console.log(today.current.toLocaleTimeString())
  //     //useRef 훅으로 Clock의 today를 갱신할 수 없다.
  //   }, 1000)
  //   return () => clearInterval(id)
  // }, [])
  // return (
  //   <div className="w-full h-full">
  //     <Clock today={today.current}></Clock>
  //   </div>
  // )

  //4) 데이터 관리(useMemo,useCallback,useState,useReducer)에서
  //useState 사용
  //   const [today, setToday] = useState(new Date())
  //   useEffect(() => {
  //     const id = setInterval(() => {
  //       setToday(new Date())
  //     }, 1000)
  //     return () => clearInterval(id)
  //   }, [])
  //   return (
  //     <div className="w-full h-full">
  //       <Clock today={today}></Clock>
  //     </div>
  //   )

  //5) custom hook 함수사용(재사용을 목적)
  const today = useClock()
  return <Clock today={today} />
}
export default App

/* 일반적인 자바스크립트로 시간 갱신 할 때
<!DOCTYPE html>
<html lang="ko">
<head></head>
<body><h1 id="time">요소의 중앙 배치 flex 이용</h1></body>
<script>
  let today = new Date()
  var time = document.getElementById("time")
  setInterval(function () {
    time.textContent = new Date()
  }, 1000)
</script>
</html>
*/
