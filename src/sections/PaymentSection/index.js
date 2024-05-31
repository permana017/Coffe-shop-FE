import React, { useEffect, useState } from "react";
import "src/sections/PaymentSection/style.css";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import BtnSecondary from "../../component/BtnSecondary";
import Loader from "../../component/Loader";

function PaymentSection() {
  const navigate = useNavigate();
  const isLoggin = localStorage.getItem("@userLogin");
  const [loading, setLoading] = useState(false);
  const baseUrlCloudinary = process.env.REACT_APP_CLOUDINARY_URL;

  if (!isLoggin) {
    navigate("/loginPage");
  }

  const [dataOrder, setDataOrder] = useState([]);
  useEffect(() => {
    let dataUser = localStorage.getItem("@dataOrder");
    if (dataUser !== "undefined") {
      dataUser = JSON.parse(dataUser);
      setDataOrder(dataUser);
    }
  }, []);

  const size = () => {
    if (dataOrder?.size === "R") {
      return "Regular";
    } else if (dataOrder?.size === "L") {
      return "Large";
    } else if (dataOrder?.size === "XL") {
      return "Xtra Large";
    }
  };

  const subtotal = Number(dataOrder?.price * dataOrder?.qty);
  const tax = subtotal * (10 / 100);

  const formUpload = {
    user_id: dataOrder?.user_id,
    product_id: dataOrder?.product_id,
    title: dataOrder?.title,
    price: Number(subtotal + tax + 10000),
    size: dataOrder?.size,
    qty: dataOrder?.qty,
    img: dataOrder?.img,
  };
  const handlePostOrder = () => {
    setLoading(true);
    axios
      .post(
        "https://permana-coffee.cyclic.app/api/v1/order",
        {
          ...formUpload,
        },
        {
          headers: {
            "Access-Control-Allow-Headers": "*",
            "content-type": "application/x-www-form-urlencoded",
          },
        }
      )
      .then((res) => {
        setLoading(false);
        toast.success("Payment Succes", {
          theme: "colored",
        });
      })
      .catch((err) => {
        setLoading(false);
        console.log(err);
      });
  };

  return (
    <div>
      <main className="payment-page">
        <section className="container mt-[80px]">
          <section className="w-full flex justify-between">
            <div className="w-[40%]">
              <h1 className="text-label text-left my-5 tw-60 text-white text-4xl">
                Checkout your item now!
              </h1>
              <section className=" bg-white w-full p-5 rounded-2xl">
                <h2 className="text-2xl font-bold mb-10 text-center">
                  Order Summary
                </h2>
                <div className="flex items-center my-5 justify-between ">
                  <img
                    src={`${baseUrlCloudinary}${dataOrder?.img}`}
                    alt="Hazelnut Latte"
                    width="82px"
                    className="rounded-xl mr-10 h-[75px]"
                  />
                  <div className="w-[50%]">
                    <p>{dataOrder?.title}</p>
                    <p>x {dataOrder?.qty}</p>
                    <p>{size()}</p>
                  </div>
                  <p>IDR {dataOrder?.price}</p>
                </div>
                <hr className="h-px mb-3 bg-gray-200 border-0 dark:bg-gray-700" />
                <div className="flex justify-between tw-100 my-1">
                  <p>SUBTOTAL</p>
                  <p>IDR {subtotal}</p>
                </div>
                <div className="flex justify-between tw-100 my-1">
                  <p>TAX & FEES</p>
                  <p>IDR {tax}</p>
                </div>
                <div className="flex justify-between tw-100 my-1">
                  <p>SHIPPING</p>
                  <p>IDR 10.000</p>
                </div>
                <div className="flex justify-between tw-100 my-4 text-3xl font-bold text-[#362115] mt-10">
                  <p>TOTAL</p>
                  <p>IDR {Number(subtotal + tax + 10000)}</p>
                </div>
              </section>
            </div>
            <div className="w-[40%]">
              <div className="mt-10">
                <h3 className="font-bold text-2xl text-[#FFFFFF] -mt-1">
                  Address details
                </h3>
                <div className="card-address bg-[#FFFFFF] rounded-xl p-5">
                  <p className="font-bold text-xl my-3">
                    Delivery to Iskandar Street
                  </p>
                  <p className="text-xl my-3">
                    Km 5 refinery road oppsite re public road, effurun, Jakarta
                  </p>
                  <p className="text-xl my-3">+62 81348287878</p>
                </div>
                <h3 className="mt-10 font-bold text-2xl text-[#FFFFFF] my-5">
                  Payment method
                </h3>
                <form className="card-payment-method bg-[#FFFFFF] rounded-xl p-5">
                  <div className="flex items-center my-5">
                    <input
                      id="default-radio-1"
                      type="radio"
                      value=""
                      name="default-radio"
                      className="w-4 h-4 accent-[#6A4029]"
                    />
                    <img
                      className="bg-[#F47B0A] w-10 p-2 rounded mx-3"
                      src={require("src/assets/Vector-card-atm.png")}
                      alt="card-atm"
                    />
                    <label
                      for="default-radio-1"
                      className="text-lg font-medium text-[#000000]"
                    >
                      Card
                    </label>
                  </div>
                  <div className="flex items-center my-5">
                    <input
                      id="default-radio-2"
                      type="radio"
                      value=""
                      name="default-radio"
                      className="w-4 h-4 accent-[#6A4029]"
                    />
                    <img
                      className="bg-[#895537] w-10 p-3 h-9 rounded mx-3"
                      src={require("src/assets/icon-bank.png")}
                      alt="card-atm"
                    />
                    <label
                      for="default-radio-2"
                      className="text-lg font-medium  text-[#000000]"
                    >
                      Bank account
                    </label>
                  </div>
                  <div className="flex items-center my-5">
                    <input
                      id="default-radio-2"
                      type="radio"
                      value=""
                      name="default-radio"
                      className="w-4 h-4 accent-[#6A4029]"
                    />
                    <img
                      className="bg-[#FFBA33] w-10 p-2 rounded mx-3"
                      src={require("src/assets/icon-delivery.png")}
                      alt="card-atm"
                    />
                    <label
                      for="default-radio-2"
                      className="text-lg font-medium  text-[#000000]"
                    >
                      Cash on delivery
                    </label>
                  </div>
                </form>
                <div className="pt-5 pb-10">
                  {loading ? (
                    <BtnSecondary py="py-4">
                      <div className="flex items-center gap-2 justify-center">
                        <Loader color="white" /> Loading
                      </div>
                    </BtnSecondary>
                  ) : (
                    <BtnSecondary py="py-4" onClick={handlePostOrder}>
                      Confirm and Pay
                    </BtnSecondary>
                  )}
                </div>
              </div>
            </div>
          </section>
        </section>
      </main>
      <ToastContainer />
    </div>
  );
}

export default PaymentSection;
