import Bootstrap from './pages/Bootstrap'
import Icon from './pages/Icon'
import Style from './pages/Style'
import UsingIcon from './pages/UsingIcon'
import UsingIconWithCssClass from './pages/UsingIconWithCssClass'
import './App.css'
function App() {
  return (
    <div style={{background: 'skyblue', paddingBottom: '10px'}}>
      <Bootstrap />
      <Icon />
      <Style />
      <UsingIcon />
      <UsingIconWithCssClass />
    </div>
  )
}
export default App
