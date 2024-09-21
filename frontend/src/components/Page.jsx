import React, { useEffect, useState } from "react";
import { FaStar } from "react-icons/fa6";
import { FaRupeeSign } from "react-icons/fa";
import { useAuth } from "../context/ContextProvider";
import { useParams } from "react-router-dom";
import axios from "axios";
import { url } from "../main";

const Page = () => {
  const { count, setCount } = useAuth();
  const [data, setData] = useState({});
  const param = useParams();
  useEffect(() => {
    const getPerfume = async () => {
      try {
        const res = await axios.get(`${url}/perfume/${param.id}`);
        setData(res.data);
      } catch (error) {
        console.log(error);
      }
    };
    getPerfume();
  }, []);
  console.log(param);
  console.log(data);
  const extra = [
    {
      id: 1,
      image:
        "https://bellavitaorganic.com/cdn/shop/files/Long_Lasting_1_70a277fc-8142-4cfb-b036-fc4084c6cee5.svg?crop=center&height=40&v=1694673851&width=40",
      name: "LONG LASTING",
    },
    {
      id: 2,
      image:
        "https://bellavitaorganic.com/cdn/shop/files/ifra_1.svg?crop=center&height=40&v=1694674058&width=40",
      name: "IFRA CERTIFIED",
    },
    {
      id: 3,
      image:
        "https://bellavitaorganic.com/cdn/shop/files/Imported_Oils_1.svg?crop=center&height=40&v=1694674059&width=40",
      name: "IMPORTED OILS",
    },
    {
      id: 4,
      image:
        "https://bellavitaorganic.com/cdn/shop/files/made_in_india.svg?crop=center&height=40&v=1694092823&width=40",
      name: "MADE IN INDIA",
    },
  ];
  return (
    <div className="max-w-screen-2xl mt-5 md:px-10 px-7">
      <div className="flex md:flex-row flex-col md:h-[90vh] h-full justify-evenly items-center">
        <div className="h-[100%] md:w-[40vw] w-[90vw]">
          <img src={data.image} alt="" />
        </div>
        <div className="h-[100%] md:w-[40vw] w-[90vw]">
          <div className="flex justify-center flex-col space-y-4 px-1 md:px-3">
            <h2 className="font-medium text-3xl mt-5">{data.name}</h2>
            <div className="flex items-center font-medium space-x-1">
              <FaStar />
              <p>{data.rating}</p>
            </div>
            <div className="text-lg flex items-center font-medium space-x-1">
              <FaRupeeSign />
              <p>{data.price}</p>
            </div>
            <div className="w-[100%]">
              <button
                onClick={() => setCount(count + 1)}
                className="bg-black hover:bg-slate-900 duration-200 text-white w-[100%] h-12 rounded-md font-medium"
              >
                Add to Cart
              </button>
            </div>
            <div className="flex justify-evenly items-center mt-10">
              {extra.map((something) => (
                <div
                  key={something.id}
                  className="flex flex-col justify-center items-center"
                >
                  <img src={something.image} alt="" className="h-10 w-10" />
                  <p className="font-medium md:text-[1rem] text-[9px]">
                    {something.name}
                  </p>
                </div>
              ))}
            </div>
            <div className="md:px-3 px-0 space-y-2 md:py-0 py-5">
              <h4 className="font-medium text-xl">Description</h4>
              <p className="font-medium">
                Lorem ipsum, dolor sit amet consectetur adipisicing elit. Natus
                impedit quae quibusdam placeat aspernatur maiores autem rem
                similique ullam, fugiat culpa magni vero pariatur at officiis
                quia obcaecati rerum corporis.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Page;
