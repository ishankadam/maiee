import React, { useEffect, useState } from "react";
import { Container, Grid2, Typography, Link, Box } from "@mui/material";
import "../../css/home.scss";
import { useNavigate } from "react-router-dom";

const Footer = (props) => {
  const [categories, setCategories] = useState(props.categories || []);
  const navigate = useNavigate();

  const handleScrollToSection = (section) => {
    navigate("/", { state: { scrollTo: section } });
  };

  const handlePageChange = (item) => {
    navigate("/product", { state: { item } }); // Pass item state if needed
  };
  useEffect(() => {
    setCategories(props.categories);
  }, [props.categories]);

  return (
    <footer
      style={{
        backgroundColor: "#161C2D",
        padding: "0",
        paddingTop: "25px",
        color: "#fff",
      }}
    >
      <Container sx={{ textAlign: { xs: "center", sm: "left", md: "left" } }}>
        <Grid2 container spacing={1}>
          {/* Left Side (Company Information) */}
          <Grid2 size={{ xs: 12, sm: 6, md: 6 }}>
            <Typography variant="h5" gutterBottom sx={{ fontWeight: "bold" }}>
              MAIEE ENTERPRISE
            </Typography>
            <Box
              component="ul"
              sx={{
                listStyleType: "none",
                padding: "7px 0",
                display: "grid",
                gap: "8px",
              }}
            >
              <Typography
                variant="body1"
                paragraph
                sx={{ color: "#E3E4E6", lineHeight: "25px" }}
              >
                Maiee Enterprise is your trusted partner for premium garment
                accessories, dedicated to enhancing business efficiency,
                regulatory compliance, and customer satisfaction. With a skilled
                team and advanced processes, we deliver superior products,
                striving to exceed your expectations as your strategic ally.
              </Typography>
            </Box>
          </Grid2>

          {/* Center Section (Links) */}
          <Grid2
            size={{ xs: 5, sm: 3, md: 3 }}
            sx={{
              alignItems: { xs: "left", sm: "center", md: "center" },
              display: "flex",
              flexDirection: "column",
            }}
          >
            <Typography variant="h6" gutterBottom>
              Company
            </Typography>

            <Box
              component="ul"
              sx={{ display: "grid", gap: "8px", padding: 0 }}
            >
              <Box component="li">
                <Link
                  onClick={() =>
                    (window.location.href = window.location.origin)
                  }
                  color="inherit"
                >
                  Home
                </Link>
              </Box>

              <Box component="li">
                <Link
                  onClick={() => handleScrollToSection("aboutSection")}
                  color="inherit"
                >
                  About Us
                </Link>
              </Box>
              <Box component="li">
                <Link
                  onClick={() => handleScrollToSection("contactSection")}
                  color="inherit"
                >
                  Contact Us
                </Link>
              </Box>
            </Box>
          </Grid2>

          {/* Product Section */}
          <Grid2
            size={{ xs: 7, sm: 3, md: 3 }}
            sx={{
              display: "flex",
              flexDirection: "column",
              alignItems: "left",
            }}
          >
            <Typography variant="h6" gutterBottom>
              Products
            </Typography>
            <Box
              component="ul"
              sx={{
                listStyleType: "none",
                padding: 0,
                display: "grid",
                gridTemplateColumns: "repeat(2, 1fr)",
                gap: "8px",
              }}
            >
              {categories?.length > 0 &&
                categories.map((category, index) => (
                  <Box component="li" key={index}>
                    <Link
                      onClick={() => handlePageChange(category.name)}
                      color="inherit"
                    >
                      {category.name}
                    </Link>
                  </Box>
                ))}
            </Box>
          </Grid2>
        </Grid2>
      </Container>
    </footer>
  );
};

export default Footer;
