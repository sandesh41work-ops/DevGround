import { useEffect, useRef, useState } from 'react'

import './App.css'

function App() {

  // Case 2 - what's the problem here?
  const Timer = () => {
    const [count, setCount] = useState(0)

    useEffect(() => {
      const interval = setInterval(() => {
        setCount(count + 1)
      }, 1000)

      return () => clearInterval(interval)
    }, [])

    return <h2>{count}</h2>

  }
  return (
    <>
      <section id="center">
        <Timer />
      </section>

    </>
  )
}

export default App
