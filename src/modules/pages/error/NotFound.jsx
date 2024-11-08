// views/pages/error/NotFound.js
import React from "react";
import { Button, Typography, Box } from "@mui/material";
import { useNavigate } from "react-router-dom";
import JsonAnimation from "../../../components/Lottie/JsonAnimation";
import notFound from "../../../assets/animations/404.json";

const NotFound = () => {
  const navigate = useNavigate();

  return (
    <Box
      display="flex"
      flexDirection="column"
      alignItems="center"
      justifyContent="center"
      height="100vh"
      textAlign="center"
    >
      <JsonAnimation height={200} width={"100%"} jsonAnimation={notFound} />
      <Typography variant="h3" gutterBottom>
        404 - Page Not Found
      </Typography>
      <Typography variant="body1" gutterBottom>
        The page you are looking for does not exist.
      </Typography>

      <Button
        variant="contained"
        onClick={() => navigate(-1)}
        sx={{ mt: 2, backgroundColor: "primary", borderRadius: "6px" }}
      >
        Go Back
      </Button>
    </Box>
  );
};

export default NotFound;
