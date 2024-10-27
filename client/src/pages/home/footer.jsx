import React from "react";
import { Container, Grid2, Typography, IconButton, Link } from "@mui/material";
import { Twitter, Facebook, Instagram, LinkedIn } from "@mui/icons-material";
import "../../css/home.scss";

const Footer = () => {
  return (
    <footer
      style={{ backgroundColor: "#161C2D", padding: "30px 0", color: "#fff" }}
    >
      <Container>
        <Grid2 container spacing={4}>
          {/* Left Side (Company Information) */}
          <Grid2 size={{ xs: 12, md: 4 }}>
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
            {/* Social Media Icons */}
            <div>
              <IconButton
                className="footer-icon"
                color="inherit"
                component={Link}
                href="#"
                aria-label="Twitter"
              >
                <Twitter />
              </IconButton>
              <IconButton
                className="footer-icon"
                color="inherit"
                component={Link}
                href="#"
                aria-label="Facebook"
              >
                <Facebook />
              </IconButton>
              <IconButton
                className="footer-icon"
                color="inherit"
                component={Link}
                href="#"
                aria-label="Instagram"
              >
                <Instagram />
              </IconButton>
              <IconButton
                className="footer-icon"
                color="inherit"
                component={Link}
                href="#"
                aria-label="LinkedIn"
              >
                <LinkedIn />
              </IconButton>
            </div>
          </Grid2>

          {/* Center Section (Links) */}
          <Grid2 size={{ xs: 12, md: 2 }}>
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

          {/* Product Section */}
          <Grid2 size={{ xs: 12, md: 2 }}>
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
          </Grid2>

          {/* Services Section */}
          <Grid2 size={{ xs: 12, md: 2 }}>
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
          </Grid2>

          {/* Legal Section */}
          <Grid2 size={{ xs: 12, md: 2 }}>
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
          </Grid2>
        </Grid2>
      </Container>
    </footer>
  );
};

export default Footer;
