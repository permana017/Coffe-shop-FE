import React, { useState, useEffect } from "react";
import "src/sections/ProfileSection/style.css";
import axios from "axios";
import avatar from "src/assets/PngItem_786293.png";
import Input from "../../component/Input";
import InputTextArea from "../../component/TextArea";
import BtnPrimary from "../../component/BtnPrimary";
import BtnSecondary from "../../component/BtnSecondary";
import { useNavigate } from "react-router-dom";

const BtnEdit = ({ onClick }) => {
  return (
    <button onClick={onClick} className="bg-[#6A4029] p-2 rounded-full">
      <img src={require("src/assets/pena.png")} className="w-3 h-3" alt="" />
    </button>
  );
};

function ProfileSection() {
  const [dataId, setDataId] = useState("");
  const [defaultData, setDefaultData] = useState([]);
  const [imgDisplay, setImgDisplay] = useState("");
  const [isEdit, setIsEdit] = useState({
    contact: false,
    detail: false,
  });
  const baseUrl = process.env.REACT_APP_API_URL;
  const navigate = useNavigate();
  useEffect(() => {
    let dataUser = localStorage.getItem("@userLogin");
    if (dataUser !== "undefined") {
      dataUser = JSON.parse(dataUser);
      setDataId(dataUser?.data?.user?.id);
    }
  }, []);

  const [formEdit, setFormEdit] = useState({
    username: "",
    email: "",
    phone: "",
    address: "",
    img: "",
    image_url: "",
  });

  const fetchData = () => {
    axios
      .get(`${baseUrl}users/${dataId}`)
      .then(function (response) {
        setDefaultData(response.data.data);
      })
      .catch(function (error) {
        console.log(error);
      });
  };

  const setDefaultForm = () => {
    if (defaultData) {
      setFormEdit({
        ...formEdit,
        address: defaultData.address,
        email: defaultData.email,
        username: defaultData.username,
        phone: defaultData.phone,
        img: defaultData.img,
      });
    }
  };

  useEffect(() => {
    setDefaultForm();
  }, [defaultData]);

  useEffect(() => {
    if (dataId !== "") {
      fetchData();
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [dataId]);

  const handleInputImg = (e) => {
    e.preventDefault();
    const file = e.target.files[0];
    setFormEdit({ ...formEdit, img: file });
    setImgDisplay(URL.createObjectURL(file));
  };

  const handleEdit = () => {
    const body = new FormData();
    body.append("username", formEdit.username);
    body.append("email", formEdit.email);
    body.append("phone", formEdit.phone);
    body.append("address", formEdit.address);
    body.append("img", formEdit.img);
    axios
      .patch(`${baseUrl}users/${dataId}`, body, {
        method: "PATCH",
        headers: {
          "Content-type": "multipart/form-data",
        },
      })
      .then(function (response) {
        alert("success update data");
        fetchData();
      })
      .catch(function (error) {
        console.log(error);
      });
  };

  const imageSrc = () => {
    if (imgDisplay) return imgDisplay;
    if (defaultData.image_url) return defaultData.image_url;
    return avatar;
  };

  const handleChangeInput = (e) => {
    const { name, value } = e.target;
    setFormEdit({
      ...formEdit,
      [name]: value,
    });
  };

  const handleCancleEdit = () => {
    setIsEdit({
      ...isEdit,
      contact: false,
      detail: false,
    });
    setDefaultForm();
  };

  const onLogout = () => {
    localStorage.removeItem("@userLogin");
    navigate("/");
  };

  return (
    <div>
      <main className="bg-profile mt-[60px] lg:mt-20 py-10">
        <div className="container flex flex-col gap-5">
          <p className="text-2xl text-white font-bold">User Profile</p>
          <div className="flex flex-col lg:flex-row justify-between lg:mb-10 gap-5">
            <div className="bg-white flex flex-col items-center justify-between w-full lg:w-[25%] rounded-lg p-5 py-8">
              <div className="flex flex-col items-center">
                <div className="relative">
                  <img
                    className="mb-3 rounded-full w-28 h-28"
                    src={imageSrc()}
                    alt="profile"
                  />
                  <div className="absolute bottom-2 right-0">
                    <label htmlFor="editImage">
                      <div className="bg-[#6A4029] p-2 rounded-full cursor-pointer">
                        <img
                          src={require("src/assets/pena.png")}
                          className="w-3 h-3"
                          alt=""
                        ></img>
                      </div>
                    </label>
                    <input
                      type="file"
                      id="editImage"
                      onChange={handleInputImg}
                    />
                  </div>
                </div>
                <p className="font-bold text-lg">{defaultData?.username}</p>
                <p className="text-sm">{defaultData.email}</p>
              </div>
              <p className="text-sm mt-6">Has been ordered 15 products</p>
            </div>
            <div className="bg-[#fff] w-full lg:w-[70%] rounded-lg shadow-xl p-5 flex flex-col">
              <div className="mb-5 flex justify-between">
                <p className="text-[#4F5665] font-bold text-xl">Contacts</p>
                {!isEdit.contact && (
                  <BtnEdit
                    onClick={() => setIsEdit({ ...isEdit, contact: true })}
                  />
                )}
              </div>
              <div className="grid lg:grid-cols-2 gap-10 gap-y-3">
                <Input
                  label="Email Address :"
                  placeholder="Input ypur email"
                  type="email"
                  disabled={!isEdit.contact}
                  value={formEdit.email}
                  name="email"
                  onChange={handleChangeInput}
                />
                <Input
                  label="Mobile number :"
                  placeholder="Input your mobile number"
                  disabled={!isEdit.contact}
                  value={formEdit.phone}
                  name="phone"
                  onChange={handleChangeInput}
                />

                <InputTextArea
                  label="Delivery adress :"
                  placeholder="Input your delivery address"
                  disabled={!isEdit.contact}
                  value={formEdit.address}
                  name="address"
                  onChange={handleChangeInput}
                />
              </div>
            </div>
          </div>
          <div className="flex flex-col lg:flex-row justify-between">
            <div className="bg-[#fff] w-full lg:w-[70%] rounded-lg shadow-xl p-5 flex flex-col">
              <div className="mb-5 flex justify-between">
                <p className="text-[#4F5665] font-bold text-xl">Details</p>
                {!isEdit.detail && (
                  <BtnEdit
                    onClick={() => setIsEdit({ ...isEdit, detail: true })}
                  />
                )}
              </div>
              <div className="grid lg:grid-cols-2 gap-10 gap-y-3">
                <Input
                  label="Display name :"
                  placeholder="Input your display name"
                  value={formEdit.username}
                  disabled={!isEdit.detail}
                  name="username"
                  onChange={handleChangeInput}
                />
                <Input
                  label="Birthday"
                  placeholder="DD/MMMM/YYYY"
                  type="date"
                  disabled
                />
                <Input
                  label="First name :"
                  placeholder="Input your first name"
                  disabled
                />
                <div className="flex flex-col">
                  {["Male", "Female"].map((item, i) => (
                    <div key={i} className="flex items-center">
                      <input
                        disabled
                        type="radio"
                        className="w-4 h-4 accent-[#6A4029] text-[#9F9F9F] outline-2"
                      />
                      <label className="text-[#6A4029] ml-3">{item}</label>
                    </div>
                  ))}
                </div>
                <Input
                  label="Last Name :"
                  placeholder="Input your last name"
                  disabled
                />
              </div>
            </div>
            <div className="flex flex-col gap-3 w-full lg:w-[25%] rounded-lg p-2">
              <p className="text-lg text-white text-center font-semibold">
                Do you want to save the change?
              </p>
              <BtnSecondary onClick={handleEdit}>Save Change</BtnSecondary>
              <BtnPrimary onClick={handleCancleEdit}>Cancel</BtnPrimary>
              <button className="p-2.5 bg-white rounded-lg text-[#6A4029] border-2 border-[#6A4029]">
                Edit Password
              </button>
              <button
                onClick={onLogout}
                className="p-2.5 bg-white rounded-lg text-[#6A4029] border-2 border-[#6A4029]"
              >
                Logout
              </button>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}

export default ProfileSection;
