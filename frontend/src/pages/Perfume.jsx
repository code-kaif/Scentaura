import React from "react";
import data from "../../public/data.js";
import Products from "../components/Products.jsx";

const Perfume = () => {
  const special = data.filter((prod) => prod.category == "special");
  return (
    <div className="max-w-screen-2xl mt-5 md:px-10 px-7">
      <Products title={"Perfumes"} category={special} />
    </div>
  );
};

export default Perfume;
