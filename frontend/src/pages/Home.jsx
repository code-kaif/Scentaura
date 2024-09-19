import React from "react";
import data from "../../public/data.js";
import Products from "../components/Products";

const Home = () => {
  const perfume = data.filter((prod) => prod.category == "perfume");
  const gift = data.filter((prod) => prod.category == "gift");
  const luxury = data.filter((prod) => prod.category == "luxury");
  return (
    <>
      <div className="max-w-screen-2xl mt-5 md:px-10 px-7 z-1 relative">
        <Products title={"Best Seller"} category={perfume} />
        <Products title={"Gift"} category={gift} />
        <Products title={"Luxury"} category={luxury} />
      </div>
    </>
  );
};

export default Home;
