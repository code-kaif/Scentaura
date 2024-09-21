import React, { useContext } from "react";
import { useAuth } from "../context/ContextProvider";

const Cart = () => {
  const { count } = useAuth();
  return (
    <div className="max-w-screen-2xl mt-5 md:px-10 px-7">
      <div className="flex justify-center items-center h-[90vh]">
        <h1 className="font-extrabold text-5xl">
          {count > 0 ? "Cart is not Empty" : "Cart is Empty"}
        </h1>
      </div>
    </div>
  );
};

export default Cart;
