import {Route, Routes} from 'react-router-dom'
import '../pages/members/Login'
import List from '../pages/feeds/List'
import Join from '../pages/members/Join'
import Login from '../pages/members/Login'

export default function RoutesSetup() {
  return (
    <Routes>
      <Route path="/" element={<List />} />
      <Route path="/" element={<Join />} />
      <Route path="/" element={<Login />} />
    </Routes>
  )
}
