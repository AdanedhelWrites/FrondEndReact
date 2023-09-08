import { useEffect } from 'react'
import './App.css'

function App() {

  return (
    <>
      <MyComponent />
    </>
  )
}

function MyComponent() {

  useEffect(() => {
    console.log("hello love");
  })

  return (
    <h1>Hello</h1>
  )
}

export default App
