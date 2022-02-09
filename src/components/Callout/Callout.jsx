import React, { useState } from "react";
import Cv from "./Cv";
export default function Callout() {
  const [show, setShow] = useState(false);
  const toggleShow = () => {
    setShow((prev) => !prev);
  };
  return (
    <div>
      {/* <!-- Callout--> */}
      <section className="callout">
        <div className="container px-4 px-lg-5 text-center">
          <h2 className="mx-auto mb-5">
            <em>Curriculum Vitae</em>
          </h2>
          {show ? <Cv /> : <></>}
          <button className="btn btn-primary btn-xl" onClick={toggleShow}>
            {show ? "Close" : "Inspect"}
          </button>
        </div>
      </section>
    </div>
  );
}
