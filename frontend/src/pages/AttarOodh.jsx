import React from "react";
import Products from "../components/Products";
import data from "../../public/data.js";

const AttarOodh = () => {
  const attar = data.filter((prod) => prod.category == "attar");
  return (
    <div className="max-w-screen-2xl mt-5 md:px-10 px-7">
      <Products title={"Attar"} category={attar} />
    </div>
  );
};

export default AttarOodh;
