/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect, useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import "src/component/CardProduct/style.css";
import axios from "axios";

function CardProduct(props) {
  const { isFilter, isSearch } = props;
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(false);

  const url = () => {
    if (isFilter !== "") {
      return `https://permana-coffee.cyclic.app/api/v1/products?cat=${isFilter}`;
    } else if (isSearch !== "") {
      return `https://permana-coffee.cyclic.app/api/v1/products?search=${isSearch}`;
    } else {
      return `https://permana-coffee.cyclic.app/api/v1/products`;
    }
  };

  const getData = () => {
    setLoading(true);
    axios
      .get(url())
      .then((res) => {
        setLoading(false);
        setData(res?.data?.data);
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
    <div>
      {!loading ? (
        <section className="list-product gap-5 gap-y-20">
          {data?.map((item, i) => (
            <Link
              key={i}
              className="card-list-product"
              to="/detailproduct"
              state={{ data: item }}
            >
              <img
                src={`https://permana-coffee.cyclic.app/upload/images/${item.images[0].filename}`}
                alt="Veggie-tomato"
                className="avatar rounded-full"
              />
              <h2 className="mt-20 text-center text-2xl font-bold w-[70%]">
                {item.tittle}
              </h2>
              <h3 className="text  text-secondary text-base font-semibold absolute bottom-6">
                IDR {item.price}
              </h3>
            </Link>
          ))}
        </section>
      ) : (
        <div className="w-full flex flex-wrap gap-5 gap-y-20">
          {[1, 2, 3, 4].map((item) => (
            <div className="p-5 rounded-3xl shadow-xl col-span-1 w-48 h-52 relative bg-white border">
              <div className="bg-slate-300 w-28 h-28 rounded-full absolute -top-14 right-8  animate-pulse"></div>
              <div className="p-2.5 rounded bg-slate-300 mt-12  animate-pulse"></div>
              <div className="p-2.5 rounded bg-slate-300 mt-2 w-1/2  animate-pulse"></div>
              <div className="p-2 rounded bg-slate-300 mt-12  animate-pulse"></div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

function CardProductAdmin(props) {
  const { isFilter, isSearch } = props;
  const navigate = useNavigate();
  const [data, setData] = useState([]);

  const url = () => {
    if (isFilter !== "") {
      return `https://permana-coffee.cyclic.app/api/v1/products?cat=${isFilter}`;
    } else if (isSearch !== "") {
      return `https://permana-coffee.cyclic.app/api/v1/products?search=${isSearch}`;
    } else {
      return `https://permana-coffee.cyclic.app/api/v1/products`;
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
  }, [isFilter]);

  const deleteCard = (id) => {
    let dataUser = localStorage.getItem("@userLogin");
    if (dataUser !== "undefined") {
      dataUser = JSON.parse(dataUser);
    }
    let token = dataUser?.data.token;
    axios
      .delete(`https://permana-coffee.cyclic.app/api/v1/products/${id}`, {
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
    <section className="list-product">
      {data?.map((item, i) => (
        <div key={i} className="card-list-product flex justify-between">
          <img
            src={`https://permana-coffee.cyclic.app/upload/images/${item.images[0].filename}`}
            alt="Veggie-tomato"
            className="avatar rounded-full"
          />
          <h2 className="mt-20 text-center text-2xl font-bold w-[70%]">
            {item.tittle}
          </h2>
          <h3 className="text  text-secondary text-base font-semibold absolute bottom-6">
            IDR {item.price}
          </h3>
          <Link to="/editproduct" state={{ data: item }}>
            <img
              className="absolute icon-edit "
              src={require("src/assets/circle-edit.png")}
              alt=""
            ></img>
            <img
              onClick={() => navigate("/editProduct")}
              className="absolute pena"
              src={require("src/assets/pena.png")}
              alt=""
            ></img>
          </Link>
          <button onClick={() => deleteCard(item.id)}>
            <img
              className="icon-delete"
              src={require("src/assets/delete-icon.png")}
              alt=""
            />
            <img
              className="icon-trash"
              src={require("src/assets/trash.png")}
              alt=""
            />
          </button>
        </div>
      ))}
    </section>
  );
}

export { CardProduct, CardProductAdmin };
