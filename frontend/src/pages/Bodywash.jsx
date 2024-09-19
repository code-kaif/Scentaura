import React from "react";
import Products from "../components/Products";
import data from "../../public/data.js";

const Bodywash = () => {
  const bodywash = data.filter((prod) => prod.category == "bodywash");
  return (
    <div className="max-w-screen-2xl mt-5 md:px-10 px-7">
      <Products title={"Body & Care"} category={bodywash} />
    </div>
  );
};

export default Bodywash;
