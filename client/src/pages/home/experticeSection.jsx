import { Box, Grid2, Typography } from "@mui/material";
import React from "react";
import { experticesData, experticesDescription } from "../../common";

import "../../css/home.scss";

function ExperticeSection() {
  return (
    <Box
      sx={{
        padding: { xs: "20px", sm: "30px", md: "40px", lg: "50px" },
        backgroundColor: "rgba(255,69,0,0.15)",
      }}
    >
      <Typography
        variant="h4"
        align="center"
        gutterBottom
        sx={{
          color: "#33376F",
          fontWeight: "bold",
          marginBottom: "20px",
          fontFamily: "'Roboto Serif', serif",
          fontSize: {
            xs: "1rem",
            sm: "1.5rem",
            md: "1.6rem",
            lg: "2rem",
          },
        }}
      >
        AREA OF EXPERTICES
      </Typography>
      <Grid2 container spacing={4} justifyContent="center">
        {experticesData[0].items.map((item, index) => (
          <Grid2 item size={{ xs: 12, sm: 6, md: 4 }} key={index}>
            <Box
              className="card"
              sx={{
                border: "4px solid #33376F",
                borderRadius: "5px",
                overflow: "hidden",
                boxShadow: "0 4px 6px rgba(0, 0, 0, 0.1)",
                background: "#33376F",
                position: "relative",
              }}
            >
              <img
                src={item.imgSrc}
                alt={item.label}
                style={{ width: "100%", height: "auto", objectFit: "cover" }}
              />
              {/* cardbody */}
              <Box
                className="card-body"
                sx={{
                  width: "100%",
                  height: "0",

                  left: "0",
                  right: "0",
                  top: "0",
                  position: "absolute",
                  // background: "#1f3d4738",
                  background: "rgba(22,28,45,0.5)",
                  backdropFilter: "blur(5px)",
                  transition: ".5s ease",
                  overflow: "hidden",
                  cursor: "pointer",
                  display: "flex",
                  alignItems: "center",
                }}
              >
                <Typography
                  variant="h6"
                  sx={{
                    color: "#fff",
                    padding: { xs: "10px", sm: "20px", md: "20px" },
                    fontSize: {
                      xs: "0.9rem",
                      sm: "0.9rem",
                      md: "0.8rem",
                      lg: "1.20rem",
                    },
                  }}
                >
                  {item.description}
                </Typography>
              </Box>

              <Typography
                variant="h6"
                align="center"
                sx={{
                  backgroundColor: "#ffffff",
                  padding: "10px 0",
                  color: "#33376F",
                  fontWeight: "bold",
                  fontFamily: "'Roboto Serif', serif",
                  textTransform: "uppercase",
                  fontSize: { xs: "1rem" },
                }}
              >
                {item.name}
              </Typography>
            </Box>
          </Grid2>
        ))}
      </Grid2>
    </Box>
  );
}

export default ExperticeSection;
