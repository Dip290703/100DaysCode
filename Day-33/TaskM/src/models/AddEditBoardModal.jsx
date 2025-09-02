import React from "react";

const AddEditBoardModal = ({ setBoardModalOpen, type }) => {
    //console.log(type);
    
  return (
    <div
      onClick={(e) => {
        if (e.target !== e.currentTarget) {
          return;
        }
        setBoardModalOpen(false);
      }}
      className="fixed top-0 right-0 bottom-0 left-0 px-2 py-4 flex items-center justify-center scrollbar-hide overflow-scroll z-50 bg-[#00000080]"
    >
      <div
        className="scrollbar-hide overflow-y-scroll max-h-[95vh] bg-white dark:bg-[#2b2c37] text-black dark:text-white font-bold shadow-md shadow-[#364e7e1a] max-w-md mx-auto w-full px-8 py-8 rounded-xl
         "
      >
        <h3 className="text-lg">
          {type === "edit" ? "Edit " : "Add New"} Board
        </h3>
      </div>
    </div>
  );
};

export default AddEditBoardModal;
