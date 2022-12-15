import { FaHtml5, FaCss3, FaReact, FaSass, FaBootstrap, FaPhoneAlt, FaUser, FaMapMarkerAlt, FaPaperPlane,  FaInstagram, FaLinkedin, FaGithub, FaTwitter, FaWhatsapp} from "react-icons/fa";
import { DiJavascript } from "react-icons/di";
import { DiPhotoshop } from "react-icons/di";
import { DiIllustrator } from "react-icons/di";
// import { SiTypescript } from "react-icons/si";
import femzy from "./assets/femzy.jpeg"
import femzy2 from './assets/femzy2.jpeg'
import work1 from "./assets/work5.png";
import work2 from "./assets/work3.png";
import work3 from "./assets/work-6.webp";
import work4 from "./assets/work-5.webp";
import work5 from "./assets/work-3.webp";
import work6 from "./assets/work-3.webp";

export const navLinks = ["home", "about", "skills", "portfolio", "contact"]

export const socialIcons = [
  <FaTwitter />,
  <FaInstagram />,
  <FaLinkedin />,
  <FaGithub />
]

export const bios = [
  {
    id: 1,
    icon: <FaUser />,
    key: "Name",
    value: "Oluwafemi Fadayomi"
  },
  {
    id: 2,
    icon: <FaPhoneAlt />,
    key: "Phone",
    value: "+2348119292443"
  },
  {
    id: 3,
    icon: <FaPaperPlane />,
    key: "Email",
    value: "femzyfadayomi@gmail.com"
  }
]

export const icons = [<FaHtml5 />, <FaCss3 />, <DiJavascript />,   <FaBootstrap />, <FaReact />,  <FaSass />, <DiPhotoshop />, <DiIllustrator />]

export const experiences = [
  {
    id: 1,
    year: "2022",
    position: "Junior Frontend Developer",
    company: "Lorem ipsum"
  },
  {
    di: 2,
    year: "2022",
    position: "Junior Frontend Developer",
    company: "Lorem ipsum"
  },
  {
    id: 3,
    year: "2022",
    position: "Intern Frontend Dveloper",
    company: "Lorem ipsum"
  }
]

export const finishes = [
  {
    id: 1,
    number: '1+',
    itemName: "Years Of Experience"
  },
  {
    id: 2,
    number: "1",
    itemName: "Satisfied Customers"
  },
  {
    id: 3,
    number: "15+",
    itemName: "Projects Completed"
  },
  {
    id: 4,
    number: "5+",
    itemName: "Clients Served"
  }
]
export const workImages = [
  {
    id: 1,
    img: work1,
    name: "project 1",
    category: "web"
  },
  {
    id: 2,
    img: work2,
    name: "project 2",
    category: "web"
  },
  {
    id: 3,
    img: work3,
    name: "project 3",
    category: "web"
  },
  {
    id: 4,
    img: work4,
    name: "project 4",
    category: "app"
  },
  {
    id: 5,
    img: work5,
    name: "project 5",
    category: 'app'
  },
  {
    id: 6,
    img: work6,
    name: "project 6",
    category: "web"
  }
]


export const workNavs = [
  "All", "Web", "App"
]

export const contacts = [
  {
    id: 1,
    icon: <FaMapMarkerAlt />,
    infoText: "Grace Court Estate, Lagos, Nigeria"
  },
  {
    id: 2,
    icon: <FaPaperPlane />,
    infoText: "femzyfadayomi@gmail.com"
  },
  {
    id: 3,
    icon: <FaWhatsapp />,
    infoText: "+2348119292443"
  }
]
