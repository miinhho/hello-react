import { useState } from "react"

export default function Counter() {
  const [count, setCount] = useState()
  
  function increment() {
    setCount(count + 1)
  }

  function decrement() {
    setCount(count - 1)
  }

  return (
    <>
      <p>{count}</p>
      <button onClick={increment}>
        +1
      </button>
      <button onClick={decrement}>
        -1
      </button>
    </>
  )
}
