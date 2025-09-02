import React from "react";
import { AiTwotoneDelete } from "react-icons/ai";
import { IoCheckmarkDone } from "react-icons/io5";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import { deleteTodo } from "../features/TodoSlice";

const TodoItems = () => {
    const dispatch = useDispatch();
    const todos = useSelector((state) => state.todos);
  return (
    <div className="mt-4 px-4">
      {todos.map((todo,index) => (
        <div
          key={todo.id}
          className="flex justify-between items-center rounded p-2 mb-2"
        >
          <div className="flex items-center gap-4">
             <span className="font-bold">{index + 1}.</span>
            <p>{todo.text}</p>
          </div>

          <AiTwotoneDelete
            size={25}
            className="text-red-500 cursor-pointer"
            onClick={() => dispatch(deleteTodo(todo.id))}
          />
        </div>
      ))}
    </div>
  );
};

export default TodoItems;
