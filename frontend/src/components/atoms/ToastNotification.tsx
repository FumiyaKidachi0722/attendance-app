// components/atoms/ToastNotification.tsx
import { toast } from "react-toastify";

export const ToastNotification = (props: {
  message: string;
  type: "success" | "error" | "info";
}) => {
  switch (props.type) {
    case "success":
      toast.success(props.message);
      break;
    case "error":
      toast.error(props.message);
      break;
    case "info":
      toast.info(props.message);
      break;
  }
};
