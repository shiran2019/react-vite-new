// ----------------------------------------------------------------------

export default function Tabs(theme) {
  return {
    MuiTab: {
      styleOverrides: {
        root: {
          padding: 0,
          fontWeight: theme.typography.fontWeightMedium,
          borderRadius: 0,

          "&.Mui-selected": {
            color: theme.palette.text.primary,
          },
          "&:not(:last-of-type)": {
            marginRight: theme.spacing(0),
          },
          "@media (min-width: 600px)": {
            // minWidth: 48,
          },
        },
        labelIcon: {
          minHeight: 48,

          "& > *:first-of-type": {
            marginBottom: 0,
            marginRight: theme.spacing(1),
          },
        },
        wrapper: {
          whiteSpace: "nowrap",
        },
        textColorInherit: {
          opacity: 1,
          color: theme.palette.text.secondary,
        },
      },
    },
    MuiTabPanel: {
      styleOverrides: {
        root: {
          padding: 0,
        },
      },
    },
    MuiTabScrollButton: {
      styleOverrides: {
        root: {
          width: 48,
          borderRadius: "50%",
        },
      },
    },
  };
}
