import {Route, Routes} from 'react-router-dom'
import '../pages/members/Login'
import List from '../pages/feeds/List'
import Join from '../pages/members/Join'
import Login from '../pages/members/Login'
import NoMatch from './NoMatch'
import Layout from './Layout'
export default function RoutesSetup() {
  return (
    <Routes>
      <Route path="/" element={<List />} />
      <Route path="/feeds/list" element={<Layout />} />
      <Route path="/join" element={<Join />} />
      <Route path="/login" element={<Login />} />
      <Route path="*" element={<NoMatch />} />
    </Routes>
  )
}
