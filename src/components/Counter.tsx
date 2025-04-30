import { useState } from 'react'

function Counter () {
  const [number, setNumber] = useState(50)

  function IncrementByTwo () {
    setNumber(number + 2)
  }

  function DecrementByTwo () {
    setNumber(number - 2)
  }

  return (
    <>
      <p>{number}</p>

      <button onClick={IncrementByTwo}>Increment + 2</button>
      <button onClick={DecrementByTwo} disabled={number === 0}>Decrement - 2</button>
      <button onClick={() => setNumber(50)}>Reset</button>
    </>
  )
}

export default Counter
