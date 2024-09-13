import React from "react";
import { Box, Grid, Typography, Avatar, IconButton } from "@mui/material";
import ArrowBackIosIcon from "@mui/icons-material/ArrowBackIos";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import { testimonials } from "../../common";

const Testimonials = () => {
  return (
    <Box sx={{ backgroundColor: "#2E3440", padding: "40px 0", color: "white" }}>
      <Typography variant="h5" align="center" gutterBottom>
        Testimonials
      </Typography>
      <Typography
        variant="h4"
        align="center"
        gutterBottom
        sx={{ color: "#FF7D4D" }}
      >
        What Our Customers Say
      </Typography>

      <Grid container justifyContent="center" alignItems="center" spacing={4}>
        {testimonials.map((testimonial, index) => (
          <Grid item xs={12} sm={6} md={4} key={index}>
            <Box
              sx={{
                padding: "20px",
                backgroundColor: "#3B4252",
                borderRadius: "10px",
                textAlign: "center",
                boxShadow: "0px 4px 8px rgba(0, 0, 0, 0.2)",
              }}
            >
              <Avatar
                alt={testimonial.name}
                src={testimonial.image}
                sx={{ width: 60, height: 60, margin: "0 auto 20px" }}
              />
              <Typography variant="body1" gutterBottom>
                {testimonial.text}
              </Typography>
              <Typography
                variant="h6"
                color="primary"
                gutterBottom
                sx={{ color: "#FF7D4D" }}
              >
                {testimonial.name}
              </Typography>
              <Typography
                variant="subtitle2"
                color="textSecondary"
                sx={{ color: "#ffffff" }}
              >
                {testimonial.role}
              </Typography>
            </Box>
          </Grid>
        ))}
      </Grid>

      {/* Navigation Buttons */}
      {true && (
        <Box
          sx={{
            display: "flex",
            justifyContent: "center",
            marginTop: "20px",
          }}
        >
          <IconButton aria-label="previous">
            <ArrowBackIosIcon sx={{ color: "white" }} />
          </IconButton>
          <IconButton aria-label="next">
            <ArrowForwardIosIcon sx={{ color: "white" }} />
          </IconButton>
        </Box>
      )}
    </Box>
  );
};

export default Testimonials;
