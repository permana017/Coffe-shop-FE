import React, { useEffect, useState } from "react";
import "src/style/Global.css";
import "src/sections/Product/style.css";
import { CardProduct, CardProductAdmin } from "src/component/CardProduct";
import { useNavigate } from "react-router-dom";
import search from "src/assets/search.svg";

function Product(props) {
  const navigate = useNavigate();
  const [admin, setAdmin] = useState(false);
  const [filter, setFilter] = useState("");
  const [getSearch, setGetSearch] = useState("");
  const listFilter = [
    { label: "Favorit Product", value: "" },
    { label: "Coffe", value: "Coffe" },
    { label: "Non Coffe", value: "Non Coffe" },
    { label: "Foods", value: "Foods" },
  ];
  const styleListFilter =
    "cool-link text-gray-400 font-bold hover:text-brown cursor-pointer";
  const styleFilterActive = "list-filter-active cursor-pointer";

  useEffect(() => {
    let dataUser = localStorage.getItem("@userLogin");
    if (dataUser !== "undefined") {
      dataUser = JSON.parse(dataUser);
    }
    let role = dataUser?.data?.user?.role;
    if (role === "admin") {
      setAdmin(true);
    } else {
      setAdmin(false);
    }
  }, [filter]);

  return (
    <div className="w-full">
      <main className="w-full flex justify-center border-t-[4px] border-[#9F9F9F]">
        <section className="p-0 flex max-w-[1440px] w-full">
          <section className="product-promo">
            <div className="flex flex-col items-start">
              <h3 className=" title text-secondary text-2xl font-semibold my-6 mt-20">
                Promo for you
              </h3>
              <p className=" mb-10 text-xs w-3/4">
                Coupons will be updated every weeks. Check them out!
              </p>
            </div>
            <div className="card-promo mt-14">
              <div className="inner rounded-xl">
                <div className="content-promo">
                  <img
                    src={require("src/assets/Beef-Spaghetti.webp")}
                    alt=""
                    width="128px"
                    height="128px"
                    className="rounded-full mt-10"
                  />
                  <h3 className="mb-0 text-xl font-semibold">Beef Spaghetti</h3>
                  <h3 className="m-0 text-xl font-semibold">20% OFF</h3>
                  <p className="text-sm mb-5 tw-250 my-5">
                    Buy 1 Choco Oreo and get 20% off for Beef Spaghetti
                  </p>
                  <hr width="100%" />
                </div>
                <div className="coupun-code">
                  <p className="mb-3 text-center text-base">COUPON CODE</p>
                  <h2 className="mb-3 text-center text-2xl font-semibold">
                    FNPR15RG
                  </h2>
                  <p className="m-0 text-center text-xs">
                    Valid untill October 10th 2020
                  </p>
                </div>
              </div>
              <div className="box-black rounded-xl"></div>
              <div className="box-brown rounded-xl"></div>
            </div>
            <button className="btn btn-secondary mt-12 mb-20 my-6 text-white">
              Apply Coupon
            </button>
            <div className="desc-product mb-5 ">
              <h5>Terms and Condition</h5>
              <p>
                1. You can only apply 1 coupon per day
                <br />
                2. It only for dine in
                <br />
                3. Buy 1 get 1 only for new user
                <br />
                4. Should make member card to apply coupon
                <br />
              </p>
            </div>
          </section>
          <section className="w-full p-5 lg:w-[70%] lg:pl-20 lg:pr-8 md:px-10">
            <nav className="w-full flex p-5">
              <ul className="flex w-full gap-10 justify-between px-10">
                {listFilter.map((item, i) => (
                  <li
                    key={i}
                    className={
                      item.value === filter
                        ? styleFilterActive
                        : styleListFilter
                    }
                    onClick={() => setFilter(item.value)}
                  >
                    {item.label}
                  </li>
                ))}
              </ul>
            </nav>
            <div className="py-3 w-[100%] flex justify-end">
              <div className="w-full md:w-1/2 flex  relative items-center">
                <div className="absolute top-[15px] left-4 border-r-2 border-[#4F5665] ">
                  <img src={search} width={20} alt="search" className="mr-2" />
                </div>
                <input
                  type="text"
                  placeholder="Search"
                  className="px-4 py-3 w-full bg-[#EFEEEE] rounded-full pl-12 focus:outline-none"
                  onChange={(e) => setGetSearch(e.target.value)}
                />
              </div>
            </div>
            <section className="mt-20 flex justify-center mb-10">
              {admin ? (
                <CardProductAdmin isFilter={filter} isSearch={getSearch} />
              ) : (
                <CardProduct isFilter={filter} isSearch={getSearch} />
              )}
              <div className="mt-20">
                {admin ? (
                  <div className="w-full flex justify-center">
                    <button
                      onClick={() => navigate("/newProduct")}
                      className="bottom-[40px] relative bg-yellow-800 hover:bg-yellow-900 hover:shadow-lg shadow-black-500/50 text-white font-bold py-7 px-7 rounded-xl text-xl w-full"
                    >
                      Add New Product
                    </button>
                  </div>
                ) : null}
              </div>
            </section>
          </section>
        </section>
      </main>
    </div>
  );
}

export default Product;
