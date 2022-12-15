import React, { useState, useEffect } from 'react';
import "./Navbar.scss";
import { FaGithub, FaLinkedin, FaTwitter, FaInstagram } from 'react-icons/fa';
import { motion } from 'framer-motion';
import { HiMenuAlt4, HiX } from "react-icons/hi";
import { navLinks } from '../../src/Data';
const Navbar = () => {
    
    const [scroll, setScroll] = useState(false);
    const [toggle, setToggle] = useState(false)
    
    const menuVariants = {
        hidden: {
            scale: 0
        },
        visible: {
            scale: 50,
            transition: {
                type: "tween",
                duration: 0.5,
            }
        }
    }
    const navLinkVariants = {
        hidden: {
            display: "none",
            opacity: 0
        },
        visible: {
            opacity: 1,
            y: -30,
            transition: {
                delay: 0.7
            }
        }
    }
    useEffect(() => {
        window.addEventListener("scroll", () => {
            setScroll(window.scrollY > 20)
        })
    },[])
  return (
      <motion.div
          initial={{ y: -25 }}
          animate={{ y: -5 }}
          transition={{duration: 0.5}}
          className={scroll ? "header active" : "header"}>
          <div className="Nav_container">
              <div className="logo">
                    <h3>OF</h3>
              </div>
              <ul
                      className="nav_links"
                   >
                  {navLinks.map((navlink,index) => {
                      return <li key={index}><a href={`#${navlink}`}>{navlink}</a></li>
                  })}
              </ul>
              <div className="social_icons" >
                <a href='https://github.com/drizzyposh' target="_blank" > <FaGithub /> </a>,
                <a href='https://twitter.com/____drizzy' target="_blank"  > <FaTwitter /> </a>,
                <a href='https://www.linkedin.com/in/oluwafemi-fadayomi-72a274a5/' target="_blank" > <FaLinkedin /> </a>
                <a href='https://www.instagram.com/femzy.gram/?next=%2F' target="_blank" > <FaInstagram /> </a>
              </div>
              <div className="menu" >
                  <HiMenuAlt4 onClick={() => {setToggle(true)}}/>
              </div>
              <motion.div className="closeMenu"
                          variants={menuVariants}
                          initial="hidden" animate= {toggle ?"visible": "hidden"}
                      >
              </motion.div>
              
          <motion.div
                  variants={navLinkVariants}
                  animate={toggle ? "visible" : "hidden"}
                  className="menuX"
              >
                  <HiX onClick={() => setToggle(false)}/>
                  {navLinks.map((navlink,index) => {
                      return <li
                          key={index}><a
                         
                          href={`#${navlink}`} onClick={() => setToggle(false)}>{navlink}</a></li>
                  })}
              </motion.div>
          </div>
    </motion.div>
  )
}

export default Navbar