import toast from "react-hot-toast";
import { COLORS } from "./colorPalette";

export const createToastError = (message?: string) => {
  return toast.error(message ?? "Error", {
    duration: 10000,
    position: "bottom-right",
    style: {
      borderRadius: 0,
      borderWidth: "1px",
      borderColor: COLORS.greenLight,
      backgroundColor: COLORS.black,
      color: COLORS.white,
    },
  });
};

export const createToastSuccess = (message?: string) => {
  return toast.success(message ?? "Error", {
    duration: 10000,
    position: "bottom-right",
    style: {
      borderRadius: 0,
      borderWidth: "1px",
      borderColor: COLORS.greenLight,
      backgroundColor: COLORS.black,
      color: COLORS.white,
    },
  });
};
