import React, { useEffect, useState } from "react";
import "src/style/Global.css";
import "../../sections/LoginSection/style.css";
import { signIn } from "src/redux/Auth/authAction";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import Input from "../../component/Input/index";
import BtnPrimary from "../../component/BtnPrimary/index";
import Toast from "../../plugin/Toast";
import Loader from "../../component/Loader/index";

function Login() {
  const navigate = useNavigate();
  const [toast, setToast] = useState({
    show: false,
    msg: "",
    type: "",
  });
  const { auth } = useSelector((state) => state);
  const dispatch = useDispatch();
  const [loginForm, setLoginForm] = useState({ email: "", password: "" });
  useEffect(() => {
    let dataUser = localStorage.getItem("@userLogin");
    if (dataUser !== "undefined") {
      dataUser = JSON.parse(dataUser);
    }
    let token = dataUser?.data?.token;
    if (token) {
      navigate("/products");
    }
    if (auth.error) {
      setToast({ ...toast, msg: auth.error, show: true, type: "error" });
    }
    console.log("auth", auth);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [auth]);

  const handleLogin = (event) => {
    event.preventDefault();
    dispatch(signIn(loginForm)).catch((err) => {
      console.log("err", err);
    });
  };

  return (
    <div>
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
              onClick={() => navigate("/register")}
              className="btn-primary rounded-full flex items-center md:py-2 py-1 md:px-7 px-4 font-semibold"
            >
              SignUp
            </button>
          </nav>
          <form
            onSubmit={handleLogin}
            className="h-[calc(100vh-100px)] flex flex-col justify-center items-center"
          >
            <p className="text-center font-bold text-brown text-2xl mb-5">
              Login
            </p>
            <div className="p-5 md:px-10 xl:px-20 flex flex-col gap-4 w-full">
              <Input
                label="Email :"
                onChange={(e) =>
                  setLoginForm({ ...loginForm, email: e.target.value })
                }
                placeholder="Enter your email"
                type="email"
                name="email"
                id="email"
              />
              <Input
                label="Password :"
                onChange={(e) =>
                  setLoginForm({ ...loginForm, password: e.target.value })
                }
                placeholder="Enter your password"
                type="password"
                id="password"
                name="password"
              />
              {!auth.loading ? (
                <BtnPrimary type="submit" py="py-3">
                  Login
                </BtnPrimary>
              ) : (
                <BtnPrimary type="button">
                  <div className="flex w-full justify-center items-center gap-1">
                    <Loader size="16px" /> Loading...
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
            </div>
            <Toast
              message={toast.msg}
              type={toast.type}
              show={toast.show}
              onClose={() => setToast({ ...toast, show: false })}
            />
          </form>
        </section>
      </main>
    </div>
  );
}

export default Login;
