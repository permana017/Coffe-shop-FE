/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";

function ListProductAdmin(props) {
  const { isFilter, isSearch, isAdmin } = props;
  const navigate = useNavigate();
  const [data, setData] = useState([]);
  const baseUrl = process.env.REACT_APP_API_URL;

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
    axios
      .get(url())
      .then((res) => {
        setData(res.data.data);
      })
      .catch((err) => console.log(err));
  };

  useEffect(() => {
    getData();
  }, [isFilter, isSearch]);

  const deleteCard = (id) => {
    let dataUser = localStorage.getItem("@userLogin");
    if (dataUser !== "undefined") {
      dataUser = JSON.parse(dataUser);
    }
    let token = dataUser?.data.token;
    axios
      .delete(`${baseUrl}products/${id}`, {
        headers: {
          "Access-Control-Allow-Headers": "*",
          "content-type": "multipart/form-data",
          token: token,
        },
      })

      .then((res) => {
        alert("Succes Deleted");
        getData();
      })
      .catch((err) => console.log(err.response.data.message));
  };
  return (
    <section className="w-full">
      <div className="w-full grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-5 gap-y-20">
        {data?.map((item, i) => (
          <div
            key={i}
            className="bg-white rounded-2xl flex flex-col items-center relative p-5 justify-end border shadow-lg"
          >
            <img
              src={`${baseUrlCloudinary}${item.images[0].filename}`}
              alt={item?.images[0]?.filename}
              className="w-28 h-28 md:w-32 md:h-32 rounded-full bg-white absolute -top-12"
            />
            <div className="mt-20">
              <h2 className="text-center text-xl font-bold mb-3">
                {item.tittle}
              </h2>
              <h3 className="text-center text-secondary font-semibold bottom-6 mb-4">
                IDR {item.price}
              </h3>
            </div>
            <div className="absolute -bottom-5 right-0 flex gap-1">
              <button onClick={() => deleteCard(item.id)}>
                <div className="border-4 border-[#FFBA33] p-1 rounded-full bg-white">
                  <img
                    className="h-4 w-4"
                    src={require("src/assets/trash.png")}
                    alt="icon-trash"
                  />
                </div>
              </button>
              <Link to="/editproduct" state={{ data: item }}>
                <div className="bg-[#6A4029] p-2 rounded-full">
                  <img
                    onClick={() => navigate("/editProduct")}
                    src={require("src/assets/pena.png")}
                    className="w-4 h-4"
                    alt=""
                  ></img>
                </div>
              </Link>
            </div>
          </div>
        ))}
      </div>
      <div className="mt-20">
        {isAdmin ? (
          <div className="w-full flex justify-center">
            <button
              onClick={() => navigate("/newProduct")}
              className="bg-yellow-900 text-white font-bold p-3 text-lg w-full rounded-lg"
            >
              Add New Product
            </button>
          </div>
        ) : null}
      </div>
    </section>
  );
}

export default ListProductAdmin;
