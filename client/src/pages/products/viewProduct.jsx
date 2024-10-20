import { Box, Grid, IconButton, Typography } from "@mui/material";
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
      title={{
        label: "View Product",
        variant: "h2",
        id: "apply-product-modal-title",
      }}
      secondaryButton={{
        isRequired: true,
        label: "Cancel",
        handler: handleClose,
      }}
    >
      <Grid container spacing={2} alignItems="center">
        <IconButton
          onClick={handlePrevious}
          color="primary"
          disabled={index === 0}
        >
          <ArrowBackIosIcon />
        </IconButton>
        <Grid item xs={12} sm={6}>
          <Box
            component="img"
            src={props.data[index].image}
            alt={`Image ${index + 1}`}
            sx={{ width: "100%", height: "auto" }}
          />
          <Typography variant="h5" gutterBottom>
            {props.data[index].name}
          </Typography>
        </Grid>

        <IconButton
          onClick={handleNext}
          color="primary"
          disabled={index === props.data.length - 1}
        >
          <ArrowForwardIosIcon />
        </IconButton>
      </Grid>
    </CustomModal>
  );
};

export default ViewProduct;
