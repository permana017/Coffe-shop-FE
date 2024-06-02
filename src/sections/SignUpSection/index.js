import React, { useState } from "react";
import "src/style/Global.css";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import Input from "../../component/Input/index";
import BtnPrimary from "../../component/BtnPrimary/index";
import SweetAlert from "../../plugin/SweatAlert";
import { ToastContainer, toast } from "react-toastify";
import Loader from "../../component/Loader/index";

function SignupSection() {
  const baseUrl = process.env.REACT_APP_API_URL;
  const [showAlert, setShowAlert] = useState(false);
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();
  const [data, setData] = useState({
    username: "",
    email: "",
    password: "",
    phone: "",
  });
  const handleInput = (e) => {
    e.preventDefault();
    const { name, value } = e.target;
    setData({ ...data, [name]: value });
  };
  const handlePost = (e) => {
    e.preventDefault();
    if (data.email) {
      postDataUser();
    } else {
      toast.error("Email cannot be empty", {
        theme: "colored",
      });
    }
  };
  const postDataUser = () => {
    setLoading(true);
    axios
      .post(
        `${baseUrl}auth/register`,
        {
          ...data,
        },
        {
          headers: {
            "Access-Control-Allow-Headers": "*",
            "content-type": "application/x-www-form-urlencoded",
          },
        }
      )
      .then((res) => {
        setShowAlert(true);
        setLoading(false);
      })
      .catch((err) => {
        setLoading(false);
        toast.error(err?.response?.data?.message, {
          theme: "colored",
        });
      });
  };
  return (
    <div className="overflow-hidden h-[100vh]">
      <ToastContainer />
      <main className="w-full flex h-[100vh]">
        <section className="auth-bg w-[60%]"></section>
        <section className="w-full md:w-[40%] flex flex-col overflow-auto h-[100vh]">
          <nav className="flex w-full justify-between p-5 md:p-10 md:py-7">
            <div className="brand" onClick={() => navigate("/")}>
              <img
                src={require("src/assets/coffee 1.png")}
                alt=""
                className="w-[20px] h-[20px] hover:cursor-pointer"
              />
              <h3 className="text-lg md:text-xl font-bold hover:cursor-pointer">
                PermanaCoffe
              </h3>
            </div>
            <button
              onClick={() => navigate("/loginpage")}
              className="btn-primary rounded-full flex items-center md:py-2 py-1 md:px-7 px-4 font-semibold"
            >
              Login
            </button>
          </nav>
          <form
            onSubmit={handlePost}
            className="p-5 md:px-10 xl:px-20 flex flex-col gap-3 h-full justify-center"
          >
            <p className="text-center font-bold text-brown text-2xl  mb-5">
              SignUp
            </p>
            <div>
              <Input
                outline
                label="Username :"
                onChange={handleInput}
                placeholder="Enter your username"
                type="text"
                name="username"
                id="username"
              />
              <Input
                outline
                label="Email :"
                onChange={handleInput}
                placeholder="Enter your email"
                type="email"
                name="email"
                id="email"
              />
              <Input
                outline
                label="Password :"
                onChange={handleInput}
                placeholder="Enter your password"
                type="password"
                id="password"
                name="password"
              />
              <Input
                outline
                label="Phone Number :"
                onChange={handleInput}
                placeholder="Enter your phone number"
                type="number"
                id="phone"
                name="phone"
              />
            </div>
            {!loading ? (
              <BtnPrimary py="py-3" type="submit">
                Sign Up
              </BtnPrimary>
            ) : (
              <BtnPrimary py="py-3" type="button">
                <div className="flex justify-center gap-1.5 items-center">
                  <Loader size={18} />
                  Loading...
                </div>
              </BtnPrimary>
            )}
            {/* <div>
                            <hr width="100%" color="#C4C4C4" className="h-px my-8 bg-gray-200 border-0 dark:bg-gray-700" />
                            <div className="text-account top-[-44px]">Already have an account?</div>
                        </div>
                        <button
                            className="flex w-full justify-center p-4 text-lg font-bold shadow-md mb-5 z-40 relative hover:shadow-xl duration-1000">
                            <img src={require("src/assets/google-icon.png")} alt="google-icon" width="27px" height="28px" className="mr-10" />
                            Login with Google
                        </button> */}
          </form>
        </section>
      </main>
      <SweetAlert
        show={showAlert}
        title="Successfully registered!"
        text="Successfully registered to continue please log in"
        type="success"
        isConfirmed={() => navigate("/loginpage")}
        showConfirmButton={true}
        confirmButtonText="Login"
      />
    </div>
  );
}

export default SignupSection;
