/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect, useState } from "react";
import {
  Box,
  Button,
  Modal,
  Typography,
  IconButton,
  Stack,
  Snackbar,
  Alert,
} from "@mui/material";
import { Close as CloseIcon } from "@mui/icons-material";
import SelectDropdown from "../dropdown/selectDropdown";
import UploadFiles from "../upload/uploadFiles";
import { createProduct, editProduct } from "../../api";

const ProductForm = (props) => {
  const [products, setProducts] = useState([]);
  const [categoryData, setCategoryData] = useState({
    categories: [],
    subcategories: [],
  });
  const [currentProduct, setCurrentProduct] = useState({
    category: "",
    subcategory: "",
    images: null,
  });
  const [images, setImages] = useState([]);
  const [snackbarOpen, setSnackbarOpen] = useState(false);
  const [snackbarMessage, setSnackbarMessage] = useState("");
  const [snackbarSeverity, setSnackbarSeverity] = useState("success");

  const handleChange = (value, field) => {
    if (field === "category") {
      const selected = props.categories.find(
        (item) =>
          item.name.toLowerCase().replace(/ & /g, "-").replace(/\s+/g, "-") ===
          value
      );

      const subcategories =
        selected?.subcategories.map((subcategory) => ({
          label: subcategory.toUpperCase(),
          value: subcategory.toLowerCase().trim(),
        })) || [];
      setCategoryData((prev) => ({
        ...prev,
        subcategories,
      }));
    }
    setCurrentProduct((prevDetails) => ({
      ...prevDetails,
      [field]: value,
    }));
  };

  const handleFileUpload = (files) => {
    setImages(files);
  };

  useEffect(() => {
    if (images && Array.isArray(images) && images.length > 0) {
      const newProducts = images.map((file) => ({
        name: file.name,
        category: currentProduct.category,
        subcategory: currentProduct.subcategory,
        images: file,
      }));
      setProducts(newProducts);

      if (props.isEdit) {
        setCurrentProduct((prevDetails) => ({
          ...prevDetails,
          images: images[0],
          name: newProducts[0]?.name || prevDetails.name,
        }));
      }
    }
  }, [images, currentProduct.category, currentProduct.subcategory]);

  useEffect(() => {
    if (props.isEdit && props.data) {
      setCurrentProduct({
        productId: props.data.productId,
        name: props.data.name,
        category: props.data.category,
        subcategory: props.data.subcategory,
        images: Array.isArray(props.data.images)
          ? props.data.images
          : [props.data.images],
      });
      setImages(
        Array.isArray(props.data.images)
          ? props.data.images
          : [props.data.images]
      );
    }
  }, [props.data, props.isEdit]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      if (props.isEdit) {
        await editProduct({
          products: currentProduct,
          setProducts: props.setAllProduct,
          setLoading: props.setLoading,
        });
        setSnackbarMessage("Product updated successfully!");
      } else {
        await createProduct({
          products,
          setLoading: props.setLoading,
          setAllProduct: props.setAllProduct,
        });
        setSnackbarMessage("Product created successfully!");
      }
      setSnackbarSeverity("success");
      setSnackbarOpen(true);
      props.handleModalClose();
    } catch (error) {
      console.error("Error processing product:", error);
      setSnackbarMessage("Error processing product.");
      setSnackbarSeverity("error");
      setSnackbarOpen(true);
    }
  };

  const isFormValid =
    currentProduct.category && currentProduct.subcategory && images.length > 0;

  const handleCloseSnackbar = () => {
    setSnackbarOpen(false);
  };

  useEffect(() => {
    const categories = props.categories.map((item) => ({
      label: item.name.toUpperCase(),
      value: item.name.toLowerCase().replace(/ & /g, "-").replace(/\s+/g, "-"),
    }));

    setCategoryData((prev) => ({
      ...prev,
      categories: categories,
    }));
  }, [props.categories]);

  return (
    <Modal
      open={props.open}
      onClose={props.handleModalClose}
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
          <IconButton onClick={props.handleModalClose}>
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
            name="category"
            value={currentProduct.category}
            config={{ field: "category" }}
            handleEdit={handleChange}
            optionList={categoryData.categories}
          />
          {/* </Box>
        <Box mb={2}> */}
          <SelectDropdown
            label="Type"
            variant="outlined"
            margin="normal"
            fullWidth
            required
            name="type"
            value={currentProduct.subcategory}
            config={{ field: "subcategory" }}
            handleEdit={handleChange}
            optionList={categoryData.subcategories}
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
            updateData={handleFileUpload}
            isEdit={props.isEdit}
            images={images}
            file={currentProduct.image}
            category={currentProduct.category}
            acceptedFiles="image/png, image/jpeg"
            parentClass="product-form-container"
          />
        </Box>
        <Box display="flex" justifyContent="space-between" mt="auto">
          <Button
            variant="outlined"
            color="error"
            onClick={props.handleModalClose}
          >
            Cancel
          </Button>
          <Button
            variant="contained"
            color="success"
            onClick={handleSubmit}
            disabled={!isFormValid}
          >
            {props.isEdit ? "Save" : "Add"}
          </Button>
        </Box>

        <Snackbar
          open={snackbarOpen}
          onClose={handleCloseSnackbar}
          autoHideDuration={4000}
          anchorOrigin={{ vertical: "bottom", horizontal: "left" }}
        >
          <Alert
            onClose={handleCloseSnackbar}
            severity={snackbarSeverity}
            sx={{ width: "100%" }}
          >
            {snackbarMessage}
          </Alert>
        </Snackbar>
      </Box>
    </Modal>
  );
};

export default ProductForm;
