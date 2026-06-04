import { useEffect, useRef, useState } from 'react'

import './App.css'

function App() {
  const [count, setCount] = useState(0)
  const countRef = useRef(0)
  const increment = () => {
    countRef.current++
    console.log(countRef.current)
  }

  useEffect(() => {
    console.log('Component rendered')
    
    increment()
  }, [count]);

  return (
    <>
      <section id="center">
        <h1>useRef</h1>
        <p>Count: {count}</p>
        <p>Ref Count: {countRef.current}</p>
        <button onClick={() => setCount(count + 1)}>Increment Count</button>
      </section>

    </>
  )
}

export default App
