import React from "react";
import { Container, Grid, Typography, IconButton, Link } from "@mui/material";
import { Twitter, Facebook, Instagram, LinkedIn } from "@mui/icons-material";

const Footer = () => {
  return (
    <footer
      style={{ backgroundColor: "#1c1e26", padding: "40px 0", color: "#fff" }}
    >
      <Container>
        <Grid container spacing={4}>
          {/* Left Side (Company Information) */}
          <Grid item xs={12} md={4}>
            <Typography variant="h4" gutterBottom sx={{ fontWeight: "bold" }}>
              MAIEE ENTERPRISE
            </Typography>
            <Typography variant="body2" paragraph>
              Maiee Enterprise is your trusted partner for premium garment
              accessories, dedicated to enhancing business efficiency,
              regulatory compliance, and customer satisfaction. With a skilled
              team and advanced processes, we deliver superior products,
              striving to exceed your expectations as your strategic ally.
            </Typography>
            {/* Social Media Icons */}
            <div>
              <IconButton
                color="inherit"
                component={Link}
                href="#"
                aria-label="Twitter"
              >
                <Twitter />
              </IconButton>
              <IconButton
                color="inherit"
                component={Link}
                href="#"
                aria-label="Facebook"
              >
                <Facebook />
              </IconButton>
              <IconButton
                color="inherit"
                component={Link}
                href="#"
                aria-label="Instagram"
              >
                <Instagram />
              </IconButton>
              <IconButton
                color="inherit"
                component={Link}
                href="#"
                aria-label="LinkedIn"
              >
                <LinkedIn />
              </IconButton>
            </div>
          </Grid>

          {/* Center Section (Links) */}
          <Grid item xs={12} md={2}>
            <Typography variant="h6" gutterBottom>
              Company
            </Typography>
            <ul style={{ listStyleType: "none", padding: 0 }}>
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
          </Grid>

          {/* Product Section */}
          <Grid item xs={12} md={2}>
            <Typography variant="h6" gutterBottom>
              Product
            </Typography>
            <ul style={{ listStyleType: "none", padding: 0 }}>
              <li>
                <Link href="#" color="inherit">
                  Features
                </Link>
              </li>
              <li>
                <Link href="#" color="inherit">
                  Pricing
                </Link>
              </li>
              <li>
                <Link href="#" color="inherit">
                  News
                </Link>
              </li>
              <li>
                <Link href="#" color="inherit">
                  Help desk
                </Link>
              </li>
            </ul>
          </Grid>

          {/* Services Section */}
          <Grid item xs={12} md={2}>
            <Typography variant="h6" gutterBottom>
              Services
            </Typography>
            <ul style={{ listStyleType: "none", padding: 0 }}>
              <li>
                <Link href="#" color="inherit">
                  Digital Marketing
                </Link>
              </li>
              <li>
                <Link href="#" color="inherit">
                  Content Writing
                </Link>
              </li>
              <li>
                <Link href="#" color="inherit">
                  SEO for Business
                </Link>
              </li>
              <li>
                <Link href="#" color="inherit">
                  UI Design
                </Link>
              </li>
            </ul>
          </Grid>

          {/* Legal Section */}
          <Grid item xs={12} md={2}>
            <Typography variant="h6" gutterBottom>
              Legal
            </Typography>
            <ul style={{ listStyleType: "none", padding: 0 }}>
              <li>
                <Link href="#" color="inherit">
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link href="#" color="inherit">
                  Terms & Conditions
                </Link>
              </li>
              <li>
                <Link href="#" color="inherit">
                  Return Policy
                </Link>
              </li>
            </ul>
          </Grid>
        </Grid>
      </Container>
    </footer>
  );
};

export default Footer;
