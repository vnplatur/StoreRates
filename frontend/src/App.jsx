import { useState } from 'react'
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Dashboard from './pages/Dashboard'
import Navbar from './components/Navbar'
import Login from './pages/Login';
import Register from './pages/Register';
import Shops from './pages/Shops';
import Home from './pages/Home';


// const Home = () => <h2>Home Page</h2>;
// const Shops = () => <h2>Shops Page</h2>;

function App() {
  const [user, setUser] = useState(null);
  const [role, setRole] = useState(null);

  const loginUser = (user,role) => {
    setUser(user);
    setRole(role);
  };

  const logoutUser = () => {
    setUser(null);
    setRole(null);
  };

  return (
    <BrowserRouter>

      <Navbar user={user} onLogout={logoutUser} />

      <Routes>

        <Route path="/" element={<Home />} />

        <Route
          path="/dashboard"
          element={<Dashboard user={user} role={role}/>}
        />

        <Route path="/shops" element={<Shops />} />

        <Route
          path="/login"
          element={<Login onLogin={loginUser} />}
        />

        <Route path="/register" element={<Register />} />

      </Routes>

    </BrowserRouter>
  );
}

export default App
