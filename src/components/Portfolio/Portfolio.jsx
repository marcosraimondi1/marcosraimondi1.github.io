import React from "react";
import Item from "./Item/Item.jsx";

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
            <Item
              href="https://github.com/marcosraimondi1/AgroCRM"
              caption_title="Agro CRM"
              caption_description="A Customer Relationship Management app!"
              img_source="assets/img/portfolio/agro-project.jpg"
            />
            <Item
              href="http://iotdash.my.to"
              caption_title="IoT Dash"
              caption_description="A customizable dashboard for iot devices"
              img_source="assets/img/portfolio/iotdash.jpg"
            />
            <Item
              href="https://github.com/marcosraimondi1/musicVote"
              caption_title="Let's DJ"
              caption_description="A playlist voting system for parties"
              img_source="assets/img/portfolio/musicVote.jpg"
            />
            <Item
              href="https://github.com/marcosraimondi1"
              caption_title="Github Profile"
              caption_description="See all my projects at my github profile"
              img_source="assets/img/portfolio/github.jpg"
            />
          </div>
        </div>
      </section>
    </div>
  );
}
