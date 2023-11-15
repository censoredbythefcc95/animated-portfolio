import "./app.scss"
import Navbar from "./components/navbar/Navbar";
import Hero from "./components/hero/Hero";
import Parallel from "./components/parallel/Parallel";
import Services from "./components/services/Services";
import Portfolio from "./components/portfolio/Portfolio";
import Contact from "./components/contact/Contact";

const App = () => {
  return <div>
     <section id="Homepage">
      <Navbar/>
      <Hero />
     </section>
     <section id="Services"><Parallel type="services" /></section>
     <section><Services /></section>
     <section id="Portfolio"><Parallel type="portfolio" /></section>
     <Portfolio />
     <section id="Contact"><Contact /></section>

  </div>;
};

export default App;
