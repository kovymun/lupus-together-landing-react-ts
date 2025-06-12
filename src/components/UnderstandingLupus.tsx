import { Element } from "react-scroll";
import "../styles/lupus.css";

const UnderstandingLupus = () => {
  return (
    <Element name="members">
      <section className="members-section">
        {" "}
        <div className="section-wrapper" style={{ color: "black" }}>
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
            <p className="lupus-text">
              Lupus occurs when your immune system attacks your body’s own
              tissues and organs. Inflammation caused by lupus can affect the
              joints, skin, kidneys, blood cells, brain, heart, and lungs.
            </p>
            <p className="lupus-text">
              According to the Lupus Foundation of America, an estimated 5
              million people globally live with lupus. It affects approximately
              1 in 1,000 people in South Africa, though it may be
              underdiagnosed. While lupus can affect anyone, 90% of diagnosed
              cases are women, and it’s more common among people of African,
              Asian, Hispanic, and Indigenous descent.
            </p>
            <p className="lupus-text">
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
