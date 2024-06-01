import React, { useEffect, useState } from "react";
import "src/sections/HistorySection/style.css";
import "src/style/Global.css";
import axios from "axios";
import { useNavigate } from "react-router";

function HistoryPage() {
  const navigate = useNavigate();
  const baseUrl = process.env.REACT_APP_API_URL;
  const baseUrlCloudinary = process.env.REACT_APP_CLOUDINARY_URL;
  const [idUser, setIdUser] = useState("");
  const [data, setData] = useState([]);
  const isLoggin = localStorage.getItem("@userLogin");
  if (!isLoggin) {
    navigate("/loginPage");
  }
  useEffect(() => {
    getData();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [idUser]);

  useEffect(() => {
    let dataUser = localStorage?.getItem("@userLogin");
    if (dataUser !== "undefined") {
      dataUser = JSON.parse(dataUser);
    }
    setIdUser(dataUser?.data?.user?.id);
  }, []);

  const getData = () => {
    if (idUser !== "") {
      axios
        .get(`${baseUrl}order/${idUser}`)
        .then((res) => {
          setData(res.data.data);
        })
        .catch((err) => console.log(err));
    }
  };

  return (
    <div>
      <main className="history-page min-h-[100vh]">
        <section className="container mt-[150px]">
          <section className="text-white">
            <h1 className="text-label text-center mb-3">
              Let’s see what you have bought!
            </h1>
            <p className="text-center m-0">Select to delete item</p>
          </section>
          <section className="grid grid-cols-3 gap-5 p-10">
            {data.map((item, i) => (
              <div
                className="bg-white p-3 flex gap-5 items-center rounded-lg w-full"
                key={i}
              >
                <div>
                  <img
                    src={`${baseUrlCloudinary}${item.img}`}
                    alt="Veggie-tomato-mix"
                    className="rounded-full w-16 h-16 bg-red-300"
                  />
                </div>
                <div className="w-full">
                  <h2 className="text-lg font-bold">{item.title}</h2>
                  <p className="text-secondary text-sm font-semibold">
                    IDR {item.price}
                  </p>
                  <div className="flex items-center justify-between">
                    <p className="text-sm text-secondary">Delivered</p>
                    <input type="checkbox" className="w-4 h-4" />
                  </div>
                </div>
              </div>
            ))}
          </section>
        </section>
      </main>
    </div>
  );
}

export default HistoryPage;
