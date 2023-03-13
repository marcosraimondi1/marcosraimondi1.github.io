import React, { useState } from "react";
import Cv from "./CV";

export default function Callout() {
  const [show, setShow] = useState(false);
  const [spanish, setSpanish] = useState(false);
  const toggleShow = () => {
    setShow((prev) => !prev);
  };
  const toggleSpanish = () => {
    setSpanish((prev) => !prev);
  };
  return (
    <div id="curriculum">
      {/* <!-- Callout--> */}
      <section className="callout">
        <div className="container px-4 px-lg-5 text-center">
          <h2 className="mx-auto mb-5">
            <em>Curriculum Vitae</em>
          </h2>
          {show ? (
            <>
              <button
                style={{ float: "right" }}
                className="btn btn-primary btn-sm"
                onClick={toggleSpanish}
              >
                {spanish ? "English" : "Español"}
              </button>
            </>
          ) : (
            <></>
          )}
          <Cv show={show} spanish={spanish} />
          <button className="btn btn-primary btn-xl" onClick={toggleShow}>
            {show ? "Close" : "Inspect"}
          </button>
        </div>
      </section>
    </div>
  );
}
