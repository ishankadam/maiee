import React from "react";
import { Box, Grid2, Typography, Avatar, IconButton } from "@mui/material";
import ArrowBackIosIcon from "@mui/icons-material/ArrowBackIos";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import ArrowCircleLeftOutlinedIcon from "@mui/icons-material/ArrowCircleLeftOutlined";
import { testimonials } from "../../common";
import "../../css/home.scss";

const Testimonials = () => {
  return (
    <Box
      className="testimonials"
      sx={{
        padding: { xs: "20px", sm: "30px", md: "50px" },
        color: "white",
      }}
    >
      <Typography
        variant="h5"
        align="center"
        gutterBottom
        sx={{ fontSize: { xs: "1.0rem", sm: "1.2rem", md: "1.5rem" } }}
      >
        Testimonials
      </Typography>
      <Typography
        variant="h4"
        align="center"
        gutterBottom
        sx={{
          color: "#FF7D4D",
          fontFamily: "'Roboto Serif', serif",
          fontWeight: "bold",
          marginBottom: "30px",
          fontSize: {
            xs: "1rem",
            sm: "1.5rem",
            md: "1.6rem",
            lg: "2rem",
          },
        }}
      >
        What Our Customers Say
      </Typography>

      <Grid2 container justifyContent="center" alignItems="center" spacing={4}>
        {testimonials.map((testimonial, index) => (
          <Grid2 size={{ xs: 12, sm: 6, md: 4 }} key={index}>
            <Box
              className="testimonial-card"
              sx={{
                padding: "20px",
                borderRadius: "20px",
                textAlign: "center",
                boxShadow: "0px 4px 8px rgba(0, 0, 0, 0.2)",
              }}
            >
              <Avatar
                alt={testimonial.name}
                src={testimonial.image}
                sx={{ width: 70, height: 70, margin: "0 auto 20px" }}
              />
              <Typography variant="body1" gutterBottom>
                {testimonial.text}
              </Typography>
              <Typography
                variant="h6"
                color="primary"
                gutterBottom
                sx={{
                  color: "#FF7D4D",
                  marginTop: "20px",
                  fontFamily: "'Roboto Serif', serif",
                  fontWeight: "bold",
                }}
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
          </Grid2>
        ))}
      </Grid2>

      {/* Navigation Buttons */}
      {true && (
        <Box
          sx={{
            display: "flex",
            justifyContent: "center",
            marginTop: "30px",
          }}
        >
          <IconButton
            aria-label="previous"
            sx={{
              border: "2px solid white",
              borderRadius: "50%",
              textAlign: "center",
              margin: "3px 20px",
              background: "rgba(255, 255, 255, 0.15)",
              backdropFilter: "blur(25px)",
            }}
          >
            <ArrowBackIosIcon
              sx={{ color: "white", paddingLeft: "4px", margin: "2px 0" }}
            />
          </IconButton>
          <IconButton
            aria-label="next"
            sx={{
              border: "2px solid white",
              borderRadius: "50%",
              textAlign: "center",
              margin: "3px 20px",
              background: "rgba(255, 255, 255, 0.15)",
              backdropFilter: "blur(25px)",
            }}
          >
            <ArrowForwardIosIcon
              sx={{ color: "white", paddingLeft: "4px", margin: "2px 0" }}
            />
          </IconButton>
        </Box>
      )}
    </Box>
  );
};

export default Testimonials;
