import { useState } from "react";
import { IoMdMenu } from "react-icons/io";
import { RxCross2 } from "react-icons/rx";
const App = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const toggle = () => {
    setIsMenuOpen(!isMenuOpen);
  };
  return (
    <div className="m-10 ">
      <div className="flex  gap-4 justify-between  items-center">
        <h1 className="text-2xl font-semibold">Logo</h1>
        <div className="bg-slate-200 p-1 rounded-[30px]">
          <input
            type="text"
            placeholder="Search"
            className="mx-2 outline-none border-none"
          />
        </div>

        <div className="sm:hidden md:block hidden
        ">
          <ul className="flex  gap-4">
            <li className="text-xl font-semibold">Home</li>
            <li className="text-xl font-semibold">About</li>
            <li className="text-xl font-semibold">Contact</li>
            <li className="text-xl font-semibold">Projects</li>
          </ul>
        </div>
       <div onClick={toggle} className="sm:block md:hidden">
         {isMenuOpen ?  <RxCross2 size={25} /> :<IoMdMenu size={25} /> }
       </div>
      </div> 
      {
        isMenuOpen && (
          <div className="mt-10 py-4 sm:block md:hidden">
            <ul className="text-center flex-col flex gap-4">
              
          <li className="text-xl font-semibold">Home</li>
            <li className="text-xl font-semibold">About</li>
            <li className="text-xl font-semibold">Contact</li>
            <li className="text-xl font-semibold">Projects</li>
            </ul>
          </div>
        )
      }

      
    </div>
  );
};

export default App;
