import React, { useEffect, useState } from "react";
import Sidebar from "./sidebar";
import {
  Button,
  CircularProgress,
  Container,
  Grid2,
  Typography,
  Drawer,
  Box,
} from "@mui/material";
import ProductList from "./productList";
import "./products.css";
import _ from "lodash";
import ProductForm from "../../components/modal/createProduct";
import { getAllProducts } from "../../api";
import Footer from "../home/footer";
import ViewProduct from "./viewProduct";
import { useLocation, useNavigate } from "react-router-dom";
import FilterListIcon from "@mui/icons-material/FilterList";

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

  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  useEffect(() => {
    if (state) {
      navigate(location.pathname, { replace: true, state: null });
    }
  }, [location, navigate, state]);

  useEffect(() => {
    setLoading(true);
    getAllProducts({ setProducts: setAllProduct, setLoading });
  }, []);

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

  const [isDrawerOpen, setIsDrawerOpen] = useState(false); // Drawer open state
  const toggleDrawer = (open) => (event) => {
    setIsDrawerOpen(open);
  };
  return (
    <>
      <Container
        maxWidth="lg"
        className="main-container"
        sx={{ padding: { xs: "10px", sm: "20px", md: "30px", lg: "20px" } }}
      >
        <Box
          className="p-header-wrapper"
          sx={{
            borderRadius: "2px",
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            marginBottom: "15px",
            padding: "12px 0 !important",
          }}
        >
          <Typography
            variant="h4"
            sx={{
              color: "#212121",
              fontFamily: "'Roboto Serif', serif",
              fontWeight: "Bold",
              textAlign: {
                xs: "left",
                sm: "center",
                md: "center",
                lg: "center",
              },
              flexGrow: 1, // Ensures title stays centered
              marginLeft: { xs: "0", sm: "70px", md: "70px", lg: "70px" },
              fontSize: {
                xs: "1.2rem",
                sm: "1.5rem",
                md: "1.6rem",
                lg: "2rem",
              },
            }}
          >
            {_.upperCase(productType.category)}
          </Typography>

          <Button
            variant="outlined"
            color="success"
            className="filter-button"
            onClick={toggleDrawer(true)}
            sx={{
              fontSize: { xs: "11px", sm: "12px", md: "16px" },

              // marginRight: { xs: "6px", sm: "12px", md: "16px" },
              textTransform: "capitalize",
            }}
            startIcon={<FilterListIcon />}
          >
            Filters
          </Button>

          <Button
            variant="contained"
            color="warning"
            // className="filter-button"
            onClick={handleOpenForm}
            sx={{
              fontSize: { xs: "11px", sm: "12px", md: "16px" },
              position: "sticky", // Keeps the button on the right
              right: 0,
              textTransform: "capitalize",
              marginLeft: "10px",
            }}
          >
            Add Product
          </Button>
        </Box>

        {/* <Button
            className="orange-btn"
            variant="contained"
            color="warning"
            onClick={handleOpenForm}
          >
            Add Product
          </Button> */}
        {loading ? (
          <CircularProgress />
        ) : error ? (
          <Typography color="error">{error}</Typography>
        ) : (
          <Grid2 container spacing={3}>
            {/* Sidebar in drawer on mobile */}
            <Drawer
              anchor="right"
              open={isDrawerOpen}
              onClose={toggleDrawer(false)}
              sx={{
                display: { xs: "block", sm: "none" }, // Only show drawer on mobile
              }}
            >
              <Sidebar
                productType={productType}
                setProductType={setProductType}
              />
            </Drawer>

            {/* Sidebar on the left for larger screens */}
            <Grid2
              sx={{ display: { xs: "none", sm: "block" } }}
              size={{ sm: 4, md: 2.5 }}
            >
              <Sidebar
                productType={productType}
                setProductType={setProductType}
              />
            </Grid2>

            {/* ProductList on the right */}
            <Grid2 size={{ xs: 12, sm: 8, md: 9.5 }}>
              <ProductList
                products={allProduct}
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
        handleModalClose={handleModalClose}
        setShowModal={setShowModal}
        setLoading={setLoading}
        setAllProduct={setAllProduct}
      />
    </>
  );
};

export default Products;
