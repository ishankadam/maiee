import { Box, Grid2, Typography } from "@mui/material";
import React from "react";
import discoverImage from "../../assets/discover.jpeg";
import { discoverStats, discoverText } from "../../common";

const formattedText = discoverText.split("{{break}}").map((part, index) => (
  <React.Fragment key={index}>
    {part}
    <br />
  </React.Fragment>
));
const DiscoverSection = () => {
  return (
    <>
      <Box sx={{ padding: "50px 20px" }}>
        <Grid2 container spacing={4} alignItems="center">
          {/* Image Section */}
          <Grid2 item size={{ xs: 12, md: 4 }}>
            <Box
              component="img"
              src={discoverImage}
              alt="Enterprise"
              sx={{
                width: "100%",
                borderRadius: "8px",
                boxShadow: "0px 4px 12px rgba(0, 0, 0, 0.1)",
              }}
            />
          </Grid2>

          {/* Text Section */}
          <Grid2
            item
            size={{ xs: 12, md: 6 }}
            sx={{ marginLeft: { xs: 0, md: 4 } }}
          >
            <Typography
              variant="h4"
              component="h2"
              gutterBottom
              color="primary"
            >
              DISCOVER OUR ENTERPRISE
            </Typography>
            <Typography variant="body1" paragraph>
              {formattedText}
            </Typography>
          </Grid2>
        </Grid2>
      </Box>
      <Box sx={{ backgroundColor: "#EAEAFB", padding: "20px 0" }}>
        <Grid2
          container
          justifyContent="center"
          alignItems="center"
          spacing={2}
        >
          {discoverStats.map((items, index) => {
            return (
              <Grid2 item size={{ xs: 4 }} key={`stats-${items.label}`}>
                <Typography variant="h3" align="center" color="primary">
                  {items.value}
                </Typography>
                <Typography
                  variant="subtitle1"
                  align="center"
                  color="textSecondary"
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
