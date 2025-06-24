import React from 'react'

const App = () => {
  return (
    <div className='flex flex-col items-center justify-center'>
      <h1 className='mt-10 font-bold  text-2xl tracking-wider'>Welcome to My React App</h1>
      <div className='flex flex-col gap-1 mt-10  ' >
        <div className='flex items-center gap-1'>
          <div className='h-20 w-20 border'></div>
          <div className='h-20 w-20 border'></div>
          <div className='h-20 w-20 border'></div>
        </div>
        <div className='flex items-center gap-1'>
          <div className='h-20 w-20 border'></div>
          <div className='h-20 w-20 border'></div>
          <div className='h-20 w-20 border'></div>
        </div>
        <div className='flex items-center gap-1'>
          <div className='h-20 w-20 border'></div>
          <div className='h-20 w-20 border'></div>
          <div className='h-20 w-20 border'></div>
        </div>

        
      </div>
      <button className='border px-3 py-1.5 mt-6 rounded-lg '>Reset </button>
    </div>
  )
}

export default App