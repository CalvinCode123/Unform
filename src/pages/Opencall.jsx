import React from "react";
import poster from "../assets/Poster.jpg";

function Opencall() {
  return (
    <div>
      <section id="section-contact" className="container-fluid">
        <div className="row">
          <div className="col-12 text-center">
            <div className="contact-heading"></div>
            <div className="contact-para-heading">Calling all creators:</div>
            <div className="contact-para">
              If you would like to showcase your work to an audience without
              participating in the art market, we would love to hear from you
              too
            </div>
          </div>
        </div>

        <div className="row card-row-2">
          <div className="col-lg-6 contact-image">
            <img className="poster" src={poster} />
          </div>
          <div className="col-lg-6 contact-form-div">
            <iframe src="https://docs.google.com/forms/d/e/1FAIpQLSducKUyCF4e3Mka31pYBuTNGCM-8bfdATXGG8NRJQ3YPohrXQ/viewform?embedded=true">
              Loading…
            </iframe>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Opencall;
