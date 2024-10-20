import React, { useEffect, useState } from "react";
import Sidebar from "./sidebar";
import {
  Button,
  CircularProgress,
  Container,
  Grid2,
  Typography,
} from "@mui/material";
import ProductList from "./productList";
import "./products.css";
import _ from "lodash";
import ProductForm from "../../components/modal/createProduct";
import { getAllProducts } from "../../api";
import Footer from "../home/footer";
import ViewProduct from "./viewProduct";
import { useLocation, useNavigate } from "react-router-dom";

const Products = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const { state } = location;
  const item = state?.item || "laces";

  const [allProduct, setAllProduct] = useState([]);
  const [productType, setProductType] = useState({
    category: item,
    subCategory: "all",
  });
  const [showModal, setShowModal] = useState({
    show: false,
    isEdit: false,
    data: {},
  });

  const [showProduct, setShowProduct] = useState({
    show: false,
    index: 0,
    data: [],
  });

  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    if (state) {
      navigate(location.pathname, { replace: true, state: null });
    }
  }, [location, navigate, state]);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        await getAllProducts(setAllProduct);
      } catch (err) {
        setError("Failed to fetch products.");
      } finally {
        setLoading(false);
      }
    };

    fetchProducts();
  }, []);

  const handleModalSubmit = () => {
    // Implement product submission logic
  };

  const handleModalClose = () => {
    setShowModal({
      show: false,
      data: {},
    });
  };

  const handleViewModalClose = () => {
    setShowProduct({
      show: false,
      data: {},
    });
  };

  const handleOpenForm = () => {
    setShowModal({
      show: true,
      isEdit: false,
      data: {},
    });
  };

  return (
    <>
      <Container
        maxWidth="lg"
        className="main-container"
        sx={{ padding: { xs: "20px", sm: "20px", md: "30px", lg: "20px" } }}
      >
        <div className="header-wrapper">
          <Typography
            variant="h4"
            sx={{
              color: "#212121",
              fontFamily: "'Roboto Serif', serif",
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
        {loading ? (
          <CircularProgress />
        ) : error ? (
          <Typography color="error">{error}</Typography>
        ) : (
          <Grid2 container spacing={3}>
            {/* Sidebar on the left */}
            <Grid2 size={{ xs: 6, sm: 4, md: 2.5 }}>
              <Sidebar
                productType={productType}
                setProductType={setProductType}
              />
            </Grid2>

            {/* ProductList on the right */}
            <Grid2 size={{ xs: 12, sm: 8, md: 9.5 }}>
              <ProductList
                productType={productType}
                setShowProduct={setShowProduct}
              />
            </Grid2>
          </Grid2>
        )}
      </Container>
      <Footer />
      {showProduct.show && (
        <ViewProduct
          open={showProduct.show}
          index={showProduct.index}
          data={showProduct.data}
          handleViewModalClose={handleViewModalClose}
        />
      )}
      <ProductForm
        open={showModal.show}
        isEdit={showModal.isEdit}
        data={showModal.data}
        handleModalSubmit={handleModalSubmit}
        handleModalClose={handleModalClose}
        setShowModal={setShowModal}
        setLoading={setLoading}
      />
    </>
  );
};

export default Products;
