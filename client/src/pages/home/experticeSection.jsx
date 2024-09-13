import { Box, Grid, Typography } from "@mui/material";
import React from "react";
import { experticesData } from "../../common";

function ExperticeSection() {
  return (
    <Box sx={{ padding: "20px", backgroundColor: "#FFEDE5" }}>
      <Typography
        variant="h4"
        align="center"
        gutterBottom
        sx={{ color: "#33376F" }}
      >
        AREA OF EXPERTICES
      </Typography>
      <Grid container spacing={4} justifyContent="center">
        {experticesData.map((item, index) => (
          <Grid item xs={12} sm={6} md={4} key={index}>
            <Box
              sx={{
                border: "4px solid #3F3D56",
                borderRadius: "10px",
                overflow: "hidden",
                boxShadow: "0 4px 6px rgba(0, 0, 0, 0.1)",
                background: "#3F3D56",
              }}
            >
              <img
                src={item.imgSrc}
                alt={item.label}
                style={{ width: "100%", height: "auto" }}
              />
              <Typography
                variant="h6"
                align="center"
                sx={{
                  backgroundColor: "#ffffff",
                  padding: "10px 0",
                  color: "#33376F",
                }}
              >
                {item.label}
              </Typography>
            </Box>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
}

export default ExperticeSection;
