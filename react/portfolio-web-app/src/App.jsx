import "../src/assets/reset.css"
import './App.css'
import { Route, Routes } from 'react-router'
import { Works } from './pages/admin/Works'
import { Login } from './pages/admin/Login'
import { Logo } from './components/Logo'
import { ProtectedRoute } from './ProtectedRoute'
import { Dashboard } from './pages/admin/Dashboard'
import { AdminNav } from "./components/Nav"
import { useState } from "react"

function App() {
  const [token, setToken] = useState(localStorage.getItem("token"));
  function logOut() {
    localStorage.clear("token");
    setToken(false);
  }
  return (
    <>
      <header>
        <Logo />
        <AdminNav />
      </header>
      <main>
        <header>{token &&
          <button type="button" onClick={logOut}>Logout</button>}

          Hello Adanedhel
        </header>
        <section>
          <Routes>
            <Route path="/admin" element={<ProtectedRoute />}>
              <Route path="works" element={<Works />} />
              <Route path="" element={<Dashboard />} />
            </Route>
            <Route path="login" element={<Login onSetToken={setToken} />} />
          </Routes>
        </section>
      </main>
      <footer></footer>
    </>
  )
}

export default App
