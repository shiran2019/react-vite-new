export default function TextField(theme) {
    return {
      MuiTextField: {
        styleOverrides: {
          root: {
            // Styles for the base state of all TextField variants
            backgroundColor:"white",
            border : "1px solid #D4D4D4",
            outline : "none",
            
  
            '&.Mui-disabled': {
              '& svg': { color: theme.palette.text.disabled },
            },
            '& .MuiInputBase-input': {
              '&::placeholder': {
                opacity: 1,
                color: theme.palette.text.disabled,
              },
            },
          },
        },
      },
      MuiInput: {
        styleOverrides: {
          // Styles specific to the standard variant
          underline: {
            '&:before': {
              borderBottomColor: theme.palette.grey[500_56],
            },
          },
        },
      },
      MuiFilledInput: {
        styleOverrides: {
          // Styles specific to the filled variant
          root: {
            backgroundColor: theme.palette.grey[500_12],
            '&:hover': {
              backgroundColor: theme.palette.grey[500_16],
              border : "1px solid red",
            },
            '&.Mui-focused': {
              backgroundColor: theme.palette.action.focus,
            },
            '&.Mui-disabled': {
              backgroundColor: theme.palette.action.disabledBackground,
            },
          },
          underline: {
            '&:before': {
              borderBottomColor: theme.palette.grey[500_56],
            },
          },
        },
      },
      MuiOutlinedInput: {
        styleOverrides: {
          // Styles specific to the outlined variant
          root: {
            '& .MuiOutlinedInput-notchedOutline': {
              borderColor: theme.palette.grey[500_32],
            },
            '&.Mui-disabled': {
              '& .MuiOutlinedInput-notchedOutline': {
                borderColor: theme.palette.action.disabledBackground,
              },
            },
          },
        },
      },
    };
  }
  
  