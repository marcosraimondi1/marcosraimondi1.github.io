import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useCallToAction } from "./useCallToAction";

export default function CallToAction() {
  const { likes, onClick } = useCallToAction();
  return (
    <div>
      {/* <!-- Call to Action--> */}
      <section className="content-section bg-primary text-white">
        <div className="container px-4 px-lg-5 text-center">
          <h2 className="mb-4">
            If you liked what you saw, leave some love behind
          </h2>
          <button className="btn btn-xl btn-light me-4" onClick={onClick}>
            Click Me!
          </button>
          <>
            <FontAwesomeIcon className="love" icon="heart" size="2x" />
            <p style={{ display: "inline" }} className="fa-2x">
              {" "}
              {likes}
            </p>
          </>
        </div>
      </section>
    </div>
  );
}
