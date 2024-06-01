import React from "react";
import "src/style/Global.css";
import "src/sections/ProductDetail/style.css";
import { useLocation, useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";
import BtnSecondary from "../../component/BtnSecondary";
import { ToastContainer, toast } from "react-toastify";

function ProductDetail() {
  const navigate = useNavigate();
  const location = useLocation();
  let data = location?.state?.data;
  const [btnactive, setBtnactive] = useState("");
  const [qty, setQty] = useState(0);
  const [dataId, setDataId] = useState("");
  const btnSizeStylePicked = "bg-orange rounded-full h-12 w-12 font-semibold";
  const btnSizeStyle =
    "bg-[#F4F4F8] text-[#9F9F9F] rounded-full h-12 w-12 font-semibold";
  const baseUrlCloudinary = process.env.REACT_APP_CLOUDINARY_URL;

  useEffect(() => {
    let dataUser = localStorage.getItem("@userLogin");
    if (dataUser !== "undefined") {
      dataUser = JSON.parse(dataUser);
      setDataId(dataUser?.data?.user?.id);
    }
  }, []);

  const total = Number(data?.price) * qty;

  const dataOrder = {
    user_id: dataId,
    product_id: data?.id,
    title: data.tittle,
    price: total,
    size: btnactive,
    qty: qty,
    img: data?.images[0].filename,
  };

  const handleOrder = () => {
    let isLoggin = localStorage.getItem("@userLogin");
    if (!isLoggin) {
      navigate("/loginPage");
    } else {
      if (btnactive === "") {
        toast.warning("Choose a size", {
          theme: "colored",
        });
      } else {
        if (qty) {
          navigate("/payment");
          localStorage.setItem("@dataOrder", JSON.stringify(dataOrder));
        } else {
          toast.warning("Add a Qty", {
            theme: "colored",
          });
        }
      }
    }
  };

  const handleClickQty = (type) => {
    if (size()) {
      if (type === "increment") {
        setQty(qty + 1);
      } else if (type === "decrement") {
        console.log("dikurang");
        if (qty > 0) {
          setQty(qty - 1);
        }
      }
    } else {
      toast.warning("Choose a size", {
        theme: "colored",
      });
    }
  };

  const size = () => {
    if (btnactive === "R") {
      return "Regular";
    } else if (btnactive === "L") {
      return "Large";
    } else if (btnactive === "XL") {
      return "Xtra Large";
    } else {
      return false;
    }
  };

  return (
    <div className="mt-20">
      <main className="detail-product min-h-[calc(100vh-80px)]">
        <div className="container flex flex-col items-center">
          <section className="flex w-full py-10 gap-10 justify-between">
            <section className=" w-[40%] flex flex-col items-center">
              <div className="px-5 mb-3">
                <img
                  src={`${baseUrlCloudinary}${data?.images[0]?.filename}`}
                  alt="cold-brew"
                  width="100%"
                  className="rounded-full w-[250px] h-[250px]"
                />
              </div>
              <h1 className="text-4xl font-bold my-1">
                {location?.state?.data?.tittle}
              </h1>
              <h3 className="text-2xl m-0 text-center font-semibold">
                IDR {location?.state?.data?.price}
              </h3>
              <div className="px-10 w-full mt-5 flex flex-col gap-4">
                {/* <BtnPrimary onClick={handleOrder} py="py-3">
                  Add to Cart
                </BtnPrimary> */}
                <BtnSecondary py="py-3">Ask a Staff</BtnSecondary>
              </div>
            </section>
            <section className="w-[50%]">
              <div className="bg-white p-5 rounded-xl">
                <p className="text-gray-500 text-base">
                  Delivery only on Monday to friday at 1 - 7 pm
                </p>
                <p className="text-brown text-lg">{data.description}</p>
                <h4 className="text-center font-semibold text-lg mt-3">
                  Choose a size
                </h4>
                <div className="flex w-full justify-center gap-3 my-3">
                  {["R", "L", "XL"].map((item, i) => (
                    <button
                      key={i}
                      className={
                        btnactive === item ? btnSizeStylePicked : btnSizeStyle
                      }
                      onClick={() => setBtnactive(item)}
                    >
                      {item}
                    </button>
                  ))}
                </div>
              </div>
              <h4 className="text-center text-block text-xl font-bold mt-5 mb-3">
                Choose Delivery Methods
              </h4>
              <div className="w-full flex justify-center">
                <button className="py-3 cursor-not-allowed px-3 rounded-xl mr-3 bg-[#F4F4F8] text-[#9F9F9F]">
                  Dine in
                </button>
                <button className="py-3 cursor-not-allowed px-3 rounded-xl mr-3 bg-[#6A4029] text-white">
                  Door Delivery
                </button>
                <button className="py-3 cursor-not-allowed px-3 rounded-xl mr-3 bg-[#F4F4F8] text-[#9F9F9F]">
                  Pick up
                </button>
              </div>
              {/* <div className="">
                <label for="set-time" className="mr-2">
                  Set time :
                </label>
                <input
                  id="set-time"
                  type="text"
                  placeholder="Enter the time you’ll arrived"
                  className="bg-[#bcbaba] border-b border-black p-1"
                />
              </div> */}
            </section>
          </section>
          <section className="flex w-full mb-10 justify-between ">
            <div className="flex w-[70%] bg-[#FFFFFF] p-4 rounded-xl justify-between shadow-md">
              <div className="flex items-center">
                <img
                  src={`${baseUrlCloudinary}${data?.images[0]?.filename}`}
                  alt="cold-brew"
                  className="rounded-full w-20 h-20 mr-12"
                />
                <div className="">
                  <p className="text-xl font-black">{data.tittle}</p>
                  {btnactive !== "" ? (
                    <p className="text-base font-normal">
                      x{qty} ({size()})
                    </p>
                  ) : (
                    "-"
                  )}
                </div>
              </div>
              <div className="flex items-center">
                <button
                  onClick={() => handleClickQty("decrement")}
                  className="h-8 w-8 flex items-center font-black text-3xl justify-center bg-[#E7AA3685] rounded-full"
                >
                  -
                </button>
                <p className="mx-5 font-black text-2xl w-5">{qty}</p>
                <button
                  onClick={() => handleClickQty("increment")}
                  className="h-8 w-8 flex items-center font-black text-3xl justify-center bg-[#E7AA3685] rounded-full"
                >
                  +
                </button>
              </div>
            </div>
            <div className="w-[25%] shadow-md rounded-2xl ">
              <button
                onClick={handleOrder}
                className="btn-primary w-full h-full bg-green-900 rounded-2xl font-semibold text-2xl"
              >
                CHECKOUT
              </button>
            </div>
          </section>
        </div>
      </main>
      <ToastContainer />
    </div>
  );
}

export default ProductDetail;
