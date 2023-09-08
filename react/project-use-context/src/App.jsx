import { FooterBar } from './assets/components/FooterBar'
import './App.css'
import { useState } from 'react'
import { ThemeContext } from './assets/context/ThemeContext';

function App() {
  const [theme, setTheme] = useState("dark");

  return (
    <>
      <ThemeContext.Provider value={theme}>
        <header>
          <button onClick={() => { setTheme(theme === "dark" ? "light " : "dark") }}>Change Theme</button>
        </header>
        <main>M</main>
        <footer>
          <FooterBar />
        </footer>
      </ThemeContext.Provider>
    </>
  )
}

export default App
