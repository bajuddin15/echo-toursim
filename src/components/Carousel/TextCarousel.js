import React from "react";
import "./TextCarousel.css";
import { Box, Typography } from "@material-ui/core";

function TextCarousel() {
  return (
    <div className="container-fluid px-5 mt-5">
      <div
        style={{
          width: "100%",
          height: "70vh",
          marginTop: "100px",
          borderRadius: "40px",
          padding: "200px",
          color: "#fff",
        }}
        id="carouselExampleCaptions"
        className="carousel slide text__carousel"
        data-bs-ride="carousel">
        <div class="carousel-indicators">
          <button
            type="button"
            data-bs-target="#carouselExampleCaptions"
            data-bs-slide-to="0"
            class="active"
            aria-current="true"
            aria-label="Slide 1"></button>
          <button
            type="button"
            data-bs-target="#carouselExampleCaptions"
            data-bs-slide-to="1"
            aria-label="Slide 2"></button>
          <button
            type="button"
            data-bs-target="#carouselExampleCaptions"
            data-bs-slide-to="2"
            aria-label="Slide 3"></button>
        </div>
        <div className="carousel-inner">
          <div className="carousel-item active">
            <Typography
              variant="h4"
              className="d-block w-100"
              style={{ fontFamily: "Lobster, cursive" }}>
              I have been born and brought up in asr , must have lived half of
              my life there but the walk with Traundeep was something I had
              never discovered or even knew about in asr . Its an experience
              which is class apart . this story teller weaves his story around
              history , philosophy , mythology and in a sense the art of living
              . studded with yummy food from there hidden haunts is the icing on
              the cake . He gave special attention to kids , initiating them on
              this fantastic journey . Some memories got livened too . but to
              top it all is the ethereal , peaceful feeling in golden temple .
              simply the best . Highly recommended
            </Typography>
            <Typography
              variant="h4"
              className="d-block w-100 py-3 pt-5"
              style={{
                fontFamily: "Lobster, cursive",
                borderBottom: "4px solid red",
                color: "yellow",
              }}>
              Bajuddin Khan
            </Typography>
            {/* <div className="carousel-caption d-none d-md-block">
              <h5>First slide label</h5>
              <p>
                Some representative placeholder content for the first slide.
              </p>
            </div> */}
          </div>
          <div className="carousel-item">
            <Typography
              variant="h4"
              className="d-block w-100"
              style={{ fontFamily: "Lobster, cursive" }}>
              Ours was a large group which comprised of senior citizens,
              youngsters, couples, and children. Team Roobaroo is class apart in
              A to Z and to mention a few; their story telling, taking you
              through live experience on streets of Varanasi, connect with each
              member in the group, handling any last minute changes on the
              itinerary with smile and patience in fulfilling diverse wishes of
              the members are praise worthy. We had a very good pilgrimage and
              memorable trip to Kashi. This wouldn't have been possible without
              leadership of Aayush, Anupam and their wonderful team members
              viz., Saurabh, Mudita and Sudarshan. You guys are awesome ! Look
              forward to coming back, and love to stay in touch.
            </Typography>
            <Typography
              variant="h4"
              className="d-block w-100 py-3 pt-5"
              style={{
                fontFamily: "Lobster, cursive",
                borderBottom: "4px solid red",
                color: "yellow",
              }}>
              Faizan Ansari
            </Typography>
            {/* <div className="carousel-caption d-none d-md-block">
              <h5>Second slide label</h5>
              <p>
                Some representative placeholder content for the second slide.
              </p>
            </div> */}
          </div>
          <div className="carousel-item">
            <Typography
              variant="h4"
              className="d-block w-100"
              style={{ fontFamily: "Lobster, cursive" }}>
              Samir Kher was our daastan-goh during our visit .His story telling
              with maps ,paintings and sketches made our trip memorable. The
              food trail through old city was delicious . The visit to residency
              and his narration of events of first war of Independence was
              riveting. I could actually visualize the events unfolding in my
              mind. The food served for lunch and dinner at old havelis during
              the trip was authentic Lucknow food and delicious. Worth every
              rupee we paid for.
            </Typography>
            <Typography
              variant="h4"
              className="d-block w-100 py-3 pt-5"
              style={{
                fontFamily: "Lobster, cursive",
                borderBottom: "4px solid red",
                color: "yellow",
              }}>
              Bilal Ahamad
            </Typography>
            {/* <div className="carousel-caption d-none d-md-block">
              <h5>Third slide label</h5>
              <p>
                Some representative placeholder content for the third slide.
              </p>
            </div> */}
          </div>
        </div>
        <button
          className="carousel-control-prev"
          type="button"
          data-bs-target="#carouselExampleCaptions"
          data-bs-slide="prev">
          <span
            className="carousel-control-prev-icon"
            aria-hidden="true"></span>
          <span className="visually-hidden">Previous</span>
        </button>
        <button
          className="carousel-control-next"
          type="button"
          data-bs-target="#carouselExampleCaptions"
          data-bs-slide="next">
          <span
            className="carousel-control-next-icon"
            aria-hidden="true"></span>
          <span className="visually-hidden">Next</span>
        </button>
      </div>
    </div>
  );
}

export default TextCarousel;
