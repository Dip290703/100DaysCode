import React from 'react'
import { BrowerRouter, Route, Routes} from 'react-router-dom'
import Index from './pages'

const App = () => {
  return (
   <>
  <BrowerRouter>
  <Routes>
    <Route path='/' element={<Index />} />
  </Routes>
  </BrowerRouter>
   </>
  )
}

export default App