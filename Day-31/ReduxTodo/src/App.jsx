import React from 'react'
import Todo from './components/Todo'
import { store } from './store/store'
import { Provider } from 'react-redux';
const App = () => {
  return (
  <Provider store ={store}>
      <div className='min-h-screen flex justify-center items-center bg-gray-200 pe-4'>
      <Todo />
    </div>
  </Provider>
  )
}

export default App