import scripts from "./static/scripts.js";
import Navigation from "./pages/Navigation/Navigation.jsx";
import Header from "./pages/Header/Header.jsx";
import About from "./pages/About/About.jsx";
import Services from "./pages/Services/Services.jsx";
import Callout from "./pages/Callout/Callout.jsx";
import Portfolio from "./pages/Portfolio/Portfolio.jsx";
import CallToAction from "./pages/CallToAction/CallToAction.jsx";
import Map from "./pages/Map/Map.jsx";
import Footer from "./pages/Footer/Footer.jsx";

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
        <i className="fas fa-angle-up"></i>
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
