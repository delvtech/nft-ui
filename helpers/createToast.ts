import toast from "react-hot-toast";
import { COLORS } from "./colorPalette";

export const createToastError = (message?: string) => {
  return toast.error(message ?? "Error", {
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

export const createToastSuccess = (message?: string) => {
  return toast.success(message ?? "Success", {
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
