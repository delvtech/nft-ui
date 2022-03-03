import toast from "react-hot-toast";
import { ToastOptions } from "react-hot-toast/dist/core/types";
import { COLORS } from "./colorPalette";

export const createToastError = (message?: string, options?: ToastOptions) => {
  return toast.error(message ?? "Error", {
    ...options,
    duration: 5000,
    position: "bottom-right",
    style: {
      borderRadius: 0,
      borderWidth: "1px",
      borderColor: COLORS.greenLight,
      backgroundColor: COLORS.black,
      color: COLORS.white,
      fontFamily: "Defcon Zero",
      fontSize: "14px",
    },
  });
};

export const createToastSuccess = (
  message?: string,
  options?: ToastOptions,
) => {
  return toast.success(message ?? "Success", {
    ...options,
    duration: 5000,
    position: "bottom-right",
    style: {
      borderRadius: 0,
      borderWidth: "1px",
      borderColor: COLORS.greenLight,
      backgroundColor: COLORS.black,
      color: COLORS.white,
      fontFamily: "Defcon Zero",
      fontSize: "14px",
    },
  });
};

export const createToastLoading = (
  message?: string,
  options?: ToastOptions,
) => {
  return toast.loading(message ?? "Loading", {
    ...options,
    duration: 5000,
    position: "bottom-right",
    style: {
      borderRadius: 0,
      borderWidth: "1px",
      borderColor: COLORS.greenLight,
      backgroundColor: COLORS.black,
      color: COLORS.white,
      fontFamily: "Defcon Zero",
      fontSize: "14px",
    },
  });
};
