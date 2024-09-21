import React, { useEffect, useState } from "react";
import Products from "../components/Products";
import axios from "axios";
import { url } from "../main";

const Bodywash = () => {
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
  const bodywash = data.filter((prod) => prod.category == "bodywash");
  return (
    <div className="max-w-screen-2xl mt-5 md:px-10 px-7">
      <Products title={"Body & Care"} category={bodywash} />
    </div>
  );
};

export default Bodywash;
