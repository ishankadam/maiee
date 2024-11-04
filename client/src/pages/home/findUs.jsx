import {
  Card,
  CardContent,
  CardMedia,
  Typography,
  Grid,
  Box,
} from "@mui/material";
import React from "react";
import findUs1 from "../../assets/findus1.png";
import "../../css/findUs.css";
import { Element } from "react-scroll";
const FindUs = () => {
  return (
    <Element name="contactSection">
      <Box
        sx={{
          backgroundColor: "#E1E3FF",
          padding: { xs: "20px", sm: "30px", md: "40px", lg: "50px" },
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
                <CardMedia
                  className="card-image"
                  component="img"
                  height="140"
                  image={findUs1}
                  alt="find us"
                />
              </Grid>
              <Grid item xs={12} sm={6} className="content-container">
                <CardContent>
                  <Typography
                    variant="body1"
                    sx={{
                      fontFamily: " 'Berkshire Swash', serif",
                      fontWeight: "400",
                      fontSize: "20px",
                      marginBottom: "20px",
                    }}
                  >
                    "Find us at"
                  </Typography>
                  {/* <Divider sx={{ my: 1 }} /> */}

                  <>
                    <Typography
                      gutterBottom
                      // variant="h2"
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
                      variant="h2"
                      sx={{
                        color: "#494949",
                        fontSize: "18px",
                        fontFamily: "'Roboto Serif', serif",
                        marginBottom: "20px",
                      }}
                    >
                      14, Navi Gully, MJ Market, Zaveri Bazaar, kalbadevi,
                      Mumbai, Maharastra 400002
                    </Typography>
                    <Typography
                      gutterBottom
                      variant="body2"
                      component="div"
                      sx={{
                        color: "#494949",
                        fontSize: "16px",
                        fontFamily: "'Roboto Serif', serif",
                      }}
                    >
                      Email: maieenter@gmail.com
                    </Typography>
                    <Typography
                      gutterBottom
                      variant="body2"
                      component="div"
                      sx={{
                        color: "#494949",
                        fontSize: "16px",
                        fontFamily: "'Roboto Serif', serif",
                      }}
                    >
                      Phone Number: +91 9029390400 / +91 9029390500
                    </Typography>
                  </>
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
