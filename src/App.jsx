import { lazy, Suspense } from "react";
import LazyLoad from "react-lazyload";

const Hero = lazy(() => import("./components/hero/Hero"));
const Services = lazy(() => import("./components/services/Services"));
const Portfolio = lazy(() => import("./components/portfolio/Portfolio"));
const Contact = lazy(() => import("./components/contact/Contact"));

const App = () => {
  return (
    <div className="container">
      <Suspense fallback={"Loading!"}>
        <LazyLoad height={"100vh"} offset={-100}>
          <section id="home">
            <Hero />
          </section>
        </LazyLoad>
      </Suspense>
      <Suspense fallback={"Loading!"}>
        <LazyLoad height={"100vh"} offset={-100}>
          <section id="services">
            <Services />
          </section>{" "}
        </LazyLoad>
      </Suspense>
      <Suspense fallback={"Loading!"}>
        <LazyLoad height={"100vh"} offset={-100}>
          <section id="portfolio">
            <Portfolio />
          </section>{" "}
        </LazyLoad>
      </Suspense>
      <Suspense fallback={"Loading!"}>
        <LazyLoad height={"100vh"} offset={-100}>
          <section id="contact">
            <Contact />
          </section>{" "}
        </LazyLoad>
      </Suspense>
    </div>
  );
};

export default App;
