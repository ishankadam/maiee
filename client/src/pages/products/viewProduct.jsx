import React, { useEffect, useState } from "react";
import {
  Box,
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
  IconButton,
  Typography,
  useMediaQuery,
} from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";
import ArrowBackIosIcon from "@mui/icons-material/ArrowBackIos";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import { useTheme } from "@mui/material/styles";
import { imageUrl } from "../../api";

const ViewProduct = (props) => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));
  const [index, setIndex] = useState(props.index || 0);

  const handleNext = () => {
    setIndex((prevIndex) => (prevIndex + 1) % props.data.length);
  };

  const handlePrevious = () => {
    setIndex(
      (prevIndex) => (prevIndex - 1 + props.data.length) % props.data.length
    );
  };

  useEffect(() => {
    setIndex(props.index);
  }, [props.index]);

  const handleClose = () => {
    props.handleViewModalClose();
  };

  return (
    <Dialog
      onClose={handleClose}
      aria-labelledby="view-product-dialog-title"
      open={props.open}
      fullWidth
      maxWidth="sm"
      sx={{
        backdropFilter: "blur(10px)",
        "& .MuiDialog-paper": {
          backgroundColor: "rgba(0, 0, 0, 0.0)",
          boxShadow: "none",
          padding: "10px !important",
        },
      }}
    >
      <DialogTitle
        sx={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          fontWeight: "bold",
          position: "relative",
          textAlign: "center",
          borderRadius: "10px",
          color: "white",
          padding: "8px 16px !important",
        }}
      >
        <Typography
          id="view-product-dialog-title"
          variant="h3"
          component="span"
          sx={{
            fontWeight: "bold",
            color: "white",
            fontSize: { xs: "32px", sm: "42px", md: "42px" },
          }}
        >
          {props.data[index].name}
        </Typography>
        <IconButton
          aria-label="close"
          onClick={handleClose}
          sx={(theme) => ({
            position: "absolute",
            right: 4,
            top: 2,
            color: theme.palette.grey[500],
          })}
        >
          <CloseIcon
            sx={{
              color: "white",
              padding: "none !important",
              fontSize: "36px",
            }}
          />
        </IconButton>
      </DialogTitle>

      <DialogContent
        sx={{
          maxHeight: "80vh",
          overflowY: "auto",
          padding: "8px 16px !important",
        }}
      >
        <Box
          display="flex"
          flexDirection={isMobile ? "column" : "row"}
          alignItems="center"
          justifyContent="center"
          gap={2}
        >
          {!isMobile && (
            <IconButton
              onClick={handlePrevious}
              disabled={index === 0}
              aria-label="previous"
              sx={{
                border: "2px solid rgba(255, 255, 255, 0.7)",
                borderRadius: "50%",
                background: "rgba(255, 255, 255, 0.3)",
                backdropFilter: "blur(25px)",
              }}
            >
              <ArrowBackIosIcon
                sx={{
                  color: "white",
                  fontSize: "1.5rem",
                  right: "-10%",
                  position: "relative",
                }}
              />
            </IconButton>
          )}
          <Box
            component="img"
            src={`${imageUrl}${props.data[index].category}/${props.data[index].images}`}
            alt={`Image ${index + 1}`}
            sx={{
              width: isMobile ? "100%" : "350px",
              height: isMobile ? "350px" : "500px",
              objectFit: "cover",
              borderRadius: "10px",
            }}
          />
          {!isMobile && (
            <IconButton
              onClick={handleNext}
              disabled={index === props.data.length - 1}
              aria-label="next"
              sx={{
                border: "2px solid rgba(255, 255, 255, 0.7)",
                borderRadius: "50%",
                background: "rgba(255, 255, 255, 0.3)",
                backdropFilter: "blur(25px)",
              }}
            >
              <ArrowForwardIosIcon
                sx={{ color: "white", fontSize: "1.5rem" }}
              />
            </IconButton>
          )}
        </Box>
      </DialogContent>

      <DialogActions
        sx={{
          display: "flex",
          justifyContent: isMobile ? "center" : "flex-end",
          paddingX: 2,
          backgroundColor: "transparent",
        }}
      >
        {isMobile && (
          <>
            <IconButton
              onClick={handlePrevious}
              disabled={index === 0}
              aria-label="previous"
              sx={{
                border: "2px solid rgba(255, 255, 255, 0.7)",
                borderRadius: "50%",
                background: "rgba(255, 255, 255, 0.3)",
                backdropFilter: "blur(25px)",
              }}
            >
              <ArrowBackIosIcon sx={{ color: "white", fontSize: "0.8rem" }} />
            </IconButton>
            <IconButton
              onClick={handleNext}
              disabled={index === props.data.length - 1}
              aria-label="next"
              sx={{
                border: "2px solid rgba(255, 255, 255, 0.7)",
                borderRadius: "50%",
                background: "rgba(255, 255, 255, 0.3)",
                backdropFilter: "blur(25px)",
              }}
            >
              <ArrowForwardIosIcon
                sx={{ color: "white", fontSize: "0.8rem" }}
              />
            </IconButton>
          </>
        )}
      </DialogActions>
    </Dialog>
  );
};

export default ViewProduct;
