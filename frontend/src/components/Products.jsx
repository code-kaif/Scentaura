import React, { useContext } from "react";
import { FaStar } from "react-icons/fa6";
import { FaRupeeSign } from "react-icons/fa";
import { useAuth } from "../context/ContextProvider";
import { Link } from "react-router-dom";

const Products = ({ title, category }) => {
  const { count, setCount } = useAuth();
  return (
    <>
      <div className="flex justify-around items-center flex-col md:flex-row">
        <div className="bg-black h-[1px] w-[40%] md:flex hidden"></div>
        <h1 className="font-medium text-3xl my-3">{title}</h1>
        <div className="bg-black h-[1px] w-[40%] md:flex hidden"></div>
        <div className="bg-black h-[1px] w-[100%] md:hidden"></div>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-4">
        {category.map((product) => (
          <div
            key={product.id}
            className="md:w-[20vw] w-[85vw] h-[70vh] rounded-md border-2 my-10"
          >
            <div className="h-[70%] w-[100%]">
              <img
                src={product.image}
                alt=""
                className="hover:scale-105 duration-300"
              />
            </div>
            <div className="flex flex-col justify-between items-start md:space-y-1 space-y-3">
              <div className="px-3">
                <Link to={`/perfume/${product._id}`}>
                  <h3 className="hover:underline cursor-pointer duration-200 font-medium whitespace-nowrap overflow-hidden md:w-[18vw] w-[75vw] name">
                    {product.name}
                  </h3>
                </Link>
                <div className="flex items-center font-medium space-x-1">
                  <FaStar />
                  <p>{product.rating}</p>
                </div>
                <div className="text-lg flex items-center font-medium space-x-1">
                  <FaRupeeSign />
                  <p>{product.price}</p>
                </div>
              </div>
              <div className="w-[100%] px-2">
                <button
                  onClick={() => setCount(count + 1)}
                  className="bg-black hover:bg-slate-900 duration-200 text-white w-[100%] h-10 rounded-md font-medium"
                >
                  Add to Cart
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </>
  );
};

export default Products;
