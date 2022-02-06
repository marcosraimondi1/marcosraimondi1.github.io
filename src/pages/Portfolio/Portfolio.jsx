import React from "react";

export default function Portfolio() {
  return (
    <div>
      {/* <!-- Portfolio--> */}
      <section className="content-section" id="portfolio">
        <div className="container px-4 px-lg-5">
          <div className="content-section-heading text-center">
            <h3 className="text-secondary mb-0">Portfolio</h3>
            <h2 className="mb-5">Recent Projects</h2>
          </div>
          <div className="row gx-0">
            <div className="col-lg-6">
              <a
                className="portfolio-item"
                href="http://agro-crm-project.herokuapp.com"
              >
                <div className="caption">
                  <div className="caption-content">
                    <div className="h2">Agro CRM</div>
                    <p className="mb-0">
                      A Customer Relationship Management app!
                    </p>
                  </div>
                </div>
                <img
                  className="img-fluid"
                  src="assets/img/agro-project.png"
                  alt="..."
                  width="700"
                  height="467"
                />
              </a>
            </div>
            <div className="col-lg-6">
              <a
                className="portfolio-item"
                href="https://turnosyagenda.herokuapp.com"
              >
                <div className="caption">
                  <div className="caption-content">
                    <div className="h2">Turnero</div>
                    <p className="mb-0">Booking services made easy!</p>
                  </div>
                </div>
                <img
                  className="img-fluid"
                  src="assets/img/turnero.jpg"
                  alt="..."
                  width="700"
                  height="467"
                />
              </a>
            </div>
            <div className="col-lg-6">
              <a className="portfolio-item" href="">
                <div className="caption">
                  <div className="caption-content">
                    <div className="h2">Coming Soon</div>
                    <p className="mb-0">In process...</p>
                  </div>
                </div>
                <img
                  className="img-fluid"
                  src="assets/img/coming-soon.jpg"
                  alt="..."
                  width="700"
                  height="467"
                />
              </a>
            </div>
            <div className="col-lg-6">
              <a
                className="portfolio-item"
                href="https://github.com/marcosraimondi1"
              >
                <div className="caption">
                  <div className="caption-content">
                    <div className="h2">GitHub</div>
                    <p className="mb-0">
                      Check Out all my projects in my github page!
                    </p>
                  </div>
                </div>
                <img
                  className="img-fluid"
                  src="assets/img/github.png"
                  alt="..."
                  width="700"
                  height="467"
                />
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
