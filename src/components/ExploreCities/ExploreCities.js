import React from "react";
import CityData from "./cityData";

import { Box, Typography } from "@material-ui/core";
import CityCard from "../Card/CityCard";

function ExploreCities() {
  return (
    <Box className="container-fluid" style={{ padding: "60px" }}>
      <Box className="row my-4">
        <Typography
          variant="h2"
          className="text-center fw-bold"
          style={{ paddingBottom: "80px" }}>
          Join Us & Explore Indian Cities Differently
        </Typography>
        {CityData.map((data) => {
          return (
            <Box className="col-lg-3 col-md-4 my-4">
              <CityCard name={data.name} imageUrl={data.imageUrl} />
            </Box>
          );
        })}
      </Box>
    </Box>
  );
}

export default ExploreCities;
