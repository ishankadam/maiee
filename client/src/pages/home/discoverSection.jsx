/* eslint-disable react-hooks/exhaustive-deps */
import { Box, Grid2, Typography } from "@mui/material";
import discoverImage from "../../assets/discover.jpeg";
import "../../css/home.scss";
import { discoverStats, discoverText } from "../../common";
import React, { useState, useEffect, useRef } from "react";
import CountUp from "react-countup";
import { Element } from "react-scroll";
const formattedText = discoverText.split("{{break}}").map((part, index) => (
  <React.Fragment key={index}>
    {part}
    <br />
  </React.Fragment>
));

const DiscoverSection = () => {
  const [isInView, setIsInView] = useState(false);
  const ref = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsInView(true);
          observer.disconnect(); // Stop observing after triggering once
        }
      },
      { threshold: 0.5 } // Adjust this value to trigger the animation earlier or later
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => {
      if (ref.current) {
        observer.unobserve(ref.current);
      }
    };
  }, []);

  return (
    <>
      <Element name="aboutSection">
        <Box
          sx={{
            background: "aliceblue",
            boxSizing: "border-box",
            padding: { xs: "20px", sm: "30px", md: "50px" },
          }}
        >
          <Grid2
            container
            spacing={1}
            sx={{ justifyContent: "center", alignItems: "center" }}
          >
            {/* Image Section */}
            <Grid2 size={{ xs: 12, md: 4 }}>
              <Box
                className="zoom-in"
                component="img"
                src={discoverImage}
                alt="Enterprise"
                sx={{
                  width: "100%",
                  height: "auto",
                  backgroundSize: "100%",
                  borderRadius: "8px",
                  boxShadow: "25px 25px 8px rgba(0, 0, 0, 0.25)",
                  maxHeight: { xs: "0vh", md: "500px" }, // Responsive height
                }}
              />
            </Grid2>

            {/* Text Section */}
            <Grid2
              size={{ xs: 12, md: 6 }}
              sx={{ marginLeft: { xs: 0, md: "60px" } }}
            >
              <Typography
                className="discover-title"
                variant="h4"
                component="h2"
                gutterBottom
                sx={{
                  fontFamily: "'Roboto Serif', serif",
                  color: "#33376F",
                  fontWeight: "Bold",
                  textAlign: { xs: "center", md: "left" },
                  fontSize: {
                    xs: "1rem",
                    sm: "1.5rem",
                    md: "1.6rem",
                    lg: "2rem",
                  },
                }}
              >
                DISCOVER OUR ENTERPRISE
              </Typography>
              <Typography
                variant="body1"
                paragraph
                sx={{
                  color: "#6E7277",
                  fontSize: { xs: "0.8rem", md: "1.0rem", lg: "1.2rem" },
                  wordSpacing: "3px",
                  textAlign: { xs: "center", md: "left" },
                }}
              >
                {formattedText}
              </Typography>
            </Grid2>
          </Grid2>
        </Box>

        {/* Stats Section with Counter Animation */}
        <Box
          sx={{
            backgroundColor: "#E1E3FF",
            padding: { xs: "20px", md: "20px 80px" },
          }}
          ref={ref} // Adding ref to monitor when this section is in view
        >
          <Grid2
            container
            justifyContent="center"
            alignItems="center"
            spacing={3}
          >
            {discoverStats.map((items) => {
              return (
                <Grid2
                  className="zoom-in"
                  size={{ xs: 12, md: 4, sm: 4 }}
                  key={`stats-${items.label}`}
                >
                  <Typography
                    variant="h3"
                    align="center"
                    color="#33376F"
                    sx={{
                      fontWeight: "bold",
                      fontSize: { xs: "1.8rem", md: "3rem" }, // Responsive font size
                    }}
                  >
                    {/* Apply count-up animation when in view */}
                    {isInView ? (
                      <CountUp
                        start={0}
                        end={items.value}
                        duration={2.5} // Customize duration as needed
                        delay={0}
                      />
                    ) : (
                      0
                    )}
                  </Typography>
                  <Typography
                    variant="h6"
                    align="center"
                    color="#686B9B"
                    sx={{
                      textTransform: "uppercase",
                      fontSize: { xs: "1rem", md: "1.2rem" }, // Responsive font size
                    }}
                  >
                    {items.label}
                  </Typography>
                </Grid2>
              );
            })}
          </Grid2>
        </Box>
      </Element>
    </>
  );
};

export default DiscoverSection;
