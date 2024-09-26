/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect, useState } from "react";
import {
  Grid2,
  Card,
  CardContent,
  CardMedia,
  Typography,
  Pagination,
} from "@mui/material";
import "./productList.css";
import { allProducts } from "../../common";
import _ from "lodash";

const ProductList = (props) => {
  const [page, setPage] = useState(1);
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const productsPerPage = page === 1 ? 12 : 10; // 12 products on the first page, 10 on the rest
    const startIdx = page === 1 ? 0 : 12 + (page - 2) * 10;
    const endIdx = startIdx + productsPerPage;
    const filteredList = allProducts.filter((item) => {
      // If selected subCategory is "all", only filter by category
      if (props.productType.subCategory === "all") {
        return item.category === _.lowerCase(props.productType.category);
      } else {
        return (
          item.category === _.lowerCase(props.productType.category) &&
          item.type === _.lowerCase(props.productType.subCategory)
        );
      }
    });
    const productList = filteredList.slice(startIdx, endIdx);
    setProducts(productList);
  }, [allProducts, page, props.productType]);

  useEffect(() => {}, [props.productType, allProducts]);

  // Handle page change
  const handlePageChange = (event, value) => {
    setPage(value);
  };

  return (
    <>
      <Grid2 container spacing={3}>
        {products && products.length > 0 ? (
          products.map((product) => (
            <Grid2 item size={{ xs: 12, sm: 6, md: 3 }} key={product.productId}>
              <Card className="product-card">
                <CardMedia
                  component="img"
                  height="300"
                  image={product.image} // Replace with the actual image path
                  alt={product.name}
                />
                {product.soldOut && <div className="sold-out">SOLD OUT</div>}
                {product.readyToShip && (
                  <div className="ready-to-ship">Ready To Ship</div>
                )}
                <CardContent>
                  <Typography
                    gutterBottom
                    variant="h6"
                    component="div"
                    sx={{ color: "#33376f" }}
                  >
                    {product.name}
                  </Typography>
                </CardContent>
              </Card>
            </Grid2>
          ))
        ) : (
          <Typography className="no-records" variant="h3">
            No records found...
          </Typography>
        )}
      </Grid2>

      <Pagination
        count={Math.ceil((allProducts.length - 12) / 10) + 1}
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
