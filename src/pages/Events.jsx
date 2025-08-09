import React from "react";
import poster from "../assets/Poster.jpg";
import Flip from "../components/Flip.jsx";

function Events() {
  return (
    <div>
      (Click on poster for more info)
      <div id="pixelContent">
        <Flip imageSrc={poster} imageAlt="Unform event cover" hover={false}>
          <div>
            <div className="contact-para-heading">
              Unform is a new arts event with a difference.
            </div>

            <div className="event-para">
              Pop in to our affordable, informal art market in Dublin 1 on
              Sunday the 27th of August! Artists and makers will be selling a
              diverse range of works, and we’ll have some great DJs to play us
              through the day.
            </div>

            <div className="event-para">
              We are charging artists zero fees or commissions — being an artist
              is expensive enough! And pieces for sale will range from €2 to
              €100 to ensure accessibility and affordability for as many people
              as possible. We want to see people selling their work, and we want
              to see people investing in art.
            </div>

            <div className="event-para">
              Our pals at Shorter Stories will also be hosting a creative
              sharing space on the day, where people will be able to appreciate
              various forms of storytelling in a friendly environment. It’s
              shaping up to be a great Sunday!
            </div>

            <div className="event-para">
              <p>Event: Unform</p>
              <p>Venue: Juno, 58 Dorset Street Lower, Dublin 1</p>
              <p>Date: 27th of August, 2023</p>
              <p>Art market: 14:00–19:00, free to enter</p>
              <p>
                Shorter Stories: 15:00–17:00, €8 — head to shorterstories for
                tickets
              </p>
            </div>
          </div>
        </Flip>
      </div>
    </div>
  );
}

export default Events;
