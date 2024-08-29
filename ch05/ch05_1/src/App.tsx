import {Action} from 'redux'
import './App.css'
import ReduxClock from './pages/UseReducerClock'
import UseReducerClock from './pages/UseReducerClock'
// 1)최상위 수준에서 동작하기 위해서는 provider 최상위에서 선언
import {Provider as ReduxProvider} from 'react-redux'
import {configureStore} from '@reduxjs/toolkit'
//앱을 구성하는 모든 컴포넌트가 함께 공유할 수 있는 상태를 앱 수준 상태(app-level-states)
//최상위 수준에서 동작하기 위해서는 최상위에서 선언

// 2)리덕스 저장소(Redux Store)에 앱 상태에서 선언될 변수 선언
type AppState = {
  today: Date
}
const initialAppState = {
  today: new Date()
}
// 3) 리덕스 저장소를 사용하려면 reducer라는 함수사용
const rootReducer = (state: AppState = initialAppState, action: Action) => state

//4) reducer에서 반환된 새로운 상태를 store라는 객체로 관리해주는 configureStore 함수 사용
//prettier-ignore
const store = configureStore({
  reducer: rootReducer,
  middleware: getDefaultMiddlware => {
    return []
  },
})
export default function App() {
  return (
    <ReduxProvider store={store}>
      <main className="p-8">
        <ReduxClock></ReduxClock>
        <UseReducerClock></UseReducerClock>
      </main>
    </ReduxProvider>
  )
}
