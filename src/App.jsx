import { Outlet } from 'react-router-dom'
import './App.css'
import Header from './Components/Header/Header'
import Footer from './Components/Footer/Footer'
function App() {

  return (
    <div className="App">
      <Header/>
      <Outlet/>
      <Footer/>
    </div>
  )
}

export default App
