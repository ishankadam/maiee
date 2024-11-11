import { Box, Typography } from "@mui/material";
import React from "react";
import heroSection from "../../assets/hero_section.png";

const BrandSection = () => {
  return (
    <Box
      sx={{
        position: "relative",
        height: { xs: "55vh", sm: "60vh", md: "100vh", lg: "100vh" },
        overflow: "hidden",
      }}
    >
      {/* Full-Screen Image */}
      <Box
        component="img"
        src={heroSection}
        alt="Home image"
        sx={{
          position: "absolute",
          top: 0,
          left: 0,
          width: "100%",
          height: "100%",
          objectFit: "cover",
          zIndex: -1,
        }}
      />

      {/* Centered Text */}
      <Box
        sx={{
          position: "absolute",
          top: "50%",
          left: "50%",
          transform: "translate(-50%, -50%)",
          color: "white",
          textAlign: "center",
          backgroundColor: "rgba(0, 0, 0, 0)",
          padding: "20px",
          borderRadius: "8px",
        }}
      >
        <Typography
          className="fade-up"
          variant="h1"
          gutterBottom
          sx={{
            color: "#E55C35",
            fontWeight: "Bold",
            fontSize: { xs: "2.7rem", sm: "3rem", md: "4rem", lg: "6rem" },
          }}
        >
          MAIEE ENTERPRISES
        </Typography>
        <Typography
          className="fade-down"
          variant="h4"
          sx={{
            color: "#33376F",
            fontFamily: "'Roboto Serif', serif",
            fontWeight: "Bold",
            fontSize: {
              xs: "1.5rem",
              sm: "1.75rem",
              md: "2rem",
              lg: "2.125rem",
            },
          }}
        >
          "THE ART OF YARN"
        </Typography>
      </Box>
    </Box>
  );
};

export default BrandSection;
