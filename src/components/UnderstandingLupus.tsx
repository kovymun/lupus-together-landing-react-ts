import { Element } from "react-scroll";
import "../styles/lupus.css";

import hands from "../assets/safe-hands.webp";
import community from "../assets/community.webp";

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

          <div className="lupus-content">
            <div className="text-image-row reverse-row">
              <img
                src={hands}
                alt="Supportive hands symbolizing care and connection"
                className="float-image img-one"
                loading="lazy"
              />
              <p className="lupus-text">
                Lupus occurs when your immune system attacks your body's own
                tissues and organs. Inflammation caused by lupus can affect the
                joints, skin, kidneys, blood cells, brain, heart, and lungs.
              </p>
            </div>
            <div className="text-image-row">
              <img
                src={community}
                alt="Group of friends providing support"
                className="float-image img-two"
                loading="lazy"
              />
              <p className="lupus-text">
                According to the Lupus Foundation of America, an estimated 5
                million people around the world are living with lupus. In South
                Africa, it's believed to affect about 1 in every 1000 people,
                though many cases may go undiagnosed. While lupus is more common
                among women, it can affect anyone. That's why our mission is to
                offer support, understanding, and connection to everyone
                navigating this journey.
              </p>
            </div>

            <p className="mission-statement">
              While there is currently no cure, with early diagnosis and proper
              medical care, many people with lupus can live a full and
              meaningful life.
            </p>
          </div>
        </div>
      </section>
    </Element>
  );
};

export default UnderstandingLupus;
