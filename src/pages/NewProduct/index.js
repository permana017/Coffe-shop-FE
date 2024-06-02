import React, { useEffect, useState } from "react";
import Navbar from "src/sections/Navbar";
import "src/style/Global.css";
import Footer from "src/sections/Footer";
import axios from "axios";
import BtnPrimary from "../../component/BtnPrimary";
import BtnSecondary from "../../component/BtnSecondary";
import { useLocation, useNavigate } from "react-router-dom";
import Input from "../../component/Input";

function NewProduct() {
  let dataUser = localStorage.getItem("@userLogin");
  if (dataUser !== "undefined") {
    dataUser = JSON.parse(dataUser);
  }
  const [img, setImg] = useState("");
  const baseUrl = process.env.REACT_APP_API_URL;
  const navigate = useNavigate();
  const location = useLocation();
  let productItem = location?.state?.data;
  let token = dataUser?.data?.token;
  const baseUrlCloudinary = process.env.REACT_APP_CLOUDINARY_URL;
  const [data, setData] = useState({
    tittle: "",
    description: "",
    category: "",
    price: "",
    image: "",
  });
  useEffect(() => {
    if (productItem) {
      setData({
        ...data,
        tittle: productItem.tittle,
        category: productItem.category,
        price: productItem.price,
        description: productItem.description,
      });
      setImg(`${baseUrlCloudinary}${productItem.images[0].filename}`);
    }
  }, []);

  const handleChangeInput = (e) => {
    // eslint-disable-next-line eqeqeq
    const { value, name } = e.target;
    if (name === "image") {
      let file = e.target.files[0];
      let fileReader = new FileReader();
      fileReader.onload = (e) => {
        const { result } = e.target;
        setImg(result);
      };
      fileReader.readAsDataURL(file);
      setData({ ...data, [name]: file });
    } else {
      setData({ ...data, [name]: value });
    }
  };

  const onSubmit = async (e) => {
    e.preventDefault();
    let config = {
      headers: {
        "Access-Control-Allow-Headers": "*",
        "content-type": "multipart/form-data",
        token: token,
      },
    };
    try {
      productItem
        ? await axios.put(`${baseUrl}products/${productItem.id}`, data, config)
        : await axios.post(`${baseUrl}products`, data, config);
      alert("add Product Success");
      navigate("/products");
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <div>
      <Navbar />
      <div className="flex justify-center mt-24">
        <div className="container">
          <div className="flex w-full flex-col md:flex-row xl:gap-36 gap-10 xl:px-28">
            <section className="flex flex-col w-full md:w-[40%]">
              <div className="flex flex-col items-center mb-5">
                {img ? (
                  <img
                    src={img}
                    alt="Img-product"
                    className="relative rounded-full w-60 h-60"
                  />
                ) : (
                  <div className="bg-gray-300 w-60 h-60 rounded-full flex justify-center items-center">
                    <img
                      src={require("src/assets/photo-camera-black-tool 4 (1).webp")}
                      alt="iconCamera"
                      className="w-14 h-12"
                    />
                  </div>
                )}
              </div>
              <div className="flex flex-col gap-2">
                <div>
                  <input
                    type="file"
                    accept="image/*"
                    id="file"
                    name="image"
                    onChange={handleChangeInput}
                  />
                  <label
                    for="file"
                    className="btn3 btn-primary py-2.5 flex w-full justify-center"
                  >
                    Choose from gallery
                  </label>
                </div>
                <BtnPrimary color="text-white" bg="bg-[#0b132a]">
                  Take a Picture
                </BtnPrimary>
              </div>
              <div className="hidden md:flex flex-col mt-10">
                <label for="delivery-hour" className="text-lg font-semibold">
                  Delevery Hours:
                </label>
                <input
                  placeholder="select start hours"
                  className="border-solid border-2 rounded p-2.5"
                  disabled
                ></input>
                <input
                  placeholder="select end hours"
                  className="border-solid border-2 rounded p-2.5 mt-2"
                  disabled
                ></input>
              </div>
              <div className="hidden md:flex flex-col my-5">
                <label for="delivery-hour" className="text-lg font-bold">
                  Input Stok:
                </label>
                <input
                  placeholder="select start hours"
                  className="border-solid border-2 rounded p-2.5"
                  disabled
                ></input>
              </div>
            </section>
            <section className="flex flex-col w-full md:w-[60%]">
              <Input
                onChange={handleChangeInput}
                label="Name :"
                placeholder="Type product name min. 50 characters"
                name="tittle"
                value={data.tittle}
              />
              <Input
                onChange={handleChangeInput}
                label="Price :"
                placeholder="Type the price"
                name="price"
                value={data.price}
              />
              <div className="flex flex-col mb-4">
                <label
                  for="category"
                  className=" text-lg font-bold text-[#6A4029]"
                >
                  Category:
                </label>
                <select
                  name="category"
                  id="category"
                  value={data.category}
                  onChange={handleChangeInput}
                  className="border-b-2 py-2.5 px-3 outline-none focus:border-b-[#6A4029]"
                >
                  <option value="coffe">Coffe</option>
                  <option value="food">Food</option>
                  <option value="nonCoffe">Non Coffe</option>
                </select>
              </div>
              <Input
                onChange={handleChangeInput}
                label="Description :"
                placeholder="Type the price"
                name="description"
                value={data.description}
              />
              <div className="flex flex-col">
                <p className="font-bold text-lg text-[#6A4029]">
                  Input delivery methods :
                </p>
                <p className="text-[#9F9F9F]">
                  Click methods you want to use for this product
                </p>
                <div className="mt-3 flex gap-3 mb-10">
                  {["R", "L", "XL"].map((item, i) => (
                    <button
                      key={i}
                      type="button"
                      disabled
                      className="bg-amber-400 w-14 h-14 rounded-full font-bold text-xl text-[#6A4029] cursor-no-drop opacity-70"
                    >
                      {item}
                    </button>
                  ))}
                </div>
              </div>
              {/* <div className="flex flex-col mt-8 ">
                <label for="delivery-hour" className="text-xl font-bold">
                  Input delivery methods:
                </label>
                <input
                  placeholder="Click size you want to use for this product"
                  className="py-1 px-3 mt-3"
                ></input>
              </div> */}
              {/* <div className="mt-3 flex">
                <button
                  type="button"
                  className="bg-amber-400 hover:bg-amber-500 mr-3 hover:shadow-lg shadow-black-500/50 text-white font-bold py-4 px-7 rounded-xl text-xl"
                >
                  Home Delivery
                </button>
                <button
                  type="button"
                  className="bg-amber-400 hover:bg-amber-500 mr-3 hover:shadow-lg shadow-black-500/50 text-white font-bold py-4 px-7 rounded-xl text-xl"
                >
                  Home Delivery
                </button>
                <button
                  type="button"
                  className="bg-amber-400 hover:bg-amber-500 mr-3 hover:shadow-lg shadow-black-500/50 text-white font-bold py-4 px-5 rounded-xl text-xl"
                >
                  Take away
                </button>
              </div> */}
              <div className="flex flex-col gap-3">
                <BtnSecondary
                  type="submit"
                  py="py-3"
                  onClick={(e) => onSubmit(e)}
                >
                  Save Product
                </BtnSecondary>
                <BtnPrimary
                  py="py-3"
                  bg="bg-slate-300"
                  color="text-slate-600"
                  onClick={() => navigate("/products")}
                >
                  Cancle
                </BtnPrimary>
              </div>
            </section>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default NewProduct;
