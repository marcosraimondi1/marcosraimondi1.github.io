import scripts from "./static/scripts.js";
import Navigation from "./components/Navigation/Navigation.jsx";
import Header from "./components/Header/Header.jsx";
import About from "./components/About/About.jsx";
import Services from "./components/Services/Services.jsx";
import Callout from "./components/Callout/Callout.jsx";
import Portfolio from "./components/Portfolio/Portfolio.jsx";
import CallToAction from "./components/CallToAction/CallToAction.jsx";
import Map from "./components/Map/Map.jsx";
import Footer from "./components/Footer/Footer.jsx";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

function App() {
  return (
    <div className="App">
      {/* <!-- Navigation--> */}
      <Navigation />
      {/* <!-- Header--> */}
      <Header />
      {/* <!-- About--> */}
      <About />
      {/* <!-- Services--> */}
      <Services />
      {/* <!-- Callout--> */}
      <Callout />
      {/* <!-- Portfolio--> */}
      <Portfolio />
      {/* <!-- Call to Action--> */}
      <CallToAction />
      {/* <!-- Map--> */}
      <Map />
      {/* <!-- Footer--> */}
      <Footer />
      {/* <!-- Scroll to Top Button--> */}
      <a className="scroll-to-top rounded" href="#page-top">
        <FontAwesomeIcon icon="angle-up" />
      </a>
      {/*
      <!-- Bootstrap core JS--> */}
      <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/js/bootstrap.bundle.min.js"></script>
      {/*
      <!-- Core theme JS--> */}
      <script src={scripts}></script>
    </div>
  );
}

export default App;
