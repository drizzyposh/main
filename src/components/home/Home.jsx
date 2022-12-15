import React from 'react'
import femzy from '../../../src/assets/femzy.jpeg'
import './Home.scss'
import {motion} from 'framer-motion'


const Home = () => {

  const moveVariants = {
    animation: {
      y: [0, -15],
      transition: {
        yoyo: Infinity,
        duration: 2,
        delay: 1
      }
    } 
  }


  return (
    <motion.div  
      className='container' id="home"
      initial={{y: -15, opacity: 0}}
      animate={{ y: 0, opacity: 1}}
      transition={{ duration: 2, delay: 0.5}}>

      <div className="profile">
        <img src={femzy} alt="portfolio img" />
      </div>
      <div className="profile-text">
        <h3 className="name">Hi, <span>Oluwafemi Fadayomi</span></h3>

        <span className="job">Frontend Engineer Based in Nigeria </span>
      <span className='text'>Skilled in creating <br />
            UI Interfaces, <br />
            delivering quality work <br />
            such as building <br />
            interactive, responsive <br />
            websites & web <br />
            applications. <br />
      </span>
            <motion.a variants={moveVariants} animate="animation" whileHover={{scale: 1.1}} transition={{ duration: 0.3 }} href="contact">connect with me</motion.a>
            <div className="web">Web Developer</div>
            <div className="graphics">Graphics Designer</div>
            <div className="freelance">Freelancer</div>
      </div>
    </motion.div>
  )
}

export default Home
