import React, { useState } from "react";

import { MdDelete, MdDone, MdDoneAll, MdEdit } from "react-icons/md";

const TodoItems = ({text,id,deleteTodo,editTodo}) => {
  const [done, setDone] = useState(false);
   const [isEditing, setIsEditing] = useState(false);
  const [editedText, setEditedText] = useState(text);
  const toggle = () => {
    setDone(!done);
  };
    const handleUpdate = () => {
    if (editedText.trim() === "") return; // avoid empty
    editTodo(id, editedText.trim());
    setIsEditing(false);
  };

  

  return (
    < >
     <div className="flex justify-between mb-4 items-center">
      {isEditing ? (
        <div className="flex gap-2 w-full">
          <input
            className="border p-1 rounded w-full"
            value={editedText}
            onChange={(e) => setEditedText(e.target.value)}
          />
          <button
            onClick={handleUpdate}
            className="bg-green-500 text-white px-2 rounded"
          >
            Update
          </button>
        </div>
      ) : (
        <>
          <div className="flex gap-4 cursor-pointer" onClick={toggle}>
            {done ? <MdDoneAll size={25} /> : <MdDone size={25} />}
            <p className={done ? "line-through text-xl" : "text-xl"}>
              {text}
            </p>
          </div>

          <div className="flex gap-3 items-center">
            <MdEdit
              onClick={() => setIsEditing(true)}
              size={22}
              className="text-blue-500 cursor-pointer"
            />
            <MdDelete
              onClick={() => deleteTodo(id)}
              size={22}
              className="text-red-500 cursor-pointer"
            />
          </div>
        </>
      )}
    </div>
    </>
  );
};

export default TodoItems;
