import React, { useRef } from 'react';
import "./services.scss";
import { motion, useInView } from "framer-motion";

const variants = {
    initial: {
        x: -500,
        y: 100,
        opacity:0,
    },
    animate:{
        x: 0,
        opacity: 1,
        y: 0,
        transition:{
            duration: 1,
            staggerChildren: 0.1,
        },
    },
};

const Services = () => {

    const ref = useRef()
    const isInView = useInView( ref, {margin: "-100px"} );

    return (
        <motion.div className="services" variants={variants} initial="initial" ref={ref} animate={isInView && "animate" }>
            <motion.div className="textContainer" variants={variants} initial="initial" animate="animate">
                <p>Services for the tech-bros,
                <br /> provided by a tech-bro.
                </p>
                <hr />
            </motion.div>
            <motion.div className="titleContainer" variants={variants} initial="initial" animate="animate">
                <div className="title">
                    <img src="/people.webp" alt="" />
                    <h1><motion.b whileHover={{ color: "orange" }}>Services provided</motion.b></h1>
                </div>
                <div className="title">
                    <h1>For Your<motion.b whileHover={{ color: "orange" }}> Needs</motion.b>
                    </h1>
                    <button>WHAT WE DO</button>
                </div>
            </motion.div>
            <motion.div className="listContainer" variants={variants} initial="initial" animate="animate">
            <motion.div className="box" whileHover={{ background:"lightgray", color: "black" }}>
                <h2>UX Development</h2>
                <p>We are fully trained in aesthetic front-end design using React.js and Typescript.js.</p>
                <button>Coming Soon</button>
            </motion.div>
            <motion.div className="box" whileHover={{ background:"lightgray", color: "black" }}>
                <h2>Technology Management</h2>
                <p>
                In the domain of technology coordination and management, we serve as a seasoned orchestrator, 
                meticulously overseeing the alignment and functionality of your digital infrastructure.</p>
                <button>Coming Soon</button>
            </motion.div>
            <motion.div className="box" whileHover={{ background:"lightgray", color: "black" }}>
                <h2>Consulting</h2>
                <p>Make your business run smoother wih the help of automation and improvised workflows for your staff.</p>
                <button>Coming Soon</button>
            </motion.div>
            <motion.div className="box" whileHover={{ background:"lightgray", color: "black" }}>
                <h2>CRM Management</h2>
                <p>Managing a customer service help desk can be tough. We've managed platforms for multi-million dollar start-up companies, and can help make your experience less stressful.</p>
                <button>Coming Soon</button>
            </motion.div>
            </motion.div>
        </motion.div>
    );
};

export default Services;
