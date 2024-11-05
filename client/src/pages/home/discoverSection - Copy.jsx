import { Box, Grid2, Typography } from "@mui/material";
// import React from "react";
import discoverImage from "../../assets/discover.jpeg";
import "../../css/home.scss";
import { discoverStats, discoverText } from "../../common";
import React, { useState, useEffect, useRef } from "react";
import CountUp from "react-countup";

const formattedText = discoverText.split("{{break}}").map((part, index) => (
  <React.Fragment key={index}>
    {part}
    <br />
  </React.Fragment>
));

const DiscoverSection = () => {
  return (
    <>
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
          <Grid2 item size={{ xs: 12, md: 4 }}>
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
                maxHeight: { xs: "0vh", md: "500px" },
              }}
            />
          </Grid2>

          {/* Text Section */}
          <Grid2
            item
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

      {/* stats */}
      <Box
        sx={{
          backgroundColor: "#E1E3FF",
          padding: { xs: "20px", md: "20px 80px" },
        }}
      >
        <Grid2
          container
          justifyContent="center"
          alignItems="center"
          spacing={3}
        >
          {discoverStats.map((items, index) => {
            return (
              <Grid2
                className="zoom-in"
                item
                size={{ xs: 12, md: 4, sm: 4 }}
                key={`stats-${items.label}`}
              >
                <Typography
                  variant="h3"
                  align="center"
                  color="#33376F"
                  sx={{
                    fontWeight: "bold",
                    fontSize: { xs: "1.8rem", md: "3rem" },
                  }}
                >
                  {items.value}
                </Typography>
                <Typography
                  variant="h6"
                  align="center"
                  color="#686B9B"
                  sx={{
                    textTransform: "uppercase",
                    fontSize: { xs: "1rem", md: "1.2rem" },
                  }}
                >
                  {items.label}
                </Typography>
              </Grid2>
            );
          })}
        </Grid2>
      </Box>
    </>
  );
};

export default DiscoverSection;
