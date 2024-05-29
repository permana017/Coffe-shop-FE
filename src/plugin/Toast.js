import React, { useEffect } from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Toast = ({ message, type, show, onClose }) => {
  const showToast = () => {
    toast[type](message, {
      onClose: onClose,
      theme: "colored",
    });
  };
  useEffect(() => {
    if (show) {
      showToast();
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [show]);

  return (
    <div>
      <ToastContainer />
    </div>
  );
};

export default Toast;
