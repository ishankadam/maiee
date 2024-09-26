import React, { useState } from "react";
import { Box, Checkbox, Container, FormControlLabel } from "@mui/material";
import Textfield from "../../components/textfield/textfield";
import CustomModal from "./customModal";
import { categories, productType } from "../../common";
import SelectDropdown from "../dropdown/selectDropdown";
import "./createProduct.css";
import LocalShippingIcon from "@mui/icons-material/LocalShipping";
import LocalShippingOutlinedIcon from "@mui/icons-material/LocalShippingOutlined";
import Soldout from "../../assets/soldout.png";
import SoldoutFilled from "../../assets/soldoutfilled.png";

const ProductForm = (props) => {
  const [project, setproject] = useState({
    name: "",
    image: [],
    productId: 0,
    category: "",
    type: "",
    readyToShip: true,
    soldOut: true,
  });

  const handleChange = (value, field) => {
    setproject((prevDetails) => ({
      ...prevDetails,
      [field]: value,
      ...(field === "productId" && { name: value }),
    }));
  };

  const handleCheckboxChange = (event, field) => {
    setproject((prevDetails) => ({
      ...prevDetails,
      [field]: event.target.checked,
    }));
  };

  const handleNewProduct = (e) => {
    e.preventDefault();
    handleClose();
  };

  const handleEditProduct = (e) => {
    e.preventDefault();
    handleClose();
  };

  const handleClose = () => {
    props.handleModalClose();
  };

  return (
    <CustomModal
      className="job-form-modal"
      open={props.open}
      title={{
        label: props.isEdit ? "Edit Product" : "Create Product",
        variant: "h2",
        id: "apply-job-modal-title",
      }}
      primaryButton={{
        isRequired: true,
        label: props.isEdit ? "Save" : "Add",
        handler: props.isEdit ? handleEditProduct : handleNewProduct,
      }}
      secondaryButton={{
        isRequired: true,
        label: "Cancel",
        handler: handleClose,
      }}
    >
      <Container className="createjob-container">
        <Box className="createjob-box">
          <Textfield
            label="Product Id"
            variant="outlined"
            margin="normal"
            fullWidth
            required
            name="productId"
            value={project.productId}
            config={{ field: "productId" }}
            handleEdit={handleChange}
          />
          <SelectDropdown
            label="Category"
            variant="outlined"
            margin="normal"
            fullWidth
            required
            select
            name="category"
            value={project.category}
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
            value={project.type}
            config={{ field: "type" }}
            handleEdit={handleChange}
            optionList={productType}
          />

          {/* Place checkboxes inline using flexbox */}
          <Box className="checkbox-container">
            <FormControlLabel
              control={
                <Checkbox
                  icon={<LocalShippingOutlinedIcon />}
                  checkedIcon={<LocalShippingIcon />}
                  checked={project.readyToShip}
                  onChange={(e) => handleCheckboxChange(e, "readyToShip")}
                />
              }
              label="Ready to Ship"
            />
            <FormControlLabel
              control={
                <Checkbox
                  icon={<img src={Soldout} alt="Soldout" />}
                  checkedIcon={<img src={SoldoutFilled} alt="Soldout Filled" />}
                  checked={project.soldOut}
                  onChange={(e) => handleCheckboxChange(e, "soldOut")}
                />
              }
              label="Sold Out"
              className="checkbox-image"
            />
          </Box>
        </Box>
      </Container>
    </CustomModal>
  );
};

export default ProductForm;
