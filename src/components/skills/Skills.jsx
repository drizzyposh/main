import React from 'react'
import './Skills.scss'
import { useState } from 'react'
import { icons } from '../../Data'
import { experiences } from '../../Data'
import { finishes } from '../../Data' 
import { motion } from 'framer-motion'

const Skills = () => {
  const [active, setActive] = useState(1)

  return (
    <>
    <div  className='container' id="skills">
      <motion.div className="title" initial={{ opacity: 0}} whileInView={{ y: [-50, 0], opacity: 1}}>
        <span>What I Expert</span>
        <h1>Skills And Experience</h1>
      </motion.div>

      <motion.div className="select"  initial={{ opacity: 0}} whileInView={{ y: [-50, 0], opacity: 1}}>
        <button onClick={() => {setActive(1)}} className={active === 1 ? "active" : ""}>Skills</button>

        <button onClick={() => {setActive(2)}} className={active === 2 ? "active" : ""}>Experience</button>
      </motion.div>

      {/* skills */}
      <motion.div className="skills"  initial={{ opacity: 0}} whileInView={{ y: [-50, 0], opacity: 1}}>
        {active === 1 && icons.map((icon, index) => {
          return (
            <div className="icon" key={index}>
              {icon}
            </div>
          )
        })}
      </motion.div>

        {/* experience */}
      <motion.div className="experiences"  initial={{ opacity: 0}} whileInView={{ y: [-50, 0], opacity: 1}}>
        {active === 2 && experiences.map((experience) => {
          return (
            <div className="experience" key={experience.id}>
                <span>{experience.year}</span>
                <div className="position">
                  <h3>{experience.position}</h3>
                  <p>{experience.company}</p>
                </div>
            </div>
          )
        })}
      </motion.div>

      {/* finshes */}
      <motion.div className="finishes-container"  initial={{ opacity: 0}} whileInView={{ y: [-50, 0], opacity: 1}}>
        {finishes.map((finish) => {
          return (
            <div className="finishes" key={finish.id}>
              <div className="number">
                {finish.number}
              </div>
              <div className="item-name">
                {finish.itemName}
              </div>
            </div>
          )
        })}
      </motion.div>
    </div>
    </>
  )
}

export default Skills
