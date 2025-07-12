import React from 'react'
import { Link } from 'react-router-dom'

const NotFound = () => {
  return (
    <div className='min-h-screen flex items-center justify-center'>
        <div className='text-center'>
            <h1 className='text-slate-600 text-4xl font-medium mb-4'>404</h1>
            <p className='text-3xl text-slate-400 font-medium'>Opps! Page not found 😑 </p>
            <Link to="/">
            <p className='text-2xl text-blue-500 hover:text-blue-700 underline mt-4'>Return to Homepage. </p>
            </Link>
        </div>
    </div>
  )
}

export default NotFound