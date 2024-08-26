import {useRef, useEffect, useState} from 'react'
import Clock from './pages/Clock'

function App() {
  const [count, setCount] = useState(0)
  let today = new Date()
  // setInterval 함수는 페이지가 호출될 때 한번만 호출되어야 한다.
  const id = setInterval(() => {
    today = new Date()
    console.log(today)
    const clock = document.querySelector('div>Clock')
    //시간 업데이트를 위한 구문이 필요
  }, 1000)
  // useEffect 사용 이유는 컴포넌트가 생성시 한번만 호출되어야 하기 때문
  useEffect(() => {
    id
    return function () {
      clearInterval(id)
    }
  }, []) //[]는 의존성목록이고 목록이 비었으므로 컴포넌트생성시에만 호출
  return (
    <div className="w-full h-full">
      <Clock today={today}></Clock>
    </div>
  )
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
