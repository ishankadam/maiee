import { Box, Button, Tab, Tabs, Typography } from "@mui/material";
import React, { useEffect, useState } from "react";
import ProductTable from "../products/productTable";
import {
  getAllCategories,
  getAllProducts,
  getAllTestimonials,
} from "../../api";
import { dashboardTabValue, findLabelByValue } from "../../common";
import ManageCategories from "./manageCategories";
import ManageClients from "./manageStats";

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
      <Box
        component="main"
        sx={{
          flexGrow: 1,
          p: 3,
          display: "flex",
          justifyContent: "space-between",
        }}
      >
        <Typography
          variant="h4"
          gutterBottom
          sx={{ display: "flex", justifyContent: "center" }}
        >
          {options}
        </Typography>
        <Button
          variant="contained"
          onClick={() => handleOpenForm(options)}
        >{`Add ${options}`}</Button>
      </Box>
      <Box sx={{ width: "100%" }}>
        <Tabs
          value={tabValue}
          onChange={handleOptions}
          aria-label="wrapped label tabs example"
        >
          <Tab value="one" label="Products" wrapped />
          <Tab value="two" label="Categories" />
          <Tab value="three" label="Statistics" />
        </Tabs>
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
