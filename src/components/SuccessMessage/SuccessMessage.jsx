import Snackbar from "@mui/material/Snackbar";
import MuiAlert from "@mui/material/Alert";
import React from "react";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import { showMessage } from "../../reducers/successMessageSlice";

const Alert = React.forwardRef(function Alert(props, ref) {
  return <MuiAlert elevation={6} ref={ref} variant="filled" {...props} />;
});

const SuccessMessage = () => {
  const dispatch = useDispatch();
  const { isVisible, message, type } = useSelector((state) => state.success);

  const handleClose = () => {
    dispatch(
      showMessage({
        isVisible: false,
        message: "",
      })
    );
  };
  if (!isVisible) {
    return null; // If not loading, don't render anything
  }

  return (
    <Snackbar
      anchorOrigin={{
        vertical: "top",
        horizontal: "center",
      }}
      open={isVisible}
      autoHideDuration={6000}
      onClose={() => handleClose()}
      sx={{
        mt: {
          xs: 0,
          sm: -1.5,
          md: -1.5,
        },
      }}
    >
      <Alert
        onClose={() => handleClose()}
        severity={type}
        sx={{ width: "100%" }}
      >
        {message}
      </Alert>
    </Snackbar>
  );
};

export default SuccessMessage;
