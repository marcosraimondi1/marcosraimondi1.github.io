import React from "react";

export default function CallToAction() {
  return (
    <div>
      {/* <!-- Call to Action--> */}
      <section className="content-section bg-primary text-white">
        <div className="container px-4 px-lg-5 text-center">
          <h2 className="mb-4">
            The buttons below are impossible to resist...
          </h2>
          <a className="btn btn-xl btn-light me-4" href="#!">
            Click Me!
          </a>
          <a className="btn btn-xl btn-dark" href="#!">
            Look at Me!
          </a>
        </div>
      </section>
    </div>
  );
}
