import React from "react";

function NavMobile({ onClose }) {
  return (
    <div
      className="fixed top-0 left-0 bg-gray-900 w-full bg-opacity-50 z-50"
      onClick={onClose}
    >
      <div className="bg-[#F2F2F2]  w-60 h-[100vh] z-20  rounded-tr-xl">
        <div className="w-full bg-[#6A4029] rounded-r-xl">
          <div className="p-12 flex flex-col justify-center items-center ">
            <img
              src={require("src/assets/Ellipse 175.png")}
              alt="profile"
              className="w-[104px] h-[104px]"
            />
            <p className="mt-3 font-bold text-[#fff]">Zulaikha</p>
            <p className="text-[#fff]">zulaikha17@gmail.com</p>
          </div>
        </div>
        <div className="w-full">
          <div className="flex p-5 border-b-[2px]">
            <p className="text-[#6A4029] font-semibold text-lg cursor-pointer">
              Edit Profile
            </p>
          </div>
          <div className="flex p-5 border-b-[2px]">
            <p className="text-[#6A4029] font-semibold text-lg cursor-pointer">
              Orders
            </p>
          </div>
          <div className="flex p-5 border-b-[2px]">
            <p className="text-[#6A4029] font-semibold text-lg cursor-pointer">
              Products
            </p>
          </div>
          <div className="flex p-5 border-b-[2px]">
            <p className="text-[#6A4029] font-semibold text-lg cursor-pointer">
              History
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default NavMobile;
