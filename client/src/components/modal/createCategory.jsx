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
import { basicSubcategories } from "../../common";
import UploadFiles from "../upload/uploadFiles";
import Textfield from "../textfield/textfield";
import ChipTextfield from "../textfield/chipTextfield";
import { createCategory, editCategory } from "../../api";

const CreateCategory = (props) => {
  const [buttonDisabled, setButtonDisabled] = useState(true);
  const [category, setCategory] = useState({
    name: "",
    description: "",
    subcategories: [],
    imgSrc: null,
  });
  const [images, setImages] = useState([]);

  const handleChange = (value, field) => {
    setCategory((prevDetails) => ({
      ...prevDetails,
      [field]: value,
    }));
  };

  useEffect(() => {
    if (images && Array.isArray(images) && images.length > 0) {
      setCategory((prevDetails) => ({
        ...prevDetails,
        imgSrc: images[0],
      }));
    }
  }, [images]);

  const handleFileUpload = (files) => {
    setImages(files);
  };

  useEffect(() => {
    if (props.isEdit && props.data) {
      setCategory({
        categoryId: props.data.categoryId,
        name: props.data.name,
        description: props.data.description,
        subcategories: props.data.subcategories,
        imgSrc: props.data.imgSrc,
      });
      setImages([props.data.imgSrc]); // Convert single image name to array for consistency
    }
  }, [props.data, props.isEdit]);

  const handleCategorySubmit = (e) => {
    e.preventDefault();
    if (props.isEdit) {
      editCategory({
        category,
        setCategory: props.setCategories,
        setLoading: props.setLoading,
      });
    } else {
      createCategory({
        category,
        setLoading: props.setLoading,
        setCategories: props.setCategories,
      });
    }
    props.handleModalClose();
  };

  const handleClose = () => {
    props.handleModalClose();
  };

  useEffect(() => {
    if (
      !category.name ||
      !category.subcategories ||
      !category.description ||
      images.length < 1 // Ensure at least one image is uploaded
    ) {
      setButtonDisabled(true);
    } else {
      setButtonDisabled(false);
    }
  }, [category, images]);

  return (
    <Modal open={props.open} onClose={handleClose}>
      <Box
        sx={{
          width: 600,
          maxWidth: "80vw",
          maxHeight: "90vh",
          bgcolor: "background.paper",
          p: 3,
          borderRadius: 2,
          boxShadow: 24,
          overflowY: "auto",
          mx: "auto",
          mt: "10vh",
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
            {props.isEdit ? "Edit Category" : "Create Category"}
          </Typography>
          <IconButton onClick={handleClose}>
            <CloseIcon />
          </IconButton>
        </Stack>

        <Box mt={2} mb={2}>
          <Textfield
            label="Name"
            variant="outlined"
            margin="normal"
            fullWidth
            required
            select
            name="name"
            value={category.name}
            config={{ field: "name" }}
            handleEdit={handleChange}
          />
        </Box>
        <Box mt={2} mb={2}>
          <Textfield
            label="Description"
            variant="outlined"
            margin="normal"
            fullWidth
            required
            select
            mu
            name="description"
            value={category.description}
            config={{ field: "description" }}
            handleEdit={handleChange}
            multiline={true}
          />
        </Box>
        <Box mb={2}>
          <ChipTextfield
            label="Sub-Category"
            variant="outlined"
            margin="normal"
            fullWidth
            required
            select
            name="subcategories"
            value={category.subcategories}
            config={{ field: "subcategories" }}
            handleEdit={handleChange}
            predefinedOptions={basicSubcategories}
          />
        </Box>

        <Box mb={2}>
          <UploadFiles
            updateData={(files) => handleFileUpload(files)}
            isEdit={props.isEdit}
            images={images}
            file={category.imgSrc}
            category="categories"
            acceptedFiles="image/png, image/jpeg"
            parentClass="category-form-container"
          />
        </Box>
        <Box display="flex" justifyContent="space-between" mt="auto">
          <Button variant="outlined" color="error" onClick={handleClose}>
            Cancel
          </Button>
          <Button
            variant="contained"
            color="success"
            onClick={handleCategorySubmit}
            disabled={buttonDisabled}
          >
            {props.isEdit ? "Save" : "Add"}
          </Button>
        </Box>
      </Box>
    </Modal>
  );
};

export default CreateCategory;
