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
    satisfiedClients: "1,395",
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

  const toggleEdit = () => {
    setIsEditing((prev) => !prev);
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
      <Box
        display="flex"
        justifyContent="flex-end"
        mb={2}
        sx={{ margin: "20px 20px" }}
      >
        <Button variant="contained" onClick={toggleEdit}>
          {isEditing ? "Save" : "Edit"}
        </Button>
      </Box>
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
        display="flex"
        justifyContent="space-between"
        mb={2}
        sx={{ margin: "20px 20px" }}
      >
        <Typography variant="h3">Testimonials</Typography>
        <Button variant="contained" onClick={handleOpenModal}>
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
