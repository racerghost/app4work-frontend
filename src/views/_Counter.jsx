import Form from '../components/Form'
import { useState, useContext } from 'react'
import { AuthContext } from '../context/auth.context'

function Home() {
  const [counter, setCounter] = useState(0)
  const { isLoggedIn } = useContext(AuthContext)
  const increment = () => {
    setCounter(counter + 1)
  }
  const decrement = () => {
    setCounter(counter - 1)
  }
  return (
    <>
      {isLoggedIn && <div>Welcome to App4Work!</div>}
      <p>Counter: {counter}</p>
      <button onClick={increment}>Increment</button>
      <button onClick={decrement}>Decrement</button>
      <Form />
    </>
  )
}

export default Home
