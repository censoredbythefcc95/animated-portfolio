import React from 'react'
import Sidebar from '../sidebar/Sidebar';
import { motion } from "framer-motion";
import "./navbar.scss"

const Navbar = () => {
    return (
        <div className="navbar">
            {/* Sidebar */}
            <Sidebar />
            <div className="wrapper">
                <motion.span
                initial={{ opacity: 0, scale: 0.5}}
                animate={{opacity: 1, scale: 1 }}
                transition={{ duration: 0.5 }}
                >
                    <img src="/truesignature.png" alt="Your Signature" />
                </motion.span>
                <div className="social">
                    <motion.a href="#"
                    initial={{ opacity: 0, scale: 0.5}}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.5 }}
                    ><img src="/facebook.png" alt="" /></motion.a>
                    <motion.a href="#"
                    initial={{ opacity: 0, scale: 0.5}}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.5 }}
                    ><img src="/instagram.png" alt="" /></motion.a><motion.a href="#"
                    initial={{ opacity: 0, scale: 0.5}}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.5 }}
                    ><img src="/youtube.png" alt="" /></motion.a><motion.a href="#"
                    initial={{ opacity: 0, scale: 0.5}}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.5 }}
                    ><img src="/dribbble.png" alt="" /></motion.a>
                    </div>
                </div>
            </div>
    )
}
export default Navbar;