import React, { useContext, useState } from "react";
import { Link } from "react-router-dom";
import { FiShoppingCart } from "react-icons/fi";
import { MyContext } from "../main";

const Navbar = () => {
  const { count } = useContext(MyContext);
  let Links = [
    { name: "Home", link: "/" },
    { name: "Perfume", link: "/perfume" },
    { name: "Body Wash", link: "/bodywash" },
    { name: "Attar", link: "/attar" },
  ];
  let [open, setOpen] = useState(false);
  return (
    <div className="w-full h-[10vh] sticky top-0 left-0 right-0 z-30">
      <div className="flex items-center justify-between bg-white py-4 md:px-10 px-7 border-b-2">
        <h1 className="text-4xl font-bold cursor-pointer">ScentAura</h1>
        <div
          onClick={() => setOpen(!open)}
          className="text-3xl absolute right-8 top-6 cursor-pointer md:hidden"
        >
          <ion-icon name={open ? "close" : "menu"}></ion-icon>
        </div>
        <ul
          className={`md:flex md:items-center md:pb-0 absolute md:static md:bg-white bg-slate-100 md:z-auto z-[-1] left-0 w-full md:w-auto md:pl-0 pl-9 transition-all duration-500 ease-linear ${
            open ? "top-16 " : "top-[-500px]"
          }`}
        >
          {Links.map((link) => (
            <li key={link.name} className="md:ml-8 text-xl md:my-0 my-7">
              <Link
                onClick={() => setOpen(!open)}
                to={link.link}
                className="text-gray-800 hover:text-gray-400 font-semibold duration-100"
              >
                {link.name}
              </Link>
            </li>
          ))}
          <div className="md:ml-3 ml-0 md:mb-0 mb-3">
            <Link to={"/login"} onClick={() => setOpen(!open)}>
              <button className="md:px-3 md:py-2 px-5 py-2 md:mx-4 mx-0 bg-black text-white font-medium rounded-md">
                Login
              </button>
            </Link>
          </div>
          <div className="md:px-5 mr-12 mt-1 pl-2 cursor-pointer md:flex hidden">
            <Link to={"/cart"}>
              <FiShoppingCart size={24} />
            </Link>
            <p className="font-medium px-2">{count > 0 ? count : ""}</p>
          </div>
        </ul>
        <div className="md:px-5 mr-12 mt-1 pl-2 cursor-pointer md:hidden flex">
          <Link to={"/cart"}>
            <FiShoppingCart size={24} />
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
