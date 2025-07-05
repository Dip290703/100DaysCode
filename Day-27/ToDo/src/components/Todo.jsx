import React, { useRef, useState } from "react";
import { RiCalendarTodoLine } from "react-icons/ri";
import TodoItems from "./TodoItems";

const Todo = () => {
  const [todoItems, setTodoItems] = useState([]);
  const inputRef = useRef();
  const add = () => {
    const text = inputRef.current.value.trim();
    if (text === "") {
      return null;
    }
    const newTodo = {
      id: Date.now(),
      text: text,
      completed: false,
    };
    console.log(text);

    setTodoItems((prev) => [...prev, newTodo]);
    inputRef.current.value = "";
  };

  const deleteTodo = (id) => {
    setTodoItems((prev) => {
      return prev.filter((todo) => todo.id !== id);
    });
  };
  const editTodo = (id, newText) => {
    setTodoItems((prev) =>
      prev.map((todo) => (todo.id === id ? { ...todo, text: newText } : todo))
    );
  };

  return (
    <div className="bg-white h-[600px] w-[500px] rounded-2xl py-4">
      <div className="flex gap-4 items-center mx-8 my-4">
        <RiCalendarTodoLine size={30} />
        <h1 className="font-medium text-xl capitalize ">To-do app</h1>
      </div>

      <div className=" flex justify-between mx-10 mt-10 items-center  rounded-full bg-slate-200">
        <input
          ref={inputRef}
          type="text"
          className="p-3 text-md  border-none outline-none "
          placeholder="Add Task"
        />
        <button
          onClick={add}
          className=" bg-orange-500 px-6 py-3 text-md   rounded-full text-white font-medium"
        >
          Add
        </button>
      </div>

      <div className="mt-10 mx-10 ">
        {todoItems.map((item, index) => (
          <TodoItems
            key={index}
            text={item.text}
            id={item.id}
            deleteTodo={deleteTodo}
            editTodo={editTodo}
          />
        ))}
      </div>
    </div>
  );
};






export default Todo;
