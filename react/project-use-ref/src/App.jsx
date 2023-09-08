import { useRef } from 'react';
import './App.css'
import { useState } from 'react';

function App() {
  const counter = useRef(0);
  function handleClick() {
    counter.current = counter.current + 1;
    console.log(counter.current);
  }
  return (
    <>
      <h1>UseRef</h1>
      <button onClick={handleClick}>{counter.current}</button>
      <StopWatch />
      <FocusTheInput />
    </>
  )
}

function StopWatch() {
  const [startTime, setStartTime] = useState(null);
  const [now, setNow] = useState(null);
  const myInterval = useRef(null);

  function handleStart() {
    setStartTime(Date.now());
    setNow(Date.now());

    myInterval.current = setInterval(() => {
      setNow(Date.now())
    }, 10)
  }

  function handleStop() {
    clearInterval(myInterval.current)
  }

  let secondsPassed = 0;
  if (startTime !== null && now !== null) {
    secondsPassed = (now - startTime) / 1000;
  }

  return (
    <div>
      <h1>Gecen Zaman: {secondsPassed}</h1>
      <button onClick={handleStart}>Başlat</button>
      <button onClick={handleStop}>Durdur</button>
    </div>

  )
}

function FocusTheInput() {
  const myInputRef = useRef(null);
  function handleFocus() {
    // document.getElementById("theInput").focus(); DOM KULLANILMICAK
    myInputRef.current.focus();

  }

  return (
    <form style={{ marginTop: "40px" }}>
      <h2>useRef Kullanımı</h2>
      <input ref={myInputRef} type="text" id="theInput" />
      <button type="text" onClick={handleFocus}>Inputa focus lutfen..</button>
    </form>
  )
}

export default App
