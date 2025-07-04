import React, { useState } from "react";
import { IoMdDoneAll } from "react-icons/io";
import { MdDelete, MdDone, MdDoneAll } from "react-icons/md";

const TodoItems = ({text}) => {
  const [done, setDone] = useState(false);
  const toggle = () => {
    setDone(!done);
  };
  

  return (
    < >
      <div className="flex justify-between mb-4 items-center">
        <div className="flex gap-6 " onClick={toggle}>
          {" "}
          {done ? <MdDoneAll size={25} /> : <MdDone size={25} />}{" "}
          <p className={done ? "line-through text-xl" : "text-xl"}>
           {text}
          </p>
        </div>
        <MdDelete size={25} />
      </div>
    </>
  );
};

export default TodoItems;
