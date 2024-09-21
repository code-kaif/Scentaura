import React, { useEffect, useState } from "react";
import Products from "../components/Products.jsx";
import axios from "axios";
import { url } from "../main";

const Perfume = () => {
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
  const special = data.filter((prod) => prod.category == "special");
  return (
    <div className="max-w-screen-2xl mt-5 md:px-10 px-7">
      <Products title={"Perfumes"} category={special} />
    </div>
  );
};

export default Perfume;
