import {BrowserRouter} from 'react-router-dom'
import RoutesSetup from './routes/RoutesSetup'
import './App.css'
function App() {
  return (
    <main className="flex items-center justify-center w-full h-full">
      <BrowserRouter>
        <RoutesSetup />
      </BrowserRouter>
    </main>
  )
}

export default App
