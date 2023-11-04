import { useState } from "react";
import { AiOutlineClose, AiOutlineMenu } from "react-icons/ai";
import logo from "../assets/logo.png";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(true);

  const handeleNavOpen = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="flex justify-between items-center h-24 md:h-24 max-w-[1280px] mx-auto px-4 ">
      <div className="md:w-20 w-[80px] flex-shrink-0 border-l-2 border-b-2 border-[#1f4590ad]">
        <a href="/">
          <img src={logo} alt="CarZing Logo" />
        </a>
      </div>
      <ul className="hidden lg:flex text-bold">
        <li className="p-4">Home</li>
        <li className="p-4">Cars</li>
        <li className="p-4">Offers</li>
        <li className="p-4">Locations</li>
        <li className="p-4">Contact</li>
        <li className="p-4 border border-[#1F4590] px-8 mx-2 rounded hover:bg-[#1F4590] hover:text-white transition">
          Login
        </li>
        <li className="p-4 border border-[#1F4590] px-8 mx-2 bg-[#1F4590] text-white rounded">
          Signup
        </li>
      </ul>

      <div onClick={handeleNavOpen} className="block lg:hidden">
        {!isOpen ? <AiOutlineClose size={30} /> : <AiOutlineMenu size={30} />}
      </div>
      <div
        className={
          !isOpen
            ? " fixed  lg:hidden  left-0 top-0 w-[60%] h-full border-r border-r-gray-500  ease-in-out duration-300 px-2 bg-white"
            : "fixed left-[-100%] "
        }>
       
          <a href="/">
            <img className="w-[80px] border-l-2 border-b-2 border-[#1f4590ad] mt-2 ms-2" src={logo} alt="CarZing Logo" />
          </a>
       
        <ul className="mt-20  uppercase ">
         
          <li className="p-4 border-b border-gray-600">Home</li>
          <li className="p-4 border-b border-gray-600">Cars</li>
          <li className="p-4 border-b border-gray-600">Offers</li>
          <li className="p-4 border-b border-gray-600">Locations</li>
          <li className="p-4 ">Contact</li>
          <li className="p-4 border border-[#1F4590]  rounded hover:bg-[#1F4590] hover:text-white transition">
            Login
          </li>
          <li className="p-4 border border-[#1F4590] mt-4 bg-[#1F4590] text-white rounded">
            Signup
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
