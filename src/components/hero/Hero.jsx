import "./hero.scss";
import { motion } from "framer-motion";

const textVariants = {
    initial: {
        x: -500,
        opacity: 0,
    },
    animate: {
        x: 0,
        opacity: 1,
        transition: {
            duration: 1,
            staggerChildren: 0.1,
        },
    },
};

const Hero = () => {
    return (
        <motion.div className="hero">
            <motion.div className="wrapper">
                <motion.div className="textContainer" variants={textVariants} initial="initial" animate="animate">
                    <motion.h2 variants={textVariants}>STEVEN ASTUDILLO</motion.h2>
                    <motion.h1 variants={textVariants}>Software developer and Technology Coordinator</motion.h1>
                    <motion.div variants={textVariants} className="buttons">
                        <motion.button variants={textVariants}>See Latest Projects</motion.button>
                        <motion.button variants={textVariants}>Let's chat</motion.button>
                    </motion.div>
                    <motion.img variants={textVariants} src="/scroll.png" alt="" />
                </motion.div>
            </motion.div>
            <div className="slidingTextContainer">
                Developer Operations Coordinator Writer
            </div>
            <div className="imageContainer">
                <img src="/steven.png" alt="" />
            </div>
        </motion.div>
    );
};
export default Hero;