import React, { useState } from 'react'
import TodoItems from './TodoItems'
import { addTodo } from '../features/TodoSlice'
import { useDispatch } from 'react-redux'
const Todo = () => {
    const [input,setInput] = useState("")
    const dispatch = useDispatch()
    const handleAdd = (e) => {
     e.preventDefault()
     if(input.trim() === "") return
     dispatch(addTodo(input))
     setInput("")
    }
  return (
    
    <div className='bg-white p-8 rounded-2xl w-[500px]'> 
        <h1 className='font-medium text-3xl text-center  '>Todo App</h1>
        <div className='flex justify-between mt-8 rounded-3xl border border-slate-200'>
            <input type="text" placeholder='Enter task..'
            value={input}
            onChange={(e)=>setInput(e.target.value)}
            className='px-4 py-2 outline-none text-slate-500' />
            <button className='px-4 py-2 bg-orange-400 rounded-3xl text-white'
            onClick={handleAdd}
            >Submit</button>
        </div>
        <TodoItems />
    </div>
  )
}

export default Todo