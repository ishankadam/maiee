import { Box, Button, Tab, Tabs, Typography } from "@mui/material";
import React, { Fragment, useEffect, useState } from "react";
import ProductTable from "../products/productTable";
import {
  getAllCategories,
  getAllProducts,
  getAllTestimonials,
} from "../../api";
import { dashboardTabValue, findLabelByValue } from "../../common";
import ManageCategories from "./manageCategories";
import ManageClients from "./manageStats";
import SelectDropdown from "../../components/dropdown/selectDropdown";

const Dashboard = () => {
  const [options, setOptions] = useState("Products");
  const [products, setProducts] = useState([]);
  const [categories, setCategories] = useState([]);
  const [testimonials, setTestimonials] = useState([]);
  const [productsloading, setProductsLoading] = useState(false);
  const [categoryloading, setCategoryLoading] = useState(false);
  const [testimonialsloading, setTestimonialsLoading] = useState(false);
  const [tabValue, setTabValue] = React.useState("one");
  const [showCategoryModal, setShowCategoryModal] = useState({
    show: false,
    isEdit: false,
    data: {},
  });

  const [showProductModal, setShowProductModal] = useState({
    show: false,
    isEdit: false,
    data: {},
  });

  useEffect(() => {
    setProductsLoading(true);
    setCategoryLoading(true);
    setTestimonialsLoading(true);
    getAllProducts({ setProducts, setLoading: setProductsLoading });
    getAllCategories({ setCategories, setLoading: setCategoryLoading });
    getAllTestimonials({ setTestimonials, setLoading: setTestimonialsLoading });
  }, []);

  const handleOpenForm = (page) => {
    if (page === "Categories") {
      setShowCategoryModal({
        show: true,
        isEdit: false,
        data: {},
      });
    } else if (page === "Products") {
      setShowProductModal({
        show: true,
        isEdit: false,
        data: {},
      });
    }
  };

  const handleOptions = (event, newValue) => {
    setOptions(findLabelByValue(dashboardTabValue, newValue));
    setTabValue(newValue);
  };
  return (
    <>
      <Tabs
        value={tabValue}
        onChange={handleOptions}
        aria-label="wrapped label tabs example"
        centered
        sx={{
          mb: 3,
          color: "#212121",
          fontWeight: "Bold",
          bgcolor: "#33376F",
          boxShadow: "0 1px 3px rgba(0,0,0,0.12), 0 1px 2px rgba(0,0,0,0.24)",
          "& .MuiTab-root": {
            fontFamily: "'Roboto Serif', serif",
            color: "white", // Ensure tabs are white
            fontWeight: "bold", // Make text bold
            padding: "12px 16px", // Base padding
            fontSize: "13px", // Base font size
            "@media (min-width: 600px)": {
              fontFamily: "'Roboto Serif', serif",
              fontSize: "16px", // Tablet font size
              padding: "14px 20px", // Tablet padding
            },
            "@media (min-width: 960px)": {
              fontFamily: "'Roboto Serif', serif",
              fontSize: "17px", // Laptop font size
              padding: "16px 24px", // Laptop padding
            },
          },
          "& .Mui-selected": {
            color: "white !important",
          },
          "& .MuiTabs-indicator": {
            backgroundColor: "white",
            marginBottom: "1px", // White bottom border when a tab is selected
          },
        }}
      >
        <Tab value="one" label="Products" wrapped />
        <Tab value="two" label="Categories" />
        <Tab value="three" label="Statistics" />
      </Tabs>

      <Box
        component="main"
        sx={{
          px: 3,
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center", // Align items vertically center
          flexDirection: { xs: "column", sm: "row" },
        }}
      >
        <Typography
          variant="h4"
          gutterBottom
          sx={{
            color: "#212121",
            fontFamily: "'Roboto Serif', serif",
            fontWeight: "Bold",
            textAlign: "left", // Always left-align
            fontSize: {
              xs: "1.2rem",
              sm: "1.5rem",
              md: "1.5rem",
              lg: "1.7rem",
            },
          }}
        >
          {options}
        </Typography>

        <Box
          sx={{
            width: { xs: "100%", sm: "70%", md: "66%" },
            display: "flex",
            alignItems: "center",
            flexDirection: { xs: "column", sm: "row" },
          }}
        >
          {options === "Products" && (
            <>
              <SelectDropdown
                label="Category"
                sx={{
                  marginRight: { xs: "0", sm: "15px" },
                }}
              />
              <SelectDropdown
                label="Sub Category"
                sx={{
                  marginRight: { xs: "0", sm: "15px" },
                }}
              />
            </>
          )}

          {options !== "Stats" && (
            <Button
              variant="contained"
              onClick={() => handleOpenForm(options)}
              color="warning"
              sx={{
                fontSize: { xs: "11px", sm: "12px", md: "16px" },
                textTransform: "capitalize",
                minWidth: "150px",
                height: "56px",
                marginTop: "16px !important",
                marginBottom: "8px !important",
              }}
            >
              {`Add ${options}`}
            </Button>
          )}
        </Box>
      </Box>

      {tabValue === "one" && (
        <ProductTable
          products={products}
          setProducts={setProducts}
          loading={productsloading}
          setLoading={setProductsLoading}
          showModal={showProductModal}
          setShowModal={setShowProductModal}
        />
      )}
      {tabValue === "two" && (
        <ManageCategories
          categories={categories}
          setCategories={setCategories}
          showModal={showCategoryModal}
          setShowModal={setShowCategoryModal}
          loading={categoryloading}
          setLoading={setCategoryLoading}
        />
      )}
      {tabValue === "three" && (
        <ManageClients
          testimonials={testimonials}
          loading={testimonialsloading}
          setLoading={setTestimonialsLoading}
          setTestimonials={setTestimonials}
        />
      )}
    </>
  );
};

export default Dashboard;
