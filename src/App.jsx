// import './App.css'
import { BrowserRouter, Route, Routes } from 'react-router'
import UsersHome from './day12/UsersHome'
import Profile from './day12/Profile'
import UserDetails from './day12/UserDetails'
import Wrapper from './day12/Wrapper'

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Wrapper/>}>
          {/* intial routing */}
          <Route index element={<UsersHome />} />
          <Route path='profile' element={<Profile />} />
          <Route path='user/:userid' element={<UserDetails />} />
        </Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App