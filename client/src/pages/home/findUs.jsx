import {
  Card,
  CardContent,
  Typography,
  Grid,
  Box,
  Link,
  CardMedia,
} from "@mui/material";
import React, { useState } from "react";
import "../../css/findUs.css";
import findUs1 from "../../assets/findus1.png";
import { Element } from "react-scroll";
import LocalPhoneIcon from "@mui/icons-material/LocalPhone";
import MailIcon from "@mui/icons-material/Mail";

const FindUs = () => {
  const [showMap, setShowMap] = useState(false);

  const toggleMapVisibility = () => {
    setShowMap((prev) => !prev); // Toggle map visibility
  };

  return (
    <Element name="contactSection">
      <Box
        sx={{
          backgroundColor: "#E1E3FF",
          padding: { xs: "20px", sm: "20px", md: "40px", lg: "50px" },
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
          FIND US
        </Typography>
        <div className="findus-container">
          <Card
            className="card-container"
            sx={{
              backgroundColor: "#fff !important",
            }}
          >
            <Grid container>
              <Grid item xs={12} sm={6}>
                {/* Show the map only when showMap is true */}
                {showMap ? (
                  <Box
                    component="iframe"
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3770.5620346820596!2d72.82825131509037!3d18.948296287168542!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be7ce2e9f711aeb%3A0x981d73af17c46db0!2s14%2C%20Navi%20Gully%2C%20MJ%20Market%2C%20Zaveri%20Bazaar%2C%20Kalbadevi%2C%20Mumbai%2C%20Maharashtra%20400002!5e0!3m2!1sen!2sin!4v1692722440123!5m2!1sen!2sin"
                    height="100%"
                    width="100%"
                    allowFullScreen
                    loading="lazy"
                    style={{ border: 0 }}
                    title="Maiee Enterprises Location"
                  />
                ) : (
                  <CardMedia
                    className="card-image"
                    component="img"
                    height="140"
                    image={findUs1}
                    alt="find us"
                  />
                )}
              </Grid>
              <Grid item xs={12} sm={6} className="content-container">
                <CardContent>
                  <Typography
                    variant="body1"
                    sx={{
                      fontFamily: "'Berkshire Swash', serif",
                      fontWeight: "400",
                      fontSize: "20px",
                      marginBottom: "20px",
                    }}
                  >
                    "Find us at"
                  </Typography>

                  <Typography
                    gutterBottom
                    component="div"
                    sx={{
                      fontFamily: "'Cinzel', serif",
                      fontSize: {
                        xs: "28px",
                        sm: "32px",
                        md: "36px",
                        lg: "42px",
                      },
                      color: "#E55C35",
                      marginBottom: "20px",
                      fontWeight: "600",
                    }}
                  >
                    MAIEE ENTERPRISES
                  </Typography>
                  <Typography
                    sx={{
                      color: "#494949",
                      fontSize: "18px",
                      fontFamily: "'Roboto Serif', serif",
                      marginBottom: "20px",
                    }}
                  >
                    14, Navi Gully, MJ Market, Zaveri Bazaar, Kalbadevi, Mumbai,
                    Maharashtra 400002
                    <br />
                    <Link
                      component="button"
                      onClick={toggleMapVisibility}
                      sx={{
                        color: "#E55C35",
                        fontSize: "16px",
                        cursor: "pointer",
                        textDecoration: "underline",
                        "&:hover": {
                          textDecoration: "none",
                        },
                      }}
                    >
                      {showMap ? "Show Shop" : "View in maps"}
                    </Link>
                  </Typography>
                  <Typography
                    gutterBottom
                    variant="body2"
                    component="a"
                    href="mailto:maieenter@gmail.com"
                    sx={{
                      display: "flex",
                      alignItems: "center",
                      color: "#494949",
                      fontSize: "16px",
                      fontFamily: "'Roboto Serif', serif",
                      textDecoration: "none",
                      "&:hover": {
                        textDecoration: "underline",
                      },
                    }}
                  >
                    <MailIcon sx={{ color: "#33376F", marginRight: "8px" }} />{" "}
                    maieenter@gmail.com
                  </Typography>

                  <Typography
                    gutterBottom
                    variant="body2"
                    component="div"
                    sx={{
                      display: "flex",
                      alignItems: "flex-start", // Ensures alignment at the top on smaller screens
                      color: "#494949",
                      fontSize: "16px",
                      fontFamily: "'Roboto Serif', serif",
                      mt: 2,
                    }}
                  >
                    <LocalPhoneIcon
                      sx={{ color: "#33376F", marginRight: "8px" }}
                    />
                    <Box
                      sx={{
                        display: "flex",
                        flexDirection: {
                          xs: "column",
                          sm: "column",
                          md: "row",
                        }, // Stacks numbers on small screens, row on larger
                      }}
                    >
                      <Box component="span">+91 9029390400 /</Box>
                      <Box
                        component="span"
                        sx={{
                          marginLeft: { sm: "8px" },
                          marginTop: { xs: "4px", sm: 0 },
                        }} // Adds space between numbers
                      >
                        +91 9029390500
                      </Box>
                    </Box>
                  </Typography>
                </CardContent>
              </Grid>
            </Grid>
          </Card>
        </div>
      </Box>
    </Element>
  );
};

export default FindUs;
