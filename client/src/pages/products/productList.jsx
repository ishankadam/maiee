import React, { useEffect, useState } from "react";
import {
  Card,
  CardContent,
  CardMedia,
  Typography,
  Pagination,
  Grid2,
} from "@mui/material";
import "./productList.css";
import _ from "lodash";
import { imageUrl } from "../../api";

const ProductList = (props) => {
  const [page, setPage] = useState(1);
  const [displayedProducts, setDisplayedProducts] = useState([]);
  const [filteredCount, setFilteredCount] = useState(0);
  useEffect(() => {
    const productsPerPage = 12;
    const startIdx = page === 1 ? 0 : 12 + (page - 2) * 12;
    const endIdx = startIdx + productsPerPage;
    // Filter products based on category and subcategory
    const filteredList = (props.products || []).filter((item) => {
      // If category is "all", return all products
      if (props.productType.category === "all") {
        return true;
      }
      // If subCategory is "all", filter only by category
      if (props.productType.subCategory === "all") {
        return item.category === _.lowerCase(props.productType.category);
      }
      // Otherwise, filter by both category and subCategory
      return (
        item.category === _.lowerCase(props.productType.category) &&
        item.subcategory === _.lowerCase(props.productType.subCategory)
      );
    });
    console.log(filteredList.length);
    setFilteredCount(filteredList.length);
    // Paginate the filtered list
    const productList = filteredList.slice(startIdx, endIdx);
    setDisplayedProducts(productList);
  }, [props.products, page, props.productType]);

  const handlePageChange = (event, value) => {
    setPage(value);
  };

  const handleViewProduct = (index) => {
    props.setShowProduct({
      show: true,
      index: index,
      data: displayedProducts,
    });
  };

  return (
    <>
      <Grid2
        container
        spacing={2}
        sx={{
          background: "#fff",
          padding: { xs: "8px", sm: "8px", md: "10px" },
          boxShadow:
            "0 1px 3px rgba(0, 0, 0, 0.12), 0 1px 2px rgba(0, 0, 0, 0.24)",
          borderRadius: "5px",
          justifyContent: "space-around",
        }}
      >
        {displayedProducts.length > 0 ? (
          displayedProducts.map((product, index) => (
            // added size
            <Grid2 item size={{ xs: 6, sm: 6, md: 3 }} key={product.productId}>
              <Card
                className="product-card"
                onClick={() => handleViewProduct(index)}
              >
                <CardMedia
                  component="img"
                  image={`${imageUrl}${product.category}/${product.images}`}
                  alt={product.name}
                  sx={{
                    height: {
                      xs: "200px !important",
                      sm: "300px !important",
                      md: "300px !important",
                    },
                    borderRadius: "3px",
                    marginBottom: { xs: "5px", sm: "8px", md: "10px" },
                  }}
                />
                <CardContent
                  sx={{
                    justifyContent: "center",
                    display: "flex",
                    padding: "5px !important",
                    borderRadius: "3px",
                    background: "#1f2143",
                    backgroundImage:
                      "linear-gradient(32deg, rgba(8, 8, 8, 0.74) 30px, transparent)",
                  }}
                >
                  <Typography
                    gutterBottom
                    variant="h6"
                    component="div"
                    sx={{
                      color: "#fff !important",
                      padding: "2px !important",
                      fontWeight: "600",
                      letterSpacing: "1px",
                      fontSize: { xs: "17px", sm: "18px", md: "20px" },
                    }}
                  >
                    {product.name}
                  </Typography>
                </CardContent>
              </Card>
            </Grid2>
          ))
        ) : (
          <Typography className="no-records" variant="h5">
            No records found...
          </Typography>
        )}
      </Grid2>

      <Pagination
        color="primary"
        variant="outlined"
        shape="rounded"
        count={Math.ceil((filteredCount - 12) / 12) + 1}
        page={page}
        onChange={handlePageChange}
        sx={{
          mt: 2,
          mb: 2,
          display: "flex",
          justifyContent: "flex-end",
        }}
      />
    </>
  );
};

export default ProductList;
