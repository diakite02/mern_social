

import Register from "./pages/resgister/Register"
import Login from './pages/login/Login'
import Home from './pages/home/Home'
import Profile from './pages/profile/Profile'
import {BrowserRouter as Router,Routes,Route}  from "react-router-dom";

function App() {
  return (
    <div>
      <Router>

        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/profile" element={<Profile />} />
        </Routes>
      </Router>
    </div>
  )
}

export default App