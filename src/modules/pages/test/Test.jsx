import { Box } from "@mui/material";
import { useEffect } from "react";
import { showLoadingAnimation } from "../../../app/loadingAnimationController";
import { showAlertMessage } from "../../../app/alertMessageController";

const Test = () => {
  useEffect(() => {
    // showLoadingAnimation({ message: "Please Wait..." });
    showAlertMessage({
      message: "Hello",
      type: "success",
    });
  }, []);

  return (
    <Box
      sx={{
        backgroundColor: "#6d6d6d",
        width: "100%",
        height: "100vh",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      Test
    </Box>
  );
};

export default Test;
