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
import { Padding } from "@mui/icons-material";

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

  // Handle page change
  const handlePageChange = (event, value) => {
    setPage(value);
  };

  const handleViewProduct = (index) => {
    props.setShowProduct({
      show: true,
      index: index,
      data: products,
    });
  };

  return (
    <>
      <Grid2
        container
        spacing={2}
        sx={{
          background: "#fff",
          padding: {
            xs: "8px",
            sm: "8px",
            md: "10px",
          },
          boxShadow:
            "0 1px 3px rgba(0, 0, 0, 0.12), 0 1px 2px rgba(0, 0, 0, 0.24)",
          borderRadius: "5px",
        }}
      >
        {products && products.length > 0 ? (
          products.map((product, index) => (
            <Grid2 size={{ xs: 6, sm: 6, md: 3 }} key={product.productId}>
              <Card
                className="product-card"
                onClick={() => handleViewProduct(index)}
              >
                <CardMedia
                  component="img"
                  image={product.image}
                  alt={product.name}
                  sx={{
                    height: {
                      xs: "200px !important",
                      sm: "300px !important",
                      md: "300px !important",
                    },
                    borderRadius: "3px",
                    marginBottom: {
                      xs: "5px",
                      sm: "8px",
                      md: "10px",
                    },
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
                      verticalAlign: "center",
                      padding: "2px !important",
                      margin: "0 !important",
                      borderRadius: "10px",
                      fontWeight: "600",
                      letterSpacing: "1px",
                      fontSize: {
                        xs: "17px",
                        sm: "18px",
                        md: "20px",
                      },
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
