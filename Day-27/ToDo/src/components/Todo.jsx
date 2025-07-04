import React from 'react'
import { RiCalendarTodoLine } from 'react-icons/ri'
import TodoItems from './TodoItems'

const Todo = () => {
  return (
    <div className='bg-white h-[600px] w-[500px] rounded-2xl py-4'>
    <div className='flex gap-4 items-center mx-8 my-4'> 
      <RiCalendarTodoLine size={30} />
        <h1 className='font-medium text-xl capitalize '>To-do app</h1>
    </div>

    <div className=' flex justify-between mx-10 mt-10 items-center  rounded-full bg-slate-200'>
      <input type="text  " 
       className='p-3 text-md  border-none outline-none '
      placeholder='Add Task' />
      <button className=' bg-orange-500 px-6 py-3 text-md   rounded-full text-white font-medium'>Add</button>
    </div>
    

    <div className='mt-10 mx-10 '>
      <TodoItems text= ' This is a todo item' />
       <TodoItems text= ' Add task ' />
    </div>
    
    </div>
  )
}

export default Todo