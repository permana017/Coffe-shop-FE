import React, { useEffect, useState } from "react";
import "src/style/Global.css";
import "src/sections/Product/style.css";
import {
  CardProduct,
  CardProductAdmin,
  ListProductAdmin,
  ListProductPublic,
} from "src/component/CardProduct";
import { useNavigate } from "react-router-dom";
import search from "src/assets/search.svg";
import BtnSecondary from "../../component/BtnSecondary";

function Product(props) {
  const navigate = useNavigate();
  const [admin, setAdmin] = useState(false);
  const [filter, setFilter] = useState("");
  const [getSearch, setGetSearch] = useState("");
  const listFilter = [
    { label: "Favorit Product", value: "" },
    { label: "Coffe", value: "coffe" },
    { label: "Non Coffe", value: "nonCoffe" },
    { label: "Foods", value: "food" },
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
        <section className="container flex">
          <section className="border-r-4 p-5 hidden lg:flex lg:w-[30%] flex-col items-center gap-5">
            <div className="w-3/4">
              <p className="text-xl font-bold mb-5 text-[#6A4029] text-center">
                Promo for you
              </p>
              <p className="text-sm text-center">
                Coupons will be updated every weeks. Check them out!
              </p>
              <div className="mt-5">
                <div className="bg-[#FFCB65] rounded-xl p-5 flex flex-col items-center mb-5">
                  <img
                    src={require("src/assets/Beef-Spaghetti.webp")}
                    alt=""
                    width="120px"
                    height="120px"
                    className="rounded-full mb-5 "
                  />
                  <h3 className="mb-0 text-xl font-semibold">Beef Spaghetti</h3>
                  <h3 className="m-0 text-xl font-semibold">20% OFF</h3>
                  <p className="text-xs mb-5 my-5 text-center">
                    Buy 1 Choco Oreo and get 20% off for Beef Spaghetti
                  </p>
                  <hr width="100%" />
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
                {/* <div className="box-black rounded-xl"></div>
              <div className="box-brown rounded-xl"></div> */}
              </div>
              <BtnSecondary>Apply Coupon</BtnSecondary>
            </div>
            <div className="text-xs text-[#4F5665]">
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
          <section className="w-full mt-12 lg:mt-0 p-1 lg:w-[70%] lg:pl-14 lg:pr-8">
            <nav className="w-full flex p-5 justify-center">
              <ul className="flex w-full lg:w-2/3 justify-between ">
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
            <div className="w-full flex justify-end">
              <div className="w-full md:w-1/2 flex relative items-center">
                <div className="absolute top-[12px] left-4 border-r-2 border-[#4F5665]">
                  <img src={search} width={20} alt="search" className="mr-2" />
                </div>
                <input
                  type="text"
                  placeholder="Search"
                  className="px-4 py-2.5 w-full bg-[#EFEEEE] rounded-full pl-12 focus:outline-none"
                  onChange={(e) => setGetSearch(e.target.value)}
                />
              </div>
            </div>
            <section className="mt-20 flex justify-center mb-10">
              {admin ? (
                <ListProductAdmin
                  isFilter={filter}
                  isSearch={getSearch}
                  isAdmin={admin}
                />
              ) : (
                <ListProductPublic isFilter={filter} isSearch={getSearch} />
              )}
            </section>
          </section>
        </section>
      </main>
    </div>
  );
}

export default Product;
