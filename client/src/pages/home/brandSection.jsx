import { Box, Typography } from "@mui/material";
import React from "react";
import heroSection from "../../assets/hero_section.png";

const BrandSection = () => {
  return (
    <Box
      sx={{
        position: "relative",
        width: "100vw",
        height: "100vh", // Full screen height
        overflow: "hidden", // Ensures the image stays within the viewport
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
          objectFit: "cover", // Ensures the image covers the entire screen while maintaining aspect ratio
          zIndex: -1, // Keeps the image behind the text
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
          backgroundColor: "rgba(0, 0, 0, 0)", // Optional: semi-transparent background for contrast
          padding: "20px",
          borderRadius: "8px",
        }}
      >
        <Typography variant="h1" gutterBottom sx={{ color: "#E55C35" }}>
          MAIEE ENTERPRISES
        </Typography>
        <Typography variant="h4" sx={{ color: "#33376F" }}>
          "THE ART OF YARN"
        </Typography>
      </Box>
    </Box>
  );
};

export default BrandSection;
