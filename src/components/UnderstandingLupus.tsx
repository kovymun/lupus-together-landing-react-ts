import { Element } from "react-scroll";
import "../styles/lupus.css";

import ribbon from "../assets/ribbon.webp";
import doctor from "../assets/doctor.webp";

const UnderstandingLupus = () => {
  return (
    <Element name="lupus">
      <section className="understanding-lupus-section">
        <div className="section-wrapper">
          <div className="section-header">
            <h2 className="section-title">Understanding Lupus</h2>
            <p>
              Lupus is a chronic autoimmune disease that can affect many parts
              of the body. It can be difficult to diagnose and often
              misunderstood. Our goal is to gently educate and support everyone
              navigating this journey.
            </p>
          </div>

          <div className="lupus-content content">
            <div className="text-image-row">
              <img
                src={ribbon}
                alt="Supportive hands symbolizing care and connection"
                className="float-image img-one"
                loading="lazy"
              />
              <p>
                Lupus is an autoimmune condition where the immune system,
                instead of protecting the body, mistakenly reacts against
                healthy tissues. This may cause inflammation in areas like the
                skin and joints. Every lupus journey is unique, but support and
                understanding make all the difference.
              </p>
            </div>
            <div className="text-image-row reverse-row">
              <img
                src={doctor}
                alt="Group of friends providing support"
                className="float-image img-two"
                loading="lazy"
              />
              <p>
                According to the Lupus Foundation of America, an estimated 5
                million people worldwide are living with lupus. In South Africa,
                it's believed to affect about 1 in every 1000 people, and many
                cases may go undiagnosed. Lupus is more common in women, but it
                can affect anyone. That's why our mission is to offer support,
                understanding, and connection to everyone navigating this
                journey.
              </p>
            </div>
            <p className="mission-statement">
              Living with lupus can be difficult, but with early diagnosis,
              proper care, and strong support, many go on to live full,
              meaningful, empowered lives.
            </p>
          </div>
        </div>
      </section>
    </Element>
  );
};

export default UnderstandingLupus;
