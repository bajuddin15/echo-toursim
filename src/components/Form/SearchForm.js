import React from "react";
import { Box, makeStyles, Typography } from "@material-ui/core";

const useStyles = makeStyles({
  pathway: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    flexDirection: "column",
  },
  exploreExp: {
    fontWeight: "bold",
  },
  exploreSearch: {
    marginTop: "15px",
    color: "#878787",
  },
  search__btn: {
    width: "100%",
    padding: "15px 0px",
    fontSize: "22px",
    fontWeight: "bold",
    backgroundColor: "#ff0000",
    color: "#fff",
  },
});

function SearchForm() {
  const classes = useStyles();
  return (
    <Box
      className="container-fluid  mt-5"
      style={{
        padding: "40px 60px",
      }}>
      <Box className={classes.pathway}>
        <Typography className={classes.exploreExp} variant="h2" component="h2">
          Explore Our Experiences
        </Typography>
        <Typography className={classes.exploreSearch} variant="h6">
          Search and explore our walks and experiences happening across India
        </Typography>
      </Box>
      <Box
        style={{
          backgroundColor: "#fff",
          padding: "10px 60px",
          marginTop: "70px",
          border: "1px solid gray",
        }}>
        {/* Form code */}
        <form>
          <fieldset>
            {/* <legend>Disabled fieldset example</legend> */}
            <Box className="select__input row py-5 mt-4">
              <div class="mb-3 col-md-3">
                <label
                  for="disabledSelect"
                  className="form-label fs-4 fw-bold px-2 ">
                  Select State
                </label>
                <select
                  id="disabledSelect"
                  class="form-select py-3 fs-4 fw-bold text-primary">
                  <option>Uttar Pradesh</option>
                  <option>Rajasthan</option>
                  <option>Maharashtra</option>
                  <option>Bihar</option>
                  <option>Madhya Pradesh</option>
                </select>
              </div>
              <div class="mb-3 col-md-3">
                <label
                  for="disabledSelect"
                  className="form-label fs-4 fw-bold px-2">
                  Select District
                </label>
                <select
                  id="disabledSelect"
                  className="form-select py-3 fs-4 fw-bold text-primary">
                  <option>Bulandshahr</option>
                  <option>Disabled select</option>
                  <option>Disabled select</option>
                  <option>Disabled select</option>
                  <option>Disabled select</option>
                </select>
              </div>
              <div class="mb-3 col-md-3">
                <label
                  for="disabledSelect"
                  className="form-label fs-4 fw-bold px-2">
                  Start Date
                </label>
                <div
                  id="date-picker-example"
                  class="md-form md-outline input-with-post-icon datepicker"
                  inline="true">
                  <input
                    placeholder="Select date"
                    type="date"
                    id="example"
                    className="form-control py-3 fs-4 fw-bold text-primary"
                  />
                </div>
              </div>
              <div class="mb-3 col-md-3">
                <label
                  for="disabledSelect"
                  className="form-label fs-4 fw-bold px-2">
                  End Date
                </label>
                <div
                  id="date-picker-example"
                  className="md-form md-outline input-with-post-icon datepicker"
                  inline="true">
                  <input
                    placeholder="Select date"
                    type="date"
                    id="example"
                    className="form-control py-3 fs-4 fw-bold text-primary"
                  />
                </div>
              </div>
            </Box>
            <Box className="pb-5 pt-2">
              <div class="mb-3">
                <div class="form-check">
                  <input
                    class="form-check-input"
                    type="checkbox"
                    id="disabledFieldsetCheck"
                  />
                  <label class="form-check-label" for="disabledFieldsetCheck">
                    Can't check this
                  </label>
                </div>
              </div>
              <button type="submit" className={classes.search__btn}>
                Search
              </button>
            </Box>
          </fieldset>
        </form>
      </Box>
    </Box>
  );
}

export default SearchForm;
