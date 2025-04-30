import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { Form } from './components/Form'
import HomePage from './components/HomePage'
import Counter from './components/Counter'

function App () {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<HomePage />}></Route>
          <Route path='/data' element={<Form />}></Route>
          <Route path='/counter' element={<Counter />}></Route>
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
