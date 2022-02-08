import React from "react";

export default function Header() {
  return (
    <div>
      {/* <!-- Header--> */}
      <header
        id="page-top"
        className="masthead d-flex align-items-center"
      >
        <div className="container px-4 px-lg-5 text-center">
          <h1 className="mb-1">Marcos Raimondi</h1>
          <h3 className="mb-5">
            <em>Welcome to my page, have a look!</em>
          </h3>
          <a className="btn btn-primary btn-xl" href="#about">
            Find Out More
          </a>
        </div>
      </header>
    </div>
  );
}
