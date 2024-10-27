import { Box, colors, Grid2, IconButton, Typography } from "@mui/material";
import React, { useEffect, useState } from "react";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import ArrowBackIosIcon from "@mui/icons-material/ArrowBackIos";
import CustomModal from "../../components/modal/customModal";
import "./viewProduct.css";
const ViewProduct = (props) => {
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
    <CustomModal
      className="view-product-modal"
      open={props.open}

      // secondaryButton={{
      //   isRequired: true,
      //   label: "Cancel",
      //   handler: handleClose,
      // }}
    >
      <Grid2 container spacing={2} alignItems="center">
        <IconButton
          onClick={handlePrevious}
          disabled={index === 0}
          aria-label="previous"
          sx={{
            border: "2px solid white",
            borderRadius: "50%",
            textAlign: "center",
            margin: "3px 20px",
            background: "rgba(255, 255, 255, 0.15)",
            backdropFilter: "blur(25px)",
          }}
        >
          <ArrowBackIosIcon
            sx={{ color: "white", paddingLeft: "6px", margin: "2px 0" }}
          />
        </IconButton>
        {/* <IconButton
          onClick={handlePrevious}
          disabled={index === 0}
          sx={{
            color: "red",
          }}
        >
          <ArrowBackIosIcon />
        </IconButton> */}
        <Grid2 item xs={12} sm={6}>
          <Box
            component="img"
            src={props.data[index].image}
            alt={`Image ${index + 1}`}
            sx={{ width: "350px", height: "500px", objectFit: "cover" }}
          />
          <Typography
            variant="h5"
            gutterBottom
            sx={{
              color: "white",
            }}
          >
            {props.data[index].name}
          </Typography>
        </Grid2>

        {/* <IconButton
          onClick={handleNext}
          color="primary"
          disabled={index === props.data.length - 1}
        >
          <ArrowForwardIosIcon />
        </IconButton> */}
        <IconButton
          onClick={handleNext}
          disabled={index === props.data.length - 1}
          aria-label="next"
          sx={{
            border: "2px solid white",
            borderRadius: "50%",
            textAlign: "center",
            margin: "3px 20px",
            background: "rgba(255, 255, 255, 0.15)",
            backdropFilter: "blur(25px)",
          }}
        >
          <ArrowForwardIosIcon
            sx={{ color: "white", paddingLeft: "4px", margin: "2px 0" }}
          />
        </IconButton>
      </Grid2>
    </CustomModal>
  );
};

export default ViewProduct;
