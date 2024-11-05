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
import UploadFiles from "../upload/uploadFiles";
import Textfield from "../textfield/textfield";
import { createTestimonial, editTestimonial } from "../../api";

const TestimonialModal = (props) => {
  const [buttonDisabled, setButtonDisabled] = useState(true);
  const [testimonial, setTestimonial] = useState({
    name: "",
    comments: "",
    image: null,
  });
  const [images, setImages] = useState([]);

  const handleChange = (value, field) => {
    setTestimonial((prevDetails) => ({
      ...prevDetails,
      [field]: value,
    }));
  };

  useEffect(() => {
    if (images && Array.isArray(images) && images.length > 0) {
      setTestimonial((prevDetails) => ({
        ...prevDetails,
        image: images[0],
      }));
    }
  }, [images]);

  const handleFileUpload = (files) => {
    setImages(files);
  };

  useEffect(() => {
    if (props.isEdit && props.data) {
      setTestimonial({
        testimonialId: props.data.testimonialId,
        name: props.data.name,
        comments: props.data.comments,
        image: props.data.image,
      });
      setImages([props.data.image]);
    }
  }, [props.data, props.isEdit]);

  const handleTestimonialSubmit = (e) => {
    e.preventDefault();
    if (props.isEdit) {
      editTestimonial({
        testimonial,
        setTestimonial: props.setTestimonials,
        setLoading: props.setLoading,
      });
    } else {
      createTestimonial({
        testimonial,
        setLoading: props.setLoading,
        setTestimonials: props.setTestimonials,
      });
    }
    props.handleModalClose();
  };

  const handleClose = () => {
    props.handleModalClose();
  };

  useEffect(() => {
    if (!testimonial.name || !testimonial.comments || images.length < 1) {
      setButtonDisabled(true);
    } else {
      setButtonDisabled(false);
    }
  }, [testimonial, images]);

  return (
    <Modal open={props.open} onClose={handleClose}>
      <Box
        sx={{
          width: { xs: "250px", sm: "550px", md: "650px", lg: "700px" },
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
            {props.isEdit ? "Edit Testimonial" : "Create Testimonial"}
          </Typography>
          <IconButton onClick={handleClose}>
            <CloseIcon />
          </IconButton>
        </Stack>

        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            maxHeight: { xs: "380px", sm: "400px", md: "400px", lg: "400px" }, // Adjust as needed
            overflowY: "auto",
            mb: 2,
          }}
        >
          <Textfield
            label="Name"
            variant="outlined"
            margin="normal"
            required
            name="name"
            value={testimonial.name}
            config={{ field: "name" }}
            handleEdit={handleChange}
            sx={{
              mb: 2,
              mt: 2,
            }}
          />
          <Textfield
            label="Comments"
            variant="outlined"
            margin="normal"
            required
            name="comments"
            value={testimonial.comments}
            config={{ field: "comments" }}
            handleEdit={handleChange}
            multiline={true}
            sx={{
              mb: 2,
            }}
          />

          <Box mb={2}>
            <UploadFiles
              updateData={(files) => handleFileUpload(files)}
              isEdit={props.isEdit}
              images={images}
              file={testimonial.image}
              category="testimonial"
              acceptedFiles="image/png, image/jpeg"
              parentClass="testimonial-form-container"
            />
          </Box>
        </Box>

        <Box display="flex" justifyContent="space-between" mt="auto">
          <Button variant="outlined" color="error" onClick={handleClose}>
            Cancel
          </Button>
          <Button
            variant="contained"
            color="success"
            onClick={handleTestimonialSubmit}
            disabled={buttonDisabled}
          >
            {props.isEdit ? "Save" : "Add"}
          </Button>
        </Box>
      </Box>
    </Modal>
  );
};

export default TestimonialModal;
