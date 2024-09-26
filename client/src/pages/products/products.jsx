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
      <Container maxWidth="lg" className="main-container">
        <div className="header-wrapper">
          <Typography
            variant="h4"
            className="page-title"
            gutterBottom
            sx={{ color: "#33376f" }}
          >
            {_.upperCase(productType.category)}
          </Typography>
          <Button variant="contained" color="warning" onClick={handleOpenForm}>
            Add Product
          </Button>
        </div>

        <Grid2 container spacing={3}>
          {/* Sidebar on the left */}
          <Grid2 item size={{ xs: 6, sm: 4, md: 3 }}>
            <Sidebar setProductType={setProductType} />
          </Grid2>

          {/* ProductList on the right */}
          <Grid2 item size={{ xs: 12, sm: 8, md: 9 }}>
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
