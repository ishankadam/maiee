/* eslint-disable no-unused-vars */
import {
  Card,
  CardContent,
  Grid,
  TextField,
  Typography,
  Button,
  Box,
} from "@mui/material";
import React, { useEffect, useState } from "react";
import CustomTable from "../../components/custom-table/customTable";
import { deleteTestimonial } from "../../api";
import TestimonialModal from "../../components/modal/testimonials-modal";

const ManageStats = (props) => {
  const [testimonials, setTestimonials] = useState(props.testimonials || []);
  const [stats, setStats] = useState({
    designs: "6",
    patterns: "238",
    satisfiedClients: "500+",
  });
  const [showModal, setShowModal] = useState({
    show: false,
    isEdit: false,
    data: {},
  });

  const handleOpenModal = () => {
    setShowModal({
      show: true,
      isEdit: false,
      data: {},
    });
  };

  const handleDeleteTestimonial = (row, index) => {
    props.setLoading(true);
    deleteTestimonial({
      testimonial: row,
      setLoading: props.setLoading,
      setTestimonials: props.setTestimonials,
    });
  };

  const handleOnClickView = (row) => {
    setShowModal({
      show: true,
      isEdit: true,
      data: row,
    });
  };
  const colDef = [
    {
      id: "image",
      label: "Avatar",
      key: "image",
      type: "image",
      align: "center",
      category: "testimonial",
    },
    {
      id: "name",
      label: "Name",
      key: "name",
      type: "text",
      align: "left",
    },
    {
      id: "comments",
      label: "Comments",
      key: "comments",
      type: "text",
      align: "left",
    },
    {
      id: "notification-icon",
      label: "",
      key: "editAction",
      type: "action",
      align: "center",
      editId: "edit-icon",
      deleteId: "delete-icon",
      commentId: "comment-icon",
      editFunc: (row, index) => handleOnClickView(row, true, index),
      deleteFunc: (row, index) => handleDeleteTestimonial(row, index),
      isDelete: true,
      isEdit: true,
      page: "JobListing",
    },
  ];

  const [isEditing, setIsEditing] = useState(false);

  const handleChange = (key) => (event) => {
    setStats({ ...stats, [key]: event.target.value });
  };

  const handleModalClose = () => {
    setShowModal({
      show: false,
      data: {},
    });
  };

  useEffect(() => {
    setTestimonials(props.testimonials);
  }, [props.testimonials]);

  return (
    <div>
      <Grid
        container
        spacing={3}
        justifyContent="center"
        alignItems="center"
        style={{ marginTop: "16px" }}
      >
        {Object.entries(stats).map(([key, value]) => (
          <Grid item xs={12} sm={4} key={key}>
            <Card variant="outlined">
              <Typography
                variant="h4"
                align="center"
                sx={{ marginTop: "10px" }}
              >
                {key
                  .replace(/([A-Z])/g, " $1")
                  .replace(/^./, (str) => str.toUpperCase())}
              </Typography>
              <CardContent>
                {isEditing ? (
                  <TextField
                    variant="outlined"
                    value={value}
                    onChange={handleChange(key)}
                    fullWidth
                    InputProps={{
                      style: { fontSize: "2em", textAlign: "center" },
                    }}
                    inputProps={{
                      "aria-label": `${key}`,
                    }}
                  />
                ) : (
                  <Typography
                    variant="h5"
                    align="center"
                    style={{ fontSize: "2em" }}
                  >
                    {value}
                  </Typography>
                )}
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>
      <Box
        sx={{
          flexGrow: 1,
          px: 3,
          pt: 3,
          display: "flex",
          justifyContent: "space-between",
        }}
      >
        <Typography
          variant="h4"
          gutterBottom
          sx={{
            display: "flex",
            justifyContent: "center",
            color: "#212121",
            fontFamily: "'Roboto Serif', serif",
            fontWeight: "Bold",
            alignItems: "center",
            textAlign: {
              xs: "left",
              sm: "center",
              md: "center",
              lg: "center",
            },
            fontSize: {
              xs: "1.2rem",
              sm: "1.5rem",
              md: "1.5rem",
              lg: "1.7rem",
            },
          }}
        >
          Testimonials
        </Typography>
        <Button
          variant="contained"
          color="warning"
          sx={{
            fontSize: { xs: "13px", sm: "14px", md: "16px" },
            position: "sticky", // Keeps the button on the right
            right: 0,
            textTransform: "capitalize",
            marginLeft: "10px",
            height: "44px",
          }}
          onClick={handleOpenModal}
        >
          Add Testimonials
        </Button>
      </Box>
      <CustomTable
        colDef={colDef}
        rowData={testimonials}
        deleteContent={{
          title: "Delete Confirmation",
          message: "Are you sure you want to delete this record?",
        }}
        loading={props.loading}
        pagination={true}
      ></CustomTable>
      {showModal.show && (
        <TestimonialModal
          open={showModal.show}
          isEdit={showModal.isEdit}
          data={showModal.data}
          handleModalClose={handleModalClose}
          setShowModal={setShowModal}
          setLoading={props.setLoading}
          setTestimonials={props.setTestimonials}
        ></TestimonialModal>
      )}
    </div>
  );
};

export default ManageStats;
