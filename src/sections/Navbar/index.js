import React from "react";
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import imgNavbar from "../../assets/coffee 1.png";
import "../Navbar/style.css";
import "../../style/Global.css";
import AfterLogin from "./afterLogin";
import BeforeLogin from "./beforeLogin";
import NavMobile from "src/component/NavMobile";
import { useLocation } from "react-router-dom";

function Navbar() {
  const [login, setLogin] = useState(false);
  const [img, setImg] = useState("");
  const [showMobile, setShowMobile] = useState(false);
  const location = useLocation();

  const listMenuActive =
    "cursor-pointer mr-5 text-amber-800 text-md font-semibold border-b-2 border-amber-800 transition duration-300";
  const listMenuStyle =
    "cursor-pointer mr-5 hover:text-amber-800 text-md hover:font-semibold hover:border-amber-800  hover:border-b-2 transition duration-300";

  const navigate = useNavigate();
  useEffect(() => {
    if (localStorage.getItem("@userLogin")) {
      setLogin(true);
    } else {
      setLogin(false);
    }
  }, []);

  useEffect(() => {
    let dataUser = localStorage.getItem("@userLogin");
    if (dataUser !== "undefined") {
      dataUser = JSON.parse(dataUser);
    }
    // let role = dataUser
    //     ?.data
    //     ?.user
    //     ?.role
    // if (role === "admin") {
    //     setAdmin(true)
    // } else {
    //     setAdmin(false)
    // }
  }, []);

  const handleOnClick = (route) => {
    setImg(route);
    navigate(route);
  };

  return (
    <div className="flex justify-center w-full bg-white fixed top-0 z-50">
      <nav className="flex justify-center h-[60px] lg:h-[80px] items-center w-full">
        {showMobile ? (
          <div className="relative w-full bg-transparent">
            <div className="absolute w-[80%] h-[100vh] z-20 bg-[#F2F2F2] rounded-tr-[30px]">
              <NavMobile />
            </div>
          </div>
        ) : null}
        <div className="container">
          <div className="flex justify-between items-center p-2 w-full">
            <div
              className="flex items-center cursor-pointer"
              onClick={() => navigate("/")}
            >
              <img
                src={imgNavbar}
                className="md:w-7 md:h-7 w-[20px] h-[24px]"
                alt="coffe"
              />
              <h3 className="text-md md:text-xl md:ml-3 ml-2 text-[#0B132A] font-semibold">
                permana coffe
              </h3>
            </div>
            <div className="hidden md:flex">
              <p
                onClick={() => handleOnClick("/")}
                className={
                  location.pathname === "/" ? listMenuActive : listMenuStyle
                }
              >
                Home
              </p>
              <p
                onClick={() => handleOnClick("/products")}
                className={
                  location.pathname === "/products"
                    ? listMenuActive
                    : listMenuStyle
                }
              >
                Product
              </p>
              <p
                onClick={() => handleOnClick("/payment")}
                className={
                  location.pathname === "/payment"
                    ? listMenuActive
                    : listMenuStyle
                }
              >
                Your Cart
              </p>
              <p
                onClick={() => handleOnClick("/history")}
                className={
                  location.pathname === "/history"
                    ? listMenuActive
                    : listMenuStyle
                }
              >
                History
              </p>
            </div>
            <div className="hidden md:flex">
              {login ? <AfterLogin isLogin={img} /> : <BeforeLogin />}
            </div>
            <div className="md:hidden">
              {login ? (
                <img
                  onClick={() => setShowMobile(!showMobile)}
                  src={require("src/assets/hambuger-menu.png")}
                  alt="menu-icon"
                />
              ) : (
                <div>
                  <button
                    onClick={() => navigate("/loginpage")}
                    className="p-[6px] text-sm font-bold rounded-xl text-[#6A4029]"
                  >
                    Login
                  </button>
                  <button
                    onClick={() => navigate("/register")}
                    className="py-[4px] px-2 bg-[#FFBA33] text-sm text-[#6A4029] font-bold rounded-xl"
                  >
                    Signup
                  </button>
                </div>
              )}
            </div>
          </div>
        </div>
      </nav>
    </div>
  );
}

export default Navbar;
