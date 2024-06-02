import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import "src/component/CardProduct/style.css";
import axios from "axios";

function ListProductPublic(props) {
  const baseUrl = process.env.REACT_APP_API_URL;
  const { isFilter, isSearch } = props;
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(false);

  const baseUrlCloudinary =
    "https://res.cloudinary.com/dvponahlp/image/upload/v1716968148/";

  const url = () => {
    if (isFilter !== "") {
      return `${baseUrl}products?cat=${isFilter}`;
    } else if (isSearch !== "") {
      return `${baseUrl}products?search=${isSearch}`;
    } else {
      return `${baseUrl}products`;
    }
  };

  const getData = () => {
    setLoading(true);
    axios
      .get(url())
      .then((res) => {
        setLoading(false);
        setData(res?.data?.data);
        console.log(data);
      })
      .catch((err) => {
        console.log(err);
        setLoading(false);
      });
  };

  useEffect(() => {
    getData();
  }, [isFilter, isSearch]);

  return (
    <div className="w-full">
      {!loading ? (
        <section className="w-full grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-5 gap-y-20">
          {data?.map((item, i) => (
            <Link
              to="/detailproduct"
              state={{ data: item }}
              key={i}
              className="bg-white rounded-2xl flex flex-col items-center relative p-4 justify-end border shadow-lg"
            >
              <img
                src={`${baseUrlCloudinary}${item.images[0].filename}`}
                alt={item?.images[0]?.filename}
                className="w-28 h-28 md:w-32 md:h-32 rounded-full bg-white absolute -top-12"
              />
              <div className="mt-20">
                <h2 className="text-center text-xl font-bold mb-5">
                  {item.tittle}
                </h2>
                <h3 className="text-center text-secondary font-semibold bottom-6">
                  IDR {item.price}
                </h3>
              </div>
            </Link>
          ))}
        </section>
      ) : (
        <section className="w-full grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-5 gap-y-20">
          {[1, 2, 3, 4].map((item) => (
            <div className="p-5 rounded-3xl shadow-xl col-span-1 h-52 relative bg-white border ">
              <div className="flex justify-center">
                <div className="bg-slate-300 w-28 h-28 rounded-full -mt-20 animate-pulse"></div>
              </div>
              <div className="p-2.5 rounded bg-slate-300 mt-5 animate-pulse"></div>
              <div className="p-2.5 rounded bg-slate-300 mt-2 w-1/2  animate-pulse"></div>
              <div className="p-2 rounded bg-slate-300 mt-12  animate-pulse"></div>
            </div>
          ))}
        </section>
      )}
    </div>
  );
}

export default ListProductPublic;
