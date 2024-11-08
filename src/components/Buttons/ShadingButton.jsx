import { Button } from "@mui/material";
import { styled } from "@mui/system";


// Corrected BlueButton styling
const BlueButton = styled(Button)({
  background:
    "linear-gradient(90deg, #3C9BD1 0%, #135097 100%)", // Correct gradient background
  borderRadius: "3px", // Remove border radius
  color: "white", // Ensure text is visible on the gradient
  textTransform: "none", // Disable default uppercase button text transformation
  boxShadow: "none", // Remove any default button shadow


  "&:hover": {
    
    boxShadow: "none",
    background:
      "linear-gradient(90deg, #368cbc 0%, #114888 100%)", // Correct gradient background
  },
});


export default function ShadingButton(props) {
  return <BlueButton {...props}> {props.children} </BlueButton>;
}
