import React, { useEffect, useState } from 'react'
import './Portfolio.scss'
import { workImages } from '../../Data'
import { workNavs } from '../../Data'
import { FiGithub, FiEye} from 'react-icons/fi'
import { motion } from 'framer-motion'

const Portfolio = () => {
  const [tab, setTab] = useState({ name: "all"})
  const [works, setWorks] = useState([])
  const [active, setActive] = useState(0)

  useEffect(() => {
    if(tab.name === "all") {
      setWorks(workImages)
    } else {
      const netWork = workImages.filter((workImage) => {
        return workImage.category.toLowerCase() === tab.name
      })
      setWorks(netWork)
    }
  }, [tab])

  const activeTab = (e, index) => {
    setTab({ name: e.target.textContent.toLowerCase() })
    setActive(index)
  }

  return (
    <>
    <div  className='container' id="portfolio">
      <motion.div className="title"  initial={{ opacity: 0}} whileInView={{ y: [-50, 0], opacity: 1}}>
        <span>My Works</span>
        <h1>Projects</h1>
      </motion.div>

      <motion.div className="buttons"  initial={{ opacity: 0}} whileInView={{ y: [-50, 0], opacity: 1}}>
        {workNavs.map((workNav, index) => {
          return (
            <button key={index} onClick={(e) => activeTab(e, index)} className={`${active === index ? "active" : ""}`}>{workNav}</button>
          )
        })}
      </motion.div>

      <motion.div className="workimages"  initial={{ x: 0, opacity: 0}} whileInView={{ x: [-250, 0], opacity: 1}} transition={{ duration: 1}}>
        {works.map((work) => {
          return (
            <div className="workimage" key={work.id}>
              <img src={work.img} alt="work Images" />;
              <motion.div  
                className="hoverlayer" initial={{ opacity: 0}}
                whileHover={{ opacity: [0, 1] }}
                transition={{ duration: 0.3, ease: "easeInOut"}}>

                <motion.a href="" target="_blank" whileInView={{ scale: [0, 1] }}
                whileHover={{ scale: [1,1.1] }}
                transition={{ duration: 0.3 }}>
                  <FiGithub />
                </motion.a>


                {/* eye */}
                <motion.a href="" whileInView={{ scale: [0, 1] }}
                whileHover={{ scale: [1,1.1] }}
                transition={{ duration: 0.3 }}>
                  <FiEye />
                </motion.a>

              </motion.div>
              ;
            </div>
          )
        })}
      </motion.div>

      <motion.div className="talk" initial={{ x: 0, opacity: 0}} whileInView={{ x: [250, 0], opacity: 1}} transition={{ duration: 1}}>
        <div className="talk-left">
          <h3>so let's talk about <br /> <span> your next projects</span></h3>
        </div>
        <div className="talk-right">
          <a href="#contact">Contact Me</a>
        </div>
      </motion.div>
    </div>
    </>
  )
}

export default Portfolio
