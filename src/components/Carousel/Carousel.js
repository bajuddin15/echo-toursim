import React from "react";

function Carousel() {
  const url1 =
    "https://wttc.org/DesktopModules/MVC/NewsArticleList/images/141_20201013185512_Consumer%20Survey%20Finds%2070%20Percent%20of%20Travelers%20Plan%20to%20Holiday%20in%202021.jpg";

  const url2 =
    "https://higherlogicdownload.s3.amazonaws.com/SRAINTERNATIONAL/UploadedImages/167e255a-8759-4a2f-92f6-591d6d8f7afb/Catalyst-pictures/Text-body-images/april2021/Picture_2_Travel.jpeg";
  const url3 =
    "https://www.dailynews.lk/sites/default/files/news/2021/05/10/05-Focus-01.jpg";

  return (
    <div className="container-fluid px-5 mt-5">
      <div
        style={{
          marginTop: "100px",
          borderRadius: "40px",
        }}
        id="carouselExampleCaptions"
        class="carousel slide"
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
            <img
              src={url1}
              className="d-block w-100"
              alt="..."
              style={{
                height: "70vh",
                width: "100%",
                objectFit: "cover",
                borderRadius: "40px",
              }}
            />
            <div className="carousel-caption d-none d-md-block">
              <h5>First slide label</h5>
              <p>
                Some representative placeholder content for the first slide.
              </p>
            </div>
          </div>
          <div className="carousel-item">
            <img
              src={url2}
              className="d-block w-100"
              alt="..."
              style={{
                height: "70vh",
                width: "100%",
                objectFit: "cover",
                borderRadius: "40px",
              }}
            />
            <div className="carousel-caption d-none d-md-block">
              <h5>Second slide label</h5>
              <p>
                Some representative placeholder content for the second slide.
              </p>
            </div>
          </div>
          <div className="carousel-item">
            <img
              src={url3}
              className="d-block w-100"
              alt="..."
              style={{
                height: "70vh",
                width: "100%",
                objectFit: "cover",
                borderRadius: "40px",
              }}
            />
            <div className="carousel-caption d-none d-md-block">
              <h5>Third slide label</h5>
              <p>
                Some representative placeholder content for the third slide.
              </p>
            </div>
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

export default Carousel;
