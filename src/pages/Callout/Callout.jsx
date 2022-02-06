import React from "react";

export default function Callout() {
  return (
    <div>
      {/* <!-- Callout--> */}
      <section className="callout">
        <div className="container px-4 px-lg-5 text-center">
          <h2 className="mx-auto mb-5">
            Welcome to
            <em>your</em>
            next website!
          </h2>
          <a
            className="btn btn-primary btn-xl"
            href="https://startbootstrap.com/theme/stylish-portfolio/"
          >
            Download Now!
          </a>
        </div>
      </section>
    </div>
  );
}
