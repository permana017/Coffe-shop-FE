


import React from 'react'

function NavMobile() {
  return (
    <div >
        <div className='w-full bg-[#6A4029] rounded-r-[30px]'>
          <div className='p-12 flex flex-col justify-center items-center '>
              <img src={require("src/assets/Ellipse 175.png")} className="w-[104px] h-[104px]"/>
              <p className='mt-3 font-bold text-[#fff]'>Zulaikha</p>
              <p className='text-[#fff]'>zulaikha17@gmail.com</p>
          </div>
        </div>
        <div className='w-full'>
          <div className='flex p-5 border-b-[2px]'>
              {/* <img src={require("src/assets/icon-profile.png")} className="w-6 h-6"/> */}
              <p className='text-[#6A4029] font-semibold text-lg'>Edit Profile</p>
          </div>
          <div className='flex p-5 border-b-[2px]'>
              {/* <img src={require("src/assets/icon-profile.png")} className="w-6 h-6"/> */}
              <p className='text-[#6A4029] font-semibold text-lg'>Orders</p>
          </div>
          <div className='flex p-5 border-b-[2px]'>
              {/* <img src={require("src/assets/icon-profile.png")} className="w-6 h-6"/> */}
              <p className='text-[#6A4029] font-semibold text-lg'>Products</p>
          </div>
          <div className='flex p-5 border-b-[2px]'>
              {/* <img src={require("src/assets/icon-profile.png")} className="w-6 h-6"/> */}
              <p className='text-[#6A4029] font-semibold text-lg'>History</p>
          </div>
        </div>
    </div>
  )
}

export default NavMobile