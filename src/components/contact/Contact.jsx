import React from 'react'
import './Contact.scss'
import { contacts } from '../../Data'
import { FaGithub, FaLinkedin, FaTwitter, FaInstagram } from 'react-icons/fa';
import { motion } from 'framer-motion';

const Contact = () => {
  return (
    <>
    <div  className='container' id="contact">
      <motion.div className="title"  initial={{ opacity: 0}} whileInView={{ y: [-50, 0], opacity: 1}}>
        <span>get in touch</span>
        <h1>Contact Me</h1>
      </motion.div>
        <div className="contact-form">
          <motion.div className="contact-left-container" initial={{ x: 0, opacity: 0}} whileInView={{ x: [-250, 0], opacity: 1}} transition={{ duration: 1}}>
            <h3>Just say Hi!</h3>
            <p className='contact-text'>You can reach out to me via these platforms below to get your projects done.</p>
            {contacts.map((contact) => {
              return (
                <div className="contact-left" key={contact.id}>
                  <div className="icon">
                    {contact.icon}
                  </div>
                  <p>{contact.infoText}</p>
                </div>
              )
            })}
            <div className="social-icons">
                <a href='https://github.com/drizzyposh' target="_blank" > <FaGithub /> </a>
                <a href='https://twitter.com/____drizzy' target="_blank"  > <FaTwitter /> </a>
                <a href='https://www.linkedin.com/in/oluwafemi-fadayomi-72a274a5/' target="_blank" > <FaLinkedin /> </a>
                <a href='https://www.instagram.com/femzy.gram/?next=%2F' target="_blank" > <FaInstagram /> </a>
            </div>
          </motion.div>

          <motion.div className="contact-right" initial={{ x: 0, opacity: 0}} whileInView={{ x: [250, 0], opacity: 1}} transition={{ duration: 1}}>
            <h3>Get In Touch</h3>
            <div className="row">
              <input type="text" placeholder='First Name'/>
              <input type="text" placeholder='Last Name'/>
            </div>

            <div className="row">
              <input type="number" placeholder='Phone Number'/>
            </div>

            <div className="row">
              <input type="email" placeholder='Enter email'/>
            </div>

            <div className="row">
              <textarea placeholder='message'></textarea>
            </div>
            <motion.div className="btn" whileHover={{ scale: 1.1 }} transition={{ duration: 0.3 }}>
              <a href="#">Send</a>
            </motion.div>
          </motion.div>
        </div>
    </div>
    </>
  )
}

export default Contact
