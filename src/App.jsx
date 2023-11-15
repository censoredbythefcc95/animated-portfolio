import "./app.scss"
import Navbar from "./components/navbar/Navbar";
import Hero from "./components/hero/Hero";
import Parallel from "./components/parallel/Parallel";
import Services from "./components/services/Services";

const App = () => {
  return <div>
     <section id="Homepage">
      <Navbar/>
      <Hero />
     </section>
     <section id="Services"><Parallel type="services" /></section>
     <section><Services /></section>
     <section id="Portfolio"><Parallel type="portfolio" /></section>
     <section>Portfolio 1 </section>
     <section>Portfolio 2</section>
     <section>Portfolio 3 </section>
     <section id="Contact">Contact</section>

  </div>;
};

export default App;
