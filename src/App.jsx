import "./app.scss"
import Navbar from "./components/navbar/Navbar";
import Hero from "./components/hero/Hero";

const App = () => {
  return <div>
     <section id="Homepage">
      <Navbar/>
      <Hero />
     </section>
     <section id="Services">Parallel</section>
     <section>Services</section>
     <section id="Portfolio">Paralel</section>
     <section>Portfolio 1 </section>
     <section>Portfolio 2</section>
     <section>Portfolio 3 </section>
     <section id="Contact">Contact</section>

  </div>;
};

export default App;
