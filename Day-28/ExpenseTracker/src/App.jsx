import React from 'react'

import Index from './pages'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import NotFound from './pages/NotFound'

const App = () => {
  return (
   <>
  <BrowserRouter>
  <Routes>
    <Route path="/" element={<Index />} />
    <Route path="*" element={<NotFound />} />
  </Routes>
  </BrowserRouter>
   </>
  )
}

export default App
