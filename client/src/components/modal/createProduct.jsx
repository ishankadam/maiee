import React, { useEffect, useState } from "react";
import {
  Box,
  Button,
  Modal,
  Typography,
  IconButton,
  Stack,
} from "@mui/material";
import { Close as CloseIcon } from "@mui/icons-material";
import { categories, productType } from "../../common";
import SelectDropdown from "../dropdown/selectDropdown";
import UploadFiles from "../upload/uploadFiles";
import { createProduct } from "../../api";

const ProductForm = (props) => {
  const [products, setProducts] = useState([]);
  const [currentProduct, setCurrentProduct] = useState({
    category: "",
    subcategory: "",
    image: null,
  });
  const [images, setImages] = useState([]);

  const handleChange = (value, field) => {
    setCurrentProduct((prevDetails) => ({
      ...prevDetails,
      [field]: value,
    }));
  };

  const handleFileUpload = (files) => {
    setImages(files);
  };

  useEffect(() => {
    if (images.length > 0) {
      const newProducts = images.map((file) => ({
        name: file.name,
        category: currentProduct.category,
        subcategory: currentProduct.subcategory,
        image: file,
      }));
      setProducts(newProducts);
    }
  }, [images, currentProduct.category, currentProduct.subcategory]);

  const handleNewProduct = (e) => {
    e.preventDefault();
    if (
      !currentProduct.category ||
      !currentProduct.subcategory ||
      products.length === 0
    ) {
      alert("Please fill all required fields and upload images.");
      return;
    } else {
      props.setLoading(true);
      createProduct({ products, setLoading: props.setLoading });
    }
    props.handleModalClose();
  };

  const handleClose = () => {
    props.handleModalClose();
  };

  return (
    <Modal
      open={props.open}
      onClose={handleClose}
      sx={{
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <Box
        sx={{
          width: { xs: "250px", sm: "550px", md: "650px", lg: "700px" },
          maxWidth: "90vw",
          maxHeight: "80vh",
          bgcolor: "background.paper",
          p: 3,
          borderRadius: 2,
          boxShadow: 24,
          mx: "auto",
          my: "auto",
          position: "relative",
          display: "flex",
          flexDirection: "column",
        }}
      >
        <Stack
          direction="row"
          justifyContent="space-between"
          alignItems="center"
        >
          <Typography
            variant="h5"
            sx={{
              fontFamily: "'Roboto Serif', serif",
              color: "#33376F",
              fontWeight: "Bold",
              textAlign: { xs: "center", md: "left" },
              fontSize: {
                xs: "1rem",
                sm: "1.2rem",
                md: "1.4rem",
                lg: "1.6rem",
              },
            }}
          >
            {props.isEdit ? "Edit Product" : "Create Product"}
          </Typography>
          <IconButton onClick={handleClose}>
            <CloseIcon />
          </IconButton>
        </Stack>

        <Box mt={2} mb={2}>
          <SelectDropdown
            label="Category"
            variant="outlined"
            margin="normal"
            fullWidth
            required
            select
            name="category"
            value={currentProduct.category}
            config={{ field: "category" }}
            handleEdit={handleChange}
            optionList={categories}
          />
          {/* </Box>
        <Box mb={2}> */}
          <SelectDropdown
            label="Type"
            variant="outlined"
            margin="normal"
            fullWidth
            required
            select
            name="type"
            value={currentProduct.subcategory}
            config={{ field: "subcategory" }}
            handleEdit={handleChange}
            optionList={productType}
          />
        </Box>

        <Box
          mb={3}
          sx={{
            overflowY: "auto",
            borderRadius: "5px",
            padding: "10px 5px",
          }}
        >
          <UploadFiles
            sx={{
              height: "200px",
            }}
            updateData={(files) => handleFileUpload(files)}
            isEdit={true}
            file={currentProduct.image}
            acceptedFiles="image/png, image/jpeg"
            parentClass="product-form-container"
          />
        </Box>

        <Box display="flex" justifyContent="space-between">
          <Button variant="outlined" color="error" onClick={handleClose}>
            Cancel
          </Button>
          <Button
            variant="contained"
            color="success"
            onClick={handleNewProduct}
          >
            {props.isEdit ? "Save" : "Add"}
          </Button>
        </Box>
      </Box>
    </Modal>
  );
};

export default ProductForm;
