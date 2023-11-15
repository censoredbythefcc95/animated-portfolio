import React, { useRef } from "react";
import "./portfolio.scss";
import { motion, useScroll, useSpring, useTransform } from "framer-motion";

const items = [
    {
        id: 1,
        title: "SPEED LOVER",
        img: "https://images.pexels.com/photos/2462253/pexels-photo-2462253.jpeg?auto=compress&cs=tinysrgb&w=1600",
        desc: "Everything okay.",
    },
    {
        id: 2,
        title: "NIGHT OF FIRE",
        img: "https://images.pexels.com/photos/18024374/pexels-photo-18024374/free-photo-of-man-standing-in-water-with-torch.jpeg?auto=compress&cs=tinysrgb&w=1600",
        desc: "Welcome to the rocket show.",
    },
    {
        id: 3,
        title: "KILLING MY LOVE",
        img: "https://images.pexels.com/photos/19032382/pexels-photo-19032382/free-photo-of-close-up-of-man-and-woman-wearing-rings-and-holding-hands.jpeg?auto=compress&cs=tinysrgb&w=1600",
        desc: "I was thinking to become your wife.",
    },
    {
        id: 4,
        title: "RUNNING IN THE 90s",
        img: "https://images.pexels.com/photos/3944104/pexels-photo-3944104.jpeg?auto=compress&cs=tinysrgb&w=1600",
        desc: "It's a new way to set me free.",
    },
];

const Single = ({ item }) => {
    const ref = useRef();
  
    const { scrollYProgress } = useScroll({
      target: ref,
    });
  
    const y = useTransform(scrollYProgress, [0, 1], [-300, 300]);
  
    return (
      <section >
        <div className="container">
          <div className="wrapper">
            <div className="imageContainer" ref={ref}>
              <img src={item.img} alt="" />
            </div>
            <motion.div className="textContainer" style={{y}}>
              <h2>{item.title}</h2>
              <p>{item.desc}</p>
              <button>See Demo</button>
            </motion.div>
          </div>
        </div>
      </section>
    );
  };
  
  const Portfolio = () => {
    const ref = useRef();
  
    const { scrollYProgress } = useScroll({
      target: ref,
      offset: ["end end", "start start"],
    });
  
    const scaleX = useSpring(scrollYProgress, {
      stiffness: 100,
      damping: 30,
    });
  
    return (
      <div className="portfolio" ref={ref}>
        <div className="progress">
          <h1>Featured Projects</h1>
          <motion.div style={{ scaleX }} className="progressBar"></motion.div>
        </div>
        {items.map((item) => (
          <Single item={item} key={item.id} />
        ))}
      </div>
    );
  };
  
  export default Portfolio;