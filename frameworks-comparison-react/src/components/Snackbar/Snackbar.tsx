import React from "react";
import "./Snackbar.scss";
import { useDispatch } from "react-redux";
import { clearMessage } from "../../redux/actions/message";

interface SnackbarProps {
  message: string;
  type: "error" | "success";
  isVisible: boolean;
  onClose: any;
}

const Snackbar = ({ message, type, onClose }: SnackbarProps) => {
  const dispatch: any = useDispatch();

  React.useEffect(() => {
    const timeout = setTimeout(() => {
      dispatch(clearMessage());
      onClose();
    }, 3000);

    return () => clearTimeout(timeout);
  }, [message]);

  return <>{message && <div className={[`snackbar ${message ? "show" : ""}`, `snackbar-${type}`].join(" ")}>{message}</div>}</>;
};

export default Snackbar;
