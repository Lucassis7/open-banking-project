// import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
import { Routes, Route, BrowserRouter } from 'react-router-dom';
import './App.css';
import SignUp from './pages/SignUp';
import Login from './pages/Login';
import Statement from './pages/Statements';
import Profile from './pages/Profile';

function App() {
  // const [count, setCount] = useState(0)

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/signup" element={ <SignUp /> } />
          <Route path="/login" element={ <Login /> } />
          <Route path="/statement" element={ <Statement /> } />
          <Route path="/profile" element={ <Profile /> } />
        </Routes>
      
      </BrowserRouter>
    </>
  )
}

export default App
