import React from "react";

export default function Footer() {
  return (
    <div>
      {/* <!-- Footer--> */}
      <footer className="footer text-center">
        <div className="container px-4 px-lg-5">
          <ul className="list-inline mb-5">
            <li className="list-inline-item">
              <a
                className="social-link rounded-circle text-white mr-3"
                href="#!"
              >
                <i className="icon-social-facebook"></i>
              </a>
            </li>
            <li className="list-inline-item">
              <a
                className="social-link rounded-circle text-white mr-3"
                href="#!"
              >
                <i className="icon-social-twitter"></i>
              </a>
            </li>
            <li className="list-inline-item">
              <a className="social-link rounded-circle text-white" href="#!">
                <i className="icon-social-github"></i>
              </a>
            </li>
          </ul>
          <p className="text-muted small mb-0">
            Copyright &copy; Your Website 2021
          </p>
        </div>
      </footer>
    </div>
  );
}
