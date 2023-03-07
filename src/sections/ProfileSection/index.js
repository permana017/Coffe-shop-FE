import React from "react";
import "src/sections/ProfileSection/style.css"

function ProfileSection() {
    return (
        <div>
            <main className="bg-profile">
                <div className="container">
                    <div className="text-3xl mt-16 text-white font-bold">User Profile</div>
                    <div
                        className="bg-[#F8F8F8] w-full h-[951px] mt-10 mb-20 rounded-3xl p-12 flex">
                        <div className=" w-[35%] h-full flex justify-center p-10">
                            <div className="w-full flex items-center flex-col px-8">
                                <div className="text-center">
                                    <img
                                        className="mb-3"
                                        src={require("src/assets/Ellipse-176.webp")}
                                        alt="profile"/>
                                    <p className="">Zulaikha</p>
                                    <p>zulaikha17@gmail.com</p>
                                </div>
                                <button className="px-0 btn3 btn-primary btn-block py-3  mt-5">
                                    Choose photo
                                </button>
                                <button className="px-0 btn3 btn-secondary btn-block py-3 mt-3 ">
                                    Choose photo
                                </button>
                                <button
                                    className="border-2 border-[#9F9F9F] rounded-xl py-4 w-full my-10 text-xl text-[#6A4029] font-bold">
                                    Edit Password
                                </button>
                                <p className="text-xl text-center text-xl font-bold text-[#6A4029]">Do you want to save the change?</p>
                                <button className="px-0 btn3 btn-secondary btn-block py-4 mt-10 rounded-xl ">
                                    Choose photo
                                </button>
                                <button className="px-0 btn3 btn-primary  btn-block py-4 mt-3 rounded-xl">
                                    Choose photo
                                </button>
                            </div>
                        </div>
                        <div
                            className="bg-[#fff] w-[65%] h-full rounded-2xl shadow-xl px-5 py-3 flex flex-col">
                            <div className="flex">
                                <div className="w-[50%]">
                                    <div className="flex flex-col">
                                        <p className="text-[#4F5665] font-bold text-2xl">Contacts</p>
                                        <label className="text-xl text-[#9F9F9F] mt-10">Email adress :</label>
                                        <input
                                            placeholder=""
                                            value="zulaikha17@gmail.com"
                                            className="border-b-2 text-xl"/>
                                        <label className="text-xl text-[#9F9F9F] mt-10">Delivery adress :</label>
                                        <textarea
                                            placeholder=""
                                            value="Iskandar Street no. 67 Block A Near Bus Stop"
                                            className="border-b-2 text-xl"/>
                                    </div>
                                    <div className="flex flex-col mt-10">
                                        <p className="text-[#4F5665] font-bold text-2xl">Details</p>
                                        <label className="text-xl text-[#9F9F9F] mt-10">Display name :</label>
                                        <input placeholder="" value="Zulaikha" className="border-b-2 text-xl"/>
                                        <label className="text-xl text-[#9F9F9F] mt-10">First name :</label>
                                        <input placeholder="" value="Zulaikha" className="border-b-2 text-xl"/>
                                        <label className="text-xl text-[#9F9F9F] mt-10">Last name :</label>
                                        <input placeholder="" value="Nirmala" className="border-b-2 text-xl"/>
                                    </div>
                                </div>
                                <div className="w-[50%] px-10">
                                    <div className="flex flex-col mt-8">
                                        <label className="text-xl text-[#9F9F9F] mt-10">Mobile number :</label>
                                        <input placeholder="" value="(+62)813456782" className="border-b-2 text-xl"/>
                                    </div>
                                    <div className="flex flex-col mt-60">
                                        <label className="text-xl text-[#9F9F9F]">DD/MM/YY</label>
                                        <input placeholder="" value="03/04/90" className="border-b-2 text-xl"/>
                                    </div>
                                </div>
                            </div>
                            <form className="flex mt-16 justify-center">
                                
                                <div className="flex items-center">
                                    <input
                                    type="radio"
                                    className="w-4 h-4 accent-[#6A4029] text-[#9F9F9F] " placeholder=""/>
                                    <label className="text-[#9F9F9F] ml-3">
                                        Male 
                                    </label>
                                </div>
                                <div className="flex items-center ml-10">
                                    <input type="radio" className="w-4 h-4 accent-[#6A4029]" placeholder=""/>
                                    <label className="text-[#9F9F9F] ml-3">
                                        Female
                                    </label>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </main>
        </div>
    )
}

export default ProfileSection