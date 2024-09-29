import React, { useState } from "react";
import Sidebar from "./sidebar";
import { Button, Container, Grid2, Typography } from "@mui/material";
import ProductList from "./productList";
import "./products.css";
import _ from "lodash";
import ProductForm from "../../components/modal/createProduct";

const Products = () => {
  const [productType, setProductType] = useState({
    category: "laces",
    subCategory: "all",
  });
  const [showModal, setShowModal] = useState({
    show: false,
    isEdit: false,
    data: {},
  });

  const handleModalSubmit = () => {};

  const handleModalClose = () => {
    setShowModal({
      show: false,
      data: {},
    });
  };

  const handleOpenForm = () => {
    setShowModal({
      show: true,
      edit: false,
      data: {},
    });
  };

  return (
    <>
      <Container
        maxWidth="lg"
        className="main-container"
        sx={{ padding: { xs: "20px", sm: "30px", md: "30px", lg: "40px" } }}
      >
        <div className="header-wrapper">
          <Typography
            // className="page-title"
            variant="h4"
            gutterBottom
            sx={{
              color: "#33376F",
              fontWeight: "Bold",
              textAlign: { xs: "center", md: "center" },
              fontSize: {
                xs: "1rem",
                sm: "1.5rem",
                md: "1.6rem",
                lg: "2rem",
              },
            }}
          >
            {_.upperCase(productType.category)}
          </Typography>
          <Button
            className="orange-btn"
            variant="contained"
            color="warning"
            onClick={handleOpenForm}
          >
            Add Product
          </Button>
        </div>
        <Grid2 container spacing={3}>
          {/* Sidebar on the left */}
          <Grid2 item size={{ xs: 6, sm: 4, md: 2.5 }}>
            <Sidebar setProductType={setProductType} />
          </Grid2>

          {/* ProductList on the right */}
          <Grid2 item size={{ xs: 12, sm: 8, md: 9.5 }}>
            <ProductList productType={productType} />
          </Grid2>
        </Grid2>
      </Container>
      <ProductForm
        open={showModal.show}
        isEdit={showModal.isEdit}
        data={showModal.data}
        handleModalSubmit={handleModalSubmit}
        handleModalClose={handleModalClose}
        setShowModal={setShowModal}
      ></ProductForm>
    </>
  );
};

export default Products;
