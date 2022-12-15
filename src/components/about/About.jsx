import React from 'react'
import './About.scss'
import femzy2 from '../../assets/femzy2.jpeg'
import { bios } from '../../Data'
import { motion } from 'framer-motion'
import jsPDF from 'jspdf'

const About = () => {

  

  return (
    <>
    <div className='container' id="about">
      <motion.div className="title" initial={{ opacity: 0}} whileInView={{ y: [-50, 0], opacity: 1}}>
        <span>Who Am I?</span>
        <h1>About Me</h1>
      </motion.div>
      <div className="about-container">
        <motion.div className="about-left" initial={{ x: 0, opacity: 0}} whileInView={{ x: [-250, 0], opacity: 1}} transition={{ duration: 1}}>
          <img src={femzy2} alt="about-img" />
        </motion.div>

        <motion.div className="about-right" initial={{ x: 0, opacity: 0}} whileInView={{ x: [250, 0], opacity: 1}} transition={{ duration: 1}}>
          <p>
          I graduated from Landmark Univeristy with a degree in Chemical Engineering. My interests is in Frontend development, and i love to create, deliver quality work, beautiful and performant products with delightful user experiences.
          </p>
          {bios.map((bio) => {
            return (
              <div className="bio" key={bio.id}>
                <span className="biokey">
                  {bio.icon}
                  {bio.key}
                </span>
                <span className="bioValue">
                  {bio.value}
                </span>
              </div>
            )
          })}
          <motion.a whileHover={{scale: 1.1}} transition={{ duration: 0.3 }} href="#" download="">Download Resume</motion.a>
        </motion.div>
      </div>
    </div>
    </>

  )
}

export default About
