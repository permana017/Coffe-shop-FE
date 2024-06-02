import React, { useRef } from "react";
import { Link } from "react-router-dom";

function NavMobile({ onClose, data }) {
  const drawerRef = useRef(null);
  const handleClickOutside = (e) => {
    if (drawerRef.current && !drawerRef.current.contains(e.target)) {
      onClose();
    }
  };

  const menus = [
    {
      label: "Edit Profile",
      path: "/profile",
    },
    {
      label: "Orders",
      path: "/payment",
    },
    {
      label: "Products",
      path: "/products",
    },
    {
      label: "History",
      path: "/history",
    },
  ];

  return (
    <div
      className="fixed top-0 left-0 bg-gray-900 w-full bg-opacity-50 z-50"
      onClick={handleClickOutside}
    >
      <div
        className="bg-[#F2F2F2]  w-60 h-[100vh] z-20  rounded-tr-xl"
        ref={drawerRef}
      >
        <div className="w-full bg-[#6A4029] rounded-r-xl">
          <div className="p-12 flex flex-col justify-center items-center ">
            <img
              src={data.image_url ?? require("src/assets/Ellipse 175.png")}
              alt="profile"
              className="w-28 h-28 rounded-full"
            />
            <p className="mt-3 font-bold text-[#fff]">{data.username}</p>
            <p className="text-[#fff]">{data?.email}</p>
          </div>
        </div>
        <div className="w-full">
          {menus.map((item, i) => (
            <Link to={item.path} key={i} className="flex p-5 border-b-[2px]">
              <p className="text-[#6A4029] font-semibold text-lg cursor-pointer">
                {item.label}
              </p>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}

export default NavMobile;
