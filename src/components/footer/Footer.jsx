import React from 'react'
import './Footer.scss'
import { FaGithub, FaLinkedin, FaTwitter, FaInstagram} from 'react-icons/fa';
import { motion } from 'framer-motion';

const Footer = () => {
  return (
    <>
        <motion.div className="footer" initial={{ opacity: 0}} whileInView={{ opacity: 1}} transition={{ duration: 1.5}}>
          <div className="copyright">
            <p>Copyright&copy; 2022 All rights reseverd | Made By
              <span> Oluwafemi Fadayomi</span>
            </p>
          </div>
          <div className="followme">
            <h4>Follow Me</h4>
            {/* <div className="stick"></div> */}
            <div className="social-icons">
                <a href='https://github.com/drizzyposh' target="_blank" > <FaGithub /> </a>
                <a href='https://twitter.com/____drizzy' target="_blank"  > <FaTwitter /> </a>
                <a href='https://www.linkedin.com/in/oluwafemi-fadayomi-72a274a5/' target="_blank" > <FaLinkedin /> </a>
                <a href='https://www.instagram.com/femzy.gram/?next=%2F' target="_blank" > <FaInstagram /> </a>
            </div>
          </div>
        </motion.div>
    </>
  )
}

export default Footer
