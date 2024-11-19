import React, { useEffect, useState } from "react";
import {
  Box,
  Typography,
  Avatar,
  IconButton,
  useMediaQuery,
} from "@mui/material";
import ArrowBackIosIcon from "@mui/icons-material/ArrowBackIos";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import "../../css/home.scss";
import { getAllTestimonials, imageUrl } from "../../api";

const Testimonials = () => {
  const [testimonials, setTestimonials] = useState([]);
  const [currentIndex, setCurrentIndex] = useState(0);
  const isMobile = useMediaQuery("(max-width:600px)");

  useEffect(() => {
    getAllTestimonials({ setTestimonials });
  }, []);

  const handleNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % testimonials.length);
  };

  const handlePrevious = () => {
    setCurrentIndex(
      (prevIndex) => (prevIndex - 1 + testimonials.length) % testimonials.length
    );
  };

  const displayedTestimonials = isMobile
    ? testimonials.slice(currentIndex, currentIndex + 1) // Show only one card on mobile
    : testimonials.slice(currentIndex, currentIndex + 3);

  if (
    !isMobile &&
    displayedTestimonials.length < 3 &&
    testimonials.length > 3
  ) {
    displayedTestimonials.push(
      ...testimonials.slice(0, 3 - displayedTestimonials.length)
    );
  }

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

      <Box
        display="flex"
        justifyContent="center"
        gap="20px"
        flexWrap="wrap"
        mb={4}
      >
        {displayedTestimonials.map((testimonial, index) => (
          <Box
            key={index}
            className="testimonial-card"
            sx={{
              padding: "20px",
              borderRadius: "20px",
              textAlign: "center",
              boxShadow: "0px 4px 8px rgba(0, 0, 0, 0.2)",
              maxWidth: "300px",
              margin: "0 auto",
            }}
          >
            <Avatar
              alt={testimonial.name}
              src={`${imageUrl}testimonial/${testimonial.image}`}
              sx={{ width: 70, height: 70, margin: "0 auto 20px" }}
            />
            <Typography
              variant="body1"
              gutterBottom
              sx={{
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                minHeight: "100px",
              }}
            >
              {testimonial.comments}
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
          </Box>
        ))}
      </Box>

      {/* Navigation Buttons */}
      <Box
        sx={{
          display: "flex",
          justifyContent: "center",
        }}
      >
        <IconButton
          aria-label="previous"
          onClick={handlePrevious}
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
          onClick={handleNext}
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
    </Box>
  );
};

export default Testimonials;
