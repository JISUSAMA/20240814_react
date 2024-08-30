import {Provider as ReduxProvider} from 'react-redux'
import {useStore} from './store'

export default function App() {
  const store = useStore()
  return (
    <ReduxProvider store={store}>
      {/* 18버전부터 무조건 하나의 태그는 있어야 함 */}
      <div />
    </ReduxProvider>
  )
}
