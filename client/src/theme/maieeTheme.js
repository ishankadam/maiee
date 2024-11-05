/* eslint-disable no-dupe-keys */
import { createTheme } from "@mui/material/styles";

export const timewrapTheme = createTheme({
  breakpoints: {
    values: {
      xs: 0,
      sm: 600,
      md: 900,
      lg: 1200,
      xl: 1536,
    },
  },

  palette: {
    primary: {
      light: "#9BBCF6",
      main: "#3779EE",
      contrastText: "#fff",
    },
    primaryDark: {
      main: "#0F46AA",
      dark: "#061E45",
      contrastText: "#fff",
    },
    primaryLight: {
      main: "#bcd2ff",
      light: "#ebf2ff",
      contrastText: "#fff",
    },
    secondary: {
      light: "#548bb1",
      main: "#548bb1",
      dark: "#08273C",
    },
    surfaceLight: {
      main: "#fff",
      dark: "#fafafa",
    },
    primaryButton: {
      main: "#3779EE",
    },
    secondaryButton: {
      main: "#cccccc",
    },
    chipApproved: {
      main: "#edffd5",
      contrastText: "#7ea740",
    },
    chipRejected: {
      main: "#ffe6ea",
      contrastText: "#dc2342",
    },
    chipPendding: {
      main: "#fff6cb",
      contrastText: "#865800",
    },

    // error: {
    //     main: '#D00028',
    // },
    // success: {
    //     main: '#41C300',
    // },
  },
  props: {
    MuiTypography: {
      variantMapping: {
        h1: "h1",
        h2: "h2",
        h3: "h3",
        h4: "h4",
        h5: "h5",
        h6: "h6",
        subtitle1: "p",
        subtitle2: "p",
        body1: "p",
        body2: "span",
      },
    },
    MuiButtonBase: {
      disableRipple: true,
    },
    MuiButton: {
      disableRipple: true,
    },
    MuiRadio: {
      disableRipple: true,
    },
    MuiCheckbox: {
      disableRipple: true,
    },
    MuiSwitch: {
      disableRipple: true,
    },
    MuiToggleButton: {
      disableFocusRipple: true,
      disableRipple: true,
    },
  },
  typography: {
    fontFamily: [
      "roboto-condensed-regular",
      "roboto-regular",
      "sans-serif",
    ].join(","),
    h1: {
      marginBottom: "1rem",
      fontSize: "2.5rem",
      fontWeight: 500,
      letterSpacing: "1px",
    },
    h2: {
      marginBottom: "1rem",
      fontSize: "2rem",
      fontWeight: 500,
      letterSpacing: "1px",
    },
    h3: {
      marginBottom: "1rem",
      fontStretch: "condensed",
      fontSize: "1.75rem",
      fontWeight: 600,
      letterSpacing: "1px",
    },
    h4: {
      fontFamily: ["roboto-regular"],
      marginBottom: "1rem",
      fontSize: "1.25rem",
      fontWeight: 500,
      letterSpacing: "1px",
    },
    h5: {
      fontFamily: ["roboto-regular"],
      marginBottom: "1rem",
      fontSize: "0.875rem",
      fontWeight: 500,
      letterSpacing: "1px",
    },
    h6: {
      fontFamily: ["roboto-regular"],
      fontSize: "0.75rem",
      fontWeight: 500,
      letterSpacing: "0.36px",
      marginBottom: 0,
    },
    body1: {
      fontFamily: ["roboto-regular"],
      fontSize: "1rem",
      fontWeight: 400,
      letterSpacing: "1px ",
    },
    body2: {
      fontFamily: ["roboto-regular"],
      fontSize: "1rem",
      fontWeight: 300,
      letterSpacing: "1px ",
    },
  },
  components: {
    MuiButton: {
      styleOverrides: {
        root: {
          padding: "12px 30px",
          fontSize: 16,
          borderRadius: "8px",
          lineHeight: 1.31,
          letterSpacing: "0.48px",
        },
        sizeSmall: {
          padding: "10px 30px!important",
          fontSize: 16,
          borderRadius: "8px",
          lineHeight: 1,
          letterSpacing: "0.48px",
        },
        containedPrimary: {
          "&:hover": {
            backgroundColor: "#9bbcf6",
            color: "#061e45",
          },
        },
        outlinedPrimary: {
          height: "2.0rem",
        },
      },
    },

    MuiTextField: {
      styleOverrides: {
        root: {
          width: "100%",
        },
      },
    },

    MuiInputBase: {
      styleOverrides: {
        root: {
          fontSize: "1rem",
        },
        inputMultiline: {
          padding: "4px 0",
          marginTop: 0,
          "& .MuiInputBase-root": {
            padding: 0,
          },
          "& .MuiInputLabel-root": {
            padding: 0,
          },
          "& .MuiFormHelperText-root": {
            position: "absolute",
            bottom: -20, // Adjust as needed to position error message correctly
          },
        },
      },
    },

    MuiOutlinedInput: {
      styleOverrides: {
        root: {
          "&$focused $notchedOutline": {
            borderColor: "#333",
            borderWidth: "1px",
          },
          marginBottom: 0,
        },
        notchedOutline: {
          borderColor: "#ccc!important",
          fontFamily: ["roboto-regular"],
        },
        input: {
          font: "icon",
          fontSize: "13px",
          fontFamily: ["roboto-regular"],
          padding: "11px 15px",
        },
        // multiline: {
        //   padding: "15px 10px",
        // },
      },
    },

    MuiCardContent: {
      styleOverrides: {
        root: {
          "&:last-child": {
            paddingBottom: "1rem",
          },
        },
      },
    },

    MuiSnackbar: {
      styleOverrides: {
        root: {
          // top: "13%",
          // left: "50%!important",
          transform: "translate(-50%, -50%)",
          height: "fit-content",
        },
        anchorOriginTopCenter: {
          "@media (min-width: 320px)": {
            top: "65px",
          },
        },
      },
    },

    MuiAlert: {
      styleOverrides: {
        root: {
          alignItems: "center",
          marginBottom: "0",
        },
        filledError: {
          color: "#dc2342",
          backgroundColor: "#ffe6ea",
        },
        filledSuccess: {
          backgroundColor: "#edffd5",
          color: "#7ea740",
        },
        filledInfo: {
          backgroundColor: "#edf7ff",
          color: "#4279a6",
        },
        message: {
          fontFamily: ["roboto-medium"],
          fontSize: "1rem",
          lineHeight: 1.2,
          whiteSpace: "nowrap",
          "@media (max-width: 767px)": {
            fontSize: "12px",
          },
        },
        standardError: {
          color: "#dc2342 !important",
          backgroundColor: "#ffe6ea",
        },
        standardSuccess: {
          color: "#7ea740 !important",
          backgroundColor: "#edffd5",
        },
        action: {
          padding: "0px",
        },
        icon: {
          color: "inherit !important",
        },
      },
    },

    MuiTableContainer: {
      styleOverrides: {
        root: {
          borderRadius: "8px",
          width: "98%",
          margin: "0  16px",
          position: "relative",
          zIndex: 0,
          // marginBottom: "2rem",
          maxHeight: "inherit!important",
          height: "100%!important",
          maxWidth: "inherit!important",
        },
      },
    },

    // MuiTableHead: {
    //     styleOverrides: {
    //         root: {
    //             borderBottom: '1px solid #9bbcf6',
    //             backgroundColor: '#3779EE',
    //         },
    //     },
    // },

    MuiTableRow: {
      styleOverrides: {
        root: {
          borderBottom: "1px solid #eff1f8",
          zIndex: "0 !important",
          "&:hover": {
            backgroundColor: "#f9f9f9",
          },
        },
        head: {
          backgroundColor: "#efefef",
        },
      },
    },

    MuiTableCell: {
      styleOverrides: {
        root: {
          fontFamily: ["roboto-regular"],
          fontSize: "1rem",
          lineHeight: 1.33,
          color: "#333",
          borderBottom: "none",
          fontWeight: "400",
          padding: "0.625rem !important",
          whiteSpace: "nowrap",
          textOverflow: "ellipsis",
        },
        head: {
          fontFamily: ["roboto-medium"],
          backgroundColor: "#efefef",
          borderBottom: "none",
          whiteSpace: "nowrap",
          padding: "0.625rem",
        },
        body: {
          fontSize: 16,
        },
      },
    },

    MuiSelect: {
      styleOverrides: {
        root: {
          marginBottom: 0,
        },
        selectMenu: {
          padding: "15px 135px 15px 10px",
          fontSize: "13px",
          letterSpacing: "0.65px",
          textAlign: "left",
          color: "#6b717c",
          border: "1px solid #c2c4cc",
          minWidth: "auto",
        },
        filled: {
          padding: "22px 125px 10px 10px",
          fontSize: "15px",
          backgroundColor: "#efefef",
          border: "none",
          borderBottom: "1px solid #b2b2b2",
        },
        select: {
          "&:focus": {
            backgroundColor: "#fff",
          },
        },
      },
    },

    MuiTablePagination: {
      styleOverrides: {
        root: {
          overflow: "visible !important",
        },
        caption: {
          marginBottom: 0,
        },
        selectRoot: {
          marginBottom: 0,
        },
        selectLabel: {
          fontSize: 16,
        },
      },
    },

    MuiTooltip: {
      styleOverrides: {
        popper: {
          backgroundColor: "#000",
          borderRadius: 4,
          fontFamily: "roboto-regular",
        },
        tooltip: {
          fontSize: 12,
          fontWeight: 500,
          color: "#fff",
          backgroundColor: "transparent",
          margin: "0!important",
          fontFamily: "roboto-regular",
        },
        // tooltipPlacementBottom: {
        //   "@media (min-width: 600px)": {
        //     margin: 8,
        //   },
        // },
      },
    },

    MuiSwitch: {
      styleOverrides: {
        root: {
          cursor: "pointer",
        },
        switchBase: {
          "&:hover": {
            backgroundColor: "transparent",
          },
          "&.Mui-disabled": {
            pointerEvents: "none",
            color: "gray",
            borderColor: "#b2b2b2",
            "& + .MuiSwitch-track": {
              opacity: 1,
              backgroundColor: "#b2b2b2",
            },
          },
          "&.Mui-checked": {
            borderColor: "#333",
            "& + .MuiSwitch-track": {
              opacity: 1,
            },
            "&.Mui-disabled": {
              borderColor: "#b2b2b2",
            },
          },
        },
        colorSecondary: {
          "&$checked": {
            "&:hover": {
              backgroundColor: "transparent",
            },
            "& $thumb": {
              backgroundColor: "#ffffff!important",
              border: "1px solid",
              borderColor: "#333333",
            },
            "& + $track": {
              opacity: 1,
              backgroundColor: "#333333",
            },
            "&[aria-disabled=true]": {
              "& $thumb": {
                backgroundColor: "#ffffff!important",
                border: "1px solid",
                borderColor: "#c2c4cc",
              },
              "& + $track": {
                opacity: 1,
                backgroundColor: "#c2c4cc",
              },
            },
          },
        },
        thumb: {
          width: "18px",
          height: "18px",
          borderColor: "inherit",
        },
        track: {
          opacity: "0.5!important",
          backgroundColor: "#e6e6e6",
        },
      },
    },

    MuiLink: {
      styleOverrides: {
        root: {
          fontFamily: ["roboto-regular"],
          textDecorationColor: "#437094",
          color: "#437094",
          padding: "15px",
          fontSize: "12px",
          cursor: "pointer",
          "&[disabled]": {
            color: "grey",
            cursor: "default",
          },
        },
        underlineHover: {
          color: "#4279a6",
        },
        underlineAlways: {
          color: "#4279a6",
        },
        underlineNone: {
          color: "#278bff",
        },
      },
    },

    MuiModal: {
      styleOverrides: {
        root: {
          display: "flex",
        },
      },
    },

    MuiTab: {
      styleOverrides: {
        root: {
          fontFamily: ["roboto-regular"],
          borderRadius: 0,
          backgroundColor: "#3779EE",
          color: "#fffcfc",
          marginRight: 0,
          padding: "0.57rem 1.04rem",
          textTransform: "capitalize",
          /* minHeight: 30, */
          // boxShadow: "0px 3px 1px -2px rgba(0,0,0,0.2),0px 2px 2px 0px rgba(0,0,0,0.14),0px 1px 5px 0px rgba(0,0,0,0.12)",
          transition:
            "background-color 250ms cubic-bezier(0.4, 0, 0.2, 1) 0ms,box-shadow 250ms cubic-bezier(0.4, 0, 0.2, 1) 0ms,border-color 250ms cubic-bezier(0.4, 0, 0.2, 1) 0ms,color 250ms cubic-bezier(0.4, 0, 0.2, 1) 0ms",
          "&.Mui-selected": {
            backgroundColor: "#d1d1d1",
            color: "#747474",
            // boxShadow: "none",
            "&:hover": {
              backgroundColor: "#d1d1d1",
              color: "#747474",
            },
          },
          "&:hover": {
            backgroundColor: "#3779EE",
            color: "#fff",
            // boxShadow: "0px 2px 4px -1px rgba(0,0,0,0.2),0px 4px 5px 0px rgba(0,0,0,0.14),0px 1px 10px 0px rgba(0,0,0,0.12)",
            backgroundColor: "#9bbcf6",
            color: "#061e45",
            // border: "1px solid #9bbcf6",
          },
        },
      },
    },
    MuiTabs: {
      styleOverrides: {
        root: {
          minHeight: 0,
          margin: 0,
        },
        indicator: {
          display: "none",
        },
        scroller: {
          overflow: "initial !important",
        },
      },
    },

    MuiDateCalendar: {
      styleOverrides: {
        root: {
          // overflow:"auto",
        },
        // ".MuiDayCalendar-weekContainer": {
        //   margin: "10px",
        // },

        // viewTransitionContainer: {
        //   "& > div > div": {
        //     // justifyContent: "space-between !important",
        //     paddingBottom: "1px !important",
        //     margin: "0 !important",
        //   },
        //   "& div[role=row]": {
        //     // justifyContent: "space-between !important",
        //     paddingBottom: "1px !important",
        //     marginBottom: "5px !important",
        //   },
        // },
        ".MuiDayCalendar-monthContainer": {
          position: "static",
        },
      },
    },

    // New Component End

    MuiToggleButton: {
      root: {
        height: "auto",
        border: "1px solid #e2e2e2",
        "&$selected": {
          backgroundColor: "#f9f9f9",
          border: "1px solid #333",
          "&:hover": {
            backgroundColor: "#f9f9f9",
          },
          "&:not(:first-child) ": {
            borderLeft: "1px solid #333",
          },
        },
        "&:hover": {
          backgroundColor: "#f9f9f9",
        },
      },
      label: {
        padding: "5px 3px",
        fontSize: 12,
        fontWeight: "normal",
        lineHeight: 2.14,
        letterSpacing: 0.7,
        textAlign: "left",
        color: "#999",
        textTransform: "capitalize",
        fontFamily: ["roboto-regular"],
      },
    },
    MuiIconButton: {
      root: {
        borderRadius: 8,
        "&:hover": {
          backgroundColor: "transparent",
        },
      },
      colorPrimary: {
        color: "#779f40",
        "&:hover": {
          backgroundColor: "transparent",
        },
      },
    },

    MuiToggleButtonGroup: {
      grouped: {
        "&:not(:first-child) ": {
          marginLeft: "0",
          borderLeft: "none",
        },
      },
    },
    MuiCheckbox: {
      root: {
        color: "#ccc",
      },
      colorPrimary: {
        color: "#333333!important",
      },
      colorSecondary: {
        padding: "0",
        width: "18px",
        height: "18px",
        "&:hover": {
          backgroundColor: "transparent",
        },
      },
    },
    MuiFormControlLabel: {
      root: {
        marginLeft: 0,
        marginBottom: "12px",
      },
      label: {
        fontSize: "13px",
        marginBottom: 0,
        // marginLeft: '15px',
      },
    },
    MuiChip: {
      styleOverrides: {
        root: {
          backgroundColor: "#efefef",
          color: "#999",
          borderRadius: "16px",
          // padding: "5.2px 16px 5.8px",
          minWidth: "98px",
          height: "auto",
          padding: "3px 1rem",
          textOverflow: "initial",
          "&$disabled": {
            backgroundColor: "#efefef",
            color: "#999",
            borderColor: "#ccc",
            opacity: 1,
          },
          "& $label": {
            color: "#333",
            fontSize: "0.875rem",
          },
        },
        outlined: {
          backgroundColor: "#fff",
          border: "1px solid #999",
          "& $deleteIcon": {
            marginRight: 10,
          },
          "& $label": {
            color: "#999",
          },
        },
        deleteIcon: {
          width: "20px",
          height: "20px",
          margin: "0 5px 0 8px",
        },
        clickable: {
          "&:hover": {
            backgroundColor: "#f9f9f9",
            border: "1px solid #333",
            "& $label": {
              color: "#333",
            },
            "& $deleteIcon": {
              color: "#333",
            },
          },
          "&:focus": {
            backgroundColor: "#fff",
          },
        },
        outlinedPrimary: {
          border: "1px solid #dc2342",
          "& $label": {
            color: "#dc2342",
          },
        },
        label: {
          fontFamily: ["roboto-regular"],
          maxWidth: "285px",
          fontSize: "14px",
          fontWeight: 500,
          lineHeight: 1.33,
          letterSpacing: "0.6px",
          color: "inherit",
          borderRadius: "1px",
          padding: "0",
        },
        colorError: {
          backgroundColor: "#ffe6ea !important",
          color: "#dc2342 !important",
          border: "0 !important",
          "& $label": {
            color: "#c92740 !important",
          },
          "& $deleteIcon": {
            marginRight: 10,
          },
        },
        colorWarning: {
          backgroundColor: "#fff6cb !important",
          color: "#865800 !important",
          border: "0 !important",
          "& $deleteIcon": {
            marginRight: 10,
          },
          "& $label": {
            color: "#f26622 !important",
          },
        },
        colorSuccess: {
          backgroundColor: "#edffd5 !important",
          color: "#7ea740 !important",
          border: "0 !important",
          "& $deleteIcon": {
            marginRight: 10,
          },
          "& $label": {
            color: "#7ea740 !important",
          },
        },
      },
    },

    MuiAvatar: {
      img: {
        width: "auto",
        height: "auto",
      },
    },
    MuiFilledInput: {
      root: {
        color: "#333",
        backgroundColor: "#e2e2e2",
        marginBottom: 0,
        "& $error": {
          borderColor: "#dc2342",
        },
      },
      input: {
        padding: "20px 30px 20px 12px",
      },
      underline: {
        "&:after": {
          borderBottom: "1px solid #333",
        },
      },
    },

    MuiInputLabel: {
      root: {
        color: "#5465h5!important",
        fontSize: "13px",
        marginBottom: "0",
      },
      filled: {
        fontSize: "13px",
        color: "#333",
        "&$focused": {
          fontSize: "10px",
          color: "#293c49",
        },
      },
      outlined: {
        transform: "translate(15px, 12px) scale(1)",
      },
      shrink: {
        padding: "0 0.25rem",
        backgroundColor: "#fff",
      },
      styleOverrides: {
        root: {
          transformOrigin: "center left",
        },
      },
    },
    MuiIcon: {
      colorPrimary: {
        color: "#333",
        opacity: 0.2,
      },
    },
    MuiSvgIcon: {
      styleOverrides: {
        root: {
          marginLeft: 0,
          marginRight: 0,
          cursor: "pointer",
        },
      },
    },

    MuiList: {
      root: {
        maxHeight: 320,
      },
      padding: {
        paddingTop: 0,
        paddingBottom: 0,
      },
    },
    MuiListItem: {
      root: {
        "&$disabled": {
          opacity: 0.75,
          MuiTooltip: {
            pointerEvents: "none",
          },
        },
      },
    },
    MuiMenuItem: {
      root: {
        fontSize: 14,
        color: "#333",
        marginBottom: 0,
        padding: "6px 15px",
      },
    },
    MuiListSubheader: {
      root: {
        fontSize: 12,
        lineHeight: 1.33,
        letterSpacing: 0.24,
        textTransform: "uppercase",
      },
      gutters: {
        paddingTop: 11,
        paddingBottom: 13,
      },
    },
    MuiRadio: {
      root: {
        color: "#999999",
      },
      colorPrimary: {
        padding: 0,
        "&:hover": {
          backgroundColor: "transparent",
        },
        "&$checked": {
          "&:hover": {
            backgroundColor: "transparent !important",
          },
        },
      },
      colorSecondary: {
        padding: 0,
        "&:hover": {
          backgroundColor: "transparent",
        },
        "&$checked": {
          color: "#333",
        },
      },
    },

    MuiTouchRipple: {
      root: {
        display: "none",
      },
    },
    MuiInput: {
      input: {
        fontSize: "13px",
        fontFamily: ["roboto-regular"],
        padding: "0px 0 5px",
      },
      root: {
        marginBottom: 0,
        padding: "4px 0",
        borderTopLeftRadius: "4px",
        borderTopRightRadius: "4px",
        borderBottom: "1px solid #b2b2b2",
      },
      underline: {
        "&:before": {
          content: "none",
        },
        "&:after": {
          borderBottom: "1px solid #cccccc",
        },
        "&:hover:not($disabled):before": {
          borderBottom: "none",
        },
      },
    },

    MuiSlider: {
      root: {
        height: 6,
        padding: 0,
      },
      rail: {
        height: 6,
        backgroundColor: "#e2e2e2",
        borderRadius: 4,
      },
      track: {
        height: 6,
        borderRadius: 4,
      },
      thumb: {
        width: 12,
        height: 12,
        "&$active": {
          boxShadow: "none",
        },
      },
      // colorPrimary: {
      //     color: '#dc2342',
      // },
      // colorSecondary: {
      //     color: '#e1c122',
      // },
      mark: {
        width: 1,
        height: 8,
        color: "#fff",
      },
      markActive: {
        opacity: 1,
      },
      valueLabel: {
        top: -15,
        left: "calc(-50% - -2px)",
        "& *": {
          fontFamily: ["roboto-medium"],
          transform: "none",
          borderRadius: 4,
          width: "auto",
          height: "auto",
          padding: "1px",
        },
      },
      markLabel: {
        fontFamily: ["roboto-medium"],
        fontSize: 10,
        lineHeight: 1.1,
        letterSpacing: "0.5px",
        color: "#999",
        top: 15,
      },
      markLabelActive: {
        color: "#999",
      },
      marked: {
        marginBottom: 0,
      },
    },

    MuiAppBar: {
      colorPrimary: {
        backgroundColor: "transparent",
        boxShadow: "none",
      },
    },
    MuiTabScrollButton: {
      root: {
        width: 30,
        "&$disabled": {
          width: 10,
        },
      },
    },

    MuiTableSortLabel: {
      root: {
        "&:hover": {
          color: "#333",
        },
      },
    },

    MuiBreadcrumbs: {
      separator: {
        marginLeft: 2,
        marginRight: 2,
      },
    },

    MuiCardHeader: {
      root: {
        padding: "8px 16px",
        backgroundColor: "#efefef",
      },
      title: {
        fontFamily: ["roboto-regular"],
        display: "inline-block",
        marginBottom: 0,
        color: "#333",
      },
      subheader: {
        fontFamily: ["roboto-regular"],
        display: "inline-block",
        marginBottom: 0,
        marginLeft: 5,
        color: "#333",
      },
    },
    MuiLinearProgress: {
      colorPrimary: {
        backgroundColor: "#eff1f8",
      },
      barColorPrimary: {
        backgroundColor: "#f792a2",
      },
      colorSecondary: {
        backgroundColor: "#eff1f8",
      },
      barColorSecondary: {
        backgroundColor: "#a9c77b",
      },
    },
    MuiExpansionPanelSummary: {
      root: {
        padding: 0,
        minHeight: "auto",
      },
      content: {
        margin: 0,
      },
    },
    MuiExpansionPanelDetails: {
      root: {
        padding: 0,
      },
    },
    MuiAccordion: {
      root: {
        borderRadius: 4,
        border: "solid 1px #e9eaf0",
      },
    },
    MuiAccordionDetails: {
      root: {
        padding: 16,
      },
    },
    MuiAccordionSummary: {
      root: {
        backgroundColor: "#efefef",
        "&$expanded": {
          minHeight: 48,
        },
      },
      content: {
        alignItems: "center",
        "&$expanded": {
          margin: "12px 0",
        },
      },
    },
    MuiAutocomplete: {
      inputRoot: {
        backgroundColor: "#fff",
        borderRadius: 4,
        border: "1px solid #ccc",
        "&:hover": {
          backgroundColor: "transparent",
        },
        "&&:before": {
          borderBottom: "none",
        },
        "&&:after": {
          borderBottom: "none",
        },
        '&[class*="MuiOutlinedInput-root"]': {
          marginBottom: 0,
          paddingTop: 6,
          paddingBottom: 5,
          paddingLeft: 10,
          paddingRight: 10,
          maxHeight: "160px",
          overflowY: "auto",
          borderRadius: 4,
          "&::-webkit-scrollbar": {
            width: "0.5em",
            height: "0.5em",
          },
          "&::-webkit-scrollbar-thumb": {
            backgroundColor: "rgba(0,0,0,.1)",
            borderRadius: 8,
            backgroundClip: "padding-box",
            "&:hover": {
              background: "rgba(0,0,0,.2)",
            },
          },
        },
      },
      endAdornment: {
        display: "none",
      },
      option: {
        color: "blue !important", // Set the color of the option label to blue
        "&:hover": {
          backgroundColor: "rgba(0, 0, 0, 0.1)", // Optional: Change the background color on hover
        },
      },
    },

    MuiGrid2: {
      root: {
        padding: 0,
      },
    },
    MuiFormHelperText: {
      root: {
        textAlign: "left",
      },
    },

    MuiPopover: {
      paper: {
        boxShadow: "0 0 6px 0 rgba(0, 0, 0, 0.16)",
        border: "1px solid #dcdee6",
        borderRadius: 4,
      },
    },
    MuiCard: {
      styleOverrides: {
        root: {
          boxShadow: "0 0 8px 0 rgba(0, 0, 0, 0.08) !important",
          backgroundColor: "#ffffff !important",
        },
      },
    },

    MuiDrawer: {
      styleOverrides: {
        root: {
          position: "fixed",
        },
      },
    },

    // MuiPickersCalendarHeader: {
    //   transitionContainer: {
    //     "& *": {
    //       fontFamily: ["roboto-bold"],
    //       fontSize: "1rem",
    //       color: "#333",
    //     },
    //   },
    //   dayLabel: {
    //     width: 28,
    //     fontFamily: ["roboto-regular"],
    //     fontSize: "0.857rem",
    //   },
    // },
    // MuiPickersDay: {
    //     day: {
    //         marginBottom: 10,
    //         width: 28,
    //         height: 28,
    //         borderRadius: '50%',
    //         color: '#333',
    //         fontSize: 12,
    //         '& *': {
    //             marginBottom: 0,
    //         },
    //         '&:hover': {
    //             backgroundColor: '#efefef',
    //         },
    //     },
    //     current: {
    //         color: '#333',
    //     },
    //     daySelected: {
    //         backgroundColor: '#ccc',
    //         color: '#333',
    //         '&:hover': {
    //             backgroundColor: '#efefef',
    //         },
    //     },
    // },
    MuiFab: {
      root: {
        fontFamily: ["roboto-regular"],
        fontSize: "1rem",
      },
      label: {
        lineHeight: 1,
      },
    },
  },
});
