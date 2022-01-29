import React from "react";
import "./HomeScreen.css";
import { Box, Typography, makeStyles, Grid } from "@material-ui/core";
import Carousel from "../components/Carousel/Carousel";
import PathCard from "../components/Card/PathCard";
import TeamCard from "../components/Card/TeamCard";
import IntroVideo from "../components/Video/IntroVideo";

const useStyles = makeStyles({
  pathway: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    flexDirection: "column",
    marginTop: "40px",
  },
  exploreExp: {
    fontWeight: "bold",
  },
  exploreSearch: {
    marginTop: "15px",
    color: "#878787",
  },
  pathcard: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    margin: "40px 60px",
  },

  // our teams css
  our__teams: {
    textAlign: "center",
    margin: "100px 0px",
  },
});

function HomeScreen() {
  const classes = useStyles();
  return (
    <Box>
      <Carousel />

      <Box className={classes.pathway}>
        <Typography className={classes.exploreExp} variant="h2" component="h2">
          Explore Our Experiences
        </Typography>
        <Typography className={classes.exploreSearch} variant="h6">
          Search and explore our walks and experiences happening across India
        </Typography>
      </Box>

      {/* Path for explore  our site */}

      <Box className={classes.pathcard}>
        <Box
          className="container-fluid"
          style={{
            backgroundColor: "#f9e5bc",
            padding: "30px 80px",
            borderRadius: "30px",
          }}>
          <Box className="row my-4">
            <Box className="col-lg-2 col-md-4 my-4 ">
              <PathCard />
            </Box>
            <Box className="col-lg-2 col-md-4 my-4">
              <PathCard />
            </Box>
            <Box className="col-lg-2 col-md-4 my-4">
              <PathCard />
            </Box>
            <Box className="col-lg-2 col-md-4 my-4">
              <PathCard />
            </Box>
            <Box className="col-lg-2 col-md-4 my-4">
              <PathCard />
            </Box>
            <Box className="col-lg-2 col-md-4 my-4">
              <PathCard />
            </Box>
          </Box>
        </Box>
      </Box>

      {/* Intro Video */}
      <IntroVideo />

      {/* story tellers */}

      {/* Meet Our Teams */}
      <Box className={classes.our__teams}>
        <Box
          className="container-fluid"
          style={{
            backgroundColor: "#000",
            padding: "30px 80px",
            borderRadius: "30px",
            margin: "80px 0px",
          }}>
          <Typography
            className={classes.exploreExp}
            variant="h2"
            component="h2"
            style={{
              color: "#fff",
              borderBottom: "2px solid #fff",
              paddingBottom: "30px",
              marginBottom: "60px",
            }}>
            Meet Our Teams
          </Typography>

          <Box className="row my-4">
            <Box className="col-lg-3 col-md-4 my-4">
              <TeamCard />
            </Box>
            <Box className="col-lg-3 col-md-4 my-4">
              <TeamCard />
            </Box>
            <Box className="col-lg-3 col-md-4 my-4">
              <TeamCard />
            </Box>
            <Box className="col-lg-3 col-md-4 my-4">
              <TeamCard />
            </Box>
          </Box>
        </Box>
      </Box>
    </Box>
  );
}

export default HomeScreen;
