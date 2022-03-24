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
              href="http://agro-crm-project.herokuapp.com"
              caption_title="Agro CRM"
              caption_description="A Customer Relationship Management app!"
              img_source="assets/img/portfolio/agro-project.jpg"
            />
            <Item
              href="https://turnosyagenda.herokuapp.com"
              caption_title="Turnero"
              caption_description="Booking services and scheduling an agenda"
              img_source="assets/img/portfolio/turnero.jpg"
            />
            <Item
              href="http://multiapp.my.to/spotify"
              caption_title="Spotify Playlist Downloader"
              caption_description="App to download your spotify playlists"
              img_source="assets/img/portfolio/spotify.png"
            />
            <Item
              href="http://multiapp.my.to"
              caption_title="App Platform"
              caption_description="Check out all my other projects"
              img_source="assets/img/portfolio/multiapp.png"
            />
          </div>
        </div>
      </section>
    </div>
  );
}
