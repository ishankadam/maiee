import React, { useEffect, useState } from "react";
import { Container, Grid2, Typography, IconButton, Link } from "@mui/material";
import { Twitter, Facebook, Instagram, LinkedIn } from "@mui/icons-material";
import "../../css/home.scss";

const Footer = (props) => {
  const [categories, setCategories] = useState(props.categories || []);

  useEffect(() => {
    setCategories(props.categories);
  }, [props.categories]);

  return (
    <footer
      style={{ backgroundColor: "#161C2D", padding: "30px 0", color: "#fff" }}
    >
      <Container>
        <Grid2 container spacing={4}>
          {/* Left Side (Company Information) */}
          <Grid2 size={{ xs: 12, md: 6 }}>
            <Typography variant="h5" gutterBottom sx={{ fontWeight: "bold" }}>
              MAIEE ENTERPRISE
            </Typography>
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
          </Grid2>

          {/* Product Section */}
          <Grid2 size={{ xs: 12, md: 3 }}>
            <Typography variant="h6" gutterBottom>
              Product
            </Typography>
            <ul style={{ listStyleType: "none", padding: 0 }}>
              {categories?.length > 0 &&
                categories?.map((category) => {
                  return (
                    <li>
                      <Link href="#" color="inherit">
                        {category.name}
                      </Link>
                    </li>
                  );
                })}
            </ul>
          </Grid2>

          {/* Center Section (Links) */}
          <Grid2 size={{ xs: 12, md: 3 }}>
            <Typography variant="h6" gutterBottom>
              Company
            </Typography>
            <ul style={{}}>
              <li>
                <Link href="#" color="inherit">
                  About us
                </Link>
              </li>
              <li>
                <Link href="#" color="inherit">
                  Contact us
                </Link>
              </li>
              <li>
                <Link href="#" color="inherit">
                  Careers
                </Link>
              </li>
              <li>
                <Link href="#" color="inherit">
                  Press
                </Link>
              </li>
            </ul>
          </Grid2>
        </Grid2>
      </Container>
    </footer>
  );
};

export default Footer;
