import React, { useEffect, useState } from "react";
import { Box, Checkbox, Container, FormControlLabel } from "@mui/material";
import CustomModal from "./customModal";
import { categories, productType } from "../../common";
import SelectDropdown from "../dropdown/selectDropdown";
import "./createProduct.css";
import UploadFiles from "../upload/uploadFiles";
import { createProduct } from "../../api";

const ProductForm = (props) => {
  const [products, setProducts] = useState([]); // Array to store products for each image
  const [currentProduct, setCurrentProduct] = useState({
    category: "",
    subcategory: "",
    image: null, // To store the current uploaded image
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
        name: file.name, // Use image name as productId
        category: currentProduct.category,
        subcategory: currentProduct.subcategory,
        image: file,
      }));
      setProducts(newProducts); // Set new products for each image
    }
  }, [images, currentProduct.category, currentProduct.subcategory]);

  const handleNewProduct = (e) => {
    e.preventDefault();
    // Add validation here
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
    console.log("Submitted products:", products);
    props.handleModalClose();
  };

  const handleClose = () => {
    props.handleModalClose();
  };

  useEffect(() => {
    console.log(products);
  }, [products]);
  return (
    <CustomModal
      className="product-form-modal"
      open={props.open}
      title={{
        label: props.isEdit ? "Edit Product" : "Create Product",
        variant: "h4",
        id: "apply-product-modal-title",
      }}
      primaryButton={{
        isRequired: true,
        label: props.isEdit ? "Save" : "Add",
        handler: handleNewProduct,
      }}
      secondaryButton={{
        isRequired: true,
        label: "Cancel",
        handler: handleClose,
      }}
    >
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
      <UploadFiles
        updateData={(files) => handleFileUpload(files)}
        isEdit={true}
        file={currentProduct.image}
        acceptedFiles="image/png, image/jpeg"
        parentClass="product-form-container"
      />
    </CustomModal>
  );
};

export default ProductForm;
