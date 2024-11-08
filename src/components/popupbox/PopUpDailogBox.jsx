import React from "react";
import { Box, Button, Dialog, IconButton, Typography } from "@mui/material";
import { useNavigate } from "react-router-dom";

function PopUpDialogBox({ show, setShow, message, onConfirm }) {
  const [open, setOpen] = React.useState(false);

  // const navigate = useNavigate();

  const handleClose = () => {
    setOpen(false);
    setShow(false);
  };

  React.useEffect(() => {
    setOpen(show);
  }, [show]);

  return (
    <Dialog //confirmation modal
      open={open}
      onClose={handleClose}
      maxWidth="sm"
      slotProps={{
        backdrop: {
          sx: {
            background: "rgba(0,0,0,0.4)",
          },
        },
      }}
    >
      <Box
        sx={{
          minWidth: "100%",

          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
          padding: { sm: 6, xs: 3 },
          gap: 2,
        }}
      >
        {/* <Box
          component={"img"}
          src={tick}
          sx={{
            width: { sm: 100, xs: 80 },
            height: { sm: 100, xs: 80 },
          }}
        /> */}
        {/* <IconButton
      
           
                backgroundColor="primary"
                sx={{
                 
                  background: "primary",
                  "&:hover": {
                    background: "primary",
                  },
                }}
        >
          <DoneIcon />
        </IconButton> */}
        <Typography
          sx={{
            fontFamily: "Arial",
            fontSize: { sm: "15px", xs: "12px" },
            fontWeight: 400,
            textAlign: "center",
          }}
        >
          <b>{message}</b>
        </Typography>
        <Box
          sx={{
            width: "100%",
            px: { md: 6, sm: 3, xs: 1 },
          }}
        >
          <Typography
            sx={{
              fontFamily: "Arial",
              fontSize: { xs: "10px" },
              fontWeight: 400,
              textAlign: "center",
              color: "#757575",
            }}
          >
            {/* Lorem Ipsum Generator */}
          </Typography>
        </Box>
        <Box
          sx={{
            display: "flex",
            gap: { sm: 5, xs: 2 },
            mt: 1,
          }}
        >
          <Button
            sx={{
              width: { sm: 100, xs: 80 },
              height: { sm: 35, xs: 25 },
              border: "1px solid d1001f",
              borderRadius: "5px",
              background: "#D98220",
              "&:hover": {
                background: "#985b16",
                color: "#FFFFFF",
              },
            }}
            onClick={handleClose}
          >
            <Typography
              sx={{
                ontFamily: "Arial",
                fontSize: { sm: 13, xs: 10 },
                fontWeight: 400,
                color: "#FFFFFF",
              }}
            >
              No
            </Typography>
          </Button>
          <Button
            variant="contained"
            color="primary"
            sx={{
              width: { sm: 100, xs: 80 },
              height: { sm: 35, xs: 25 },
              border: "1px solid #499641",
              borderRadius: "5px",
              background: "#499641",
              "&:hover": {
                background: "#33692e",
                color: "#FFFFFF",
              },
            }}
            onClick={() => {
              onConfirm(); // Call the confirmation action
              handleClose(); // Close dialog after confirmation
            }}
          >
            <Typography
              sx={{
                fontFamily: "Arial",
                fontSize: { sm: 13, xs: 10 },
                fontWeight: 400,
                color: "#FFFFFF",
              }}
            >
              Yes
            </Typography>
          </Button>
        </Box>
      </Box>
    </Dialog>
  );
}

export default PopUpDialogBox;
