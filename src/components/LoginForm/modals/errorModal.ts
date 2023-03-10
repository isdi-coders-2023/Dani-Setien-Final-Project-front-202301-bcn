import "react-toastify/dist/ReactToastify.css";
import { toast } from "react-toastify";

const displayErrorModal = (message: string) => {
  toast.error(message, {
    position: "top-center",
    closeOnClick: true,
    autoClose: false,
    className: "toast-error",
  });
};

export default displayErrorModal;
