import axios from "axios";
import React, { useEffect, useState } from "react";
import Products from "../components/Products";
import { url } from "../main";

const Home = () => {
  const [data, setData] = useState([]);
  useEffect(() => {
    async function getPerfume() {
      try {
        const res = await axios.get(`${url}/perfume`);
        setData(res.data);
        console.log(res.data);
      } catch (error) {
        console.log(error);
      }
    }
    getPerfume();
  }, []);
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
