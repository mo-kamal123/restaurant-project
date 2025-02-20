import './App.css'
import { Route, Routes } from 'react-router-dom'
import MenuHome from './menu/menu-componants/MenuHome'
import DashboardHome from './dashboard/dashboard-componants/DashboardHome'

function App() {

  return (
    <>
    <Routes>
      <Route path='/' element={<MenuHome />}/>
      <Route path='/dashboard' element={<DashboardHome />}/>
    </Routes>
    </>
  )
}

export default App
