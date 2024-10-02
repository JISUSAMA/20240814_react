import {Outlet} from 'react-router-dom'
import NavigationBar from './NavigationBar'
import Main from './Main'
export default function Layout() {
  return (
    <div>
      <NavigationBar></NavigationBar>
      <Outlet></Outlet>
      <Main></Main>
    </div>
  )
}
