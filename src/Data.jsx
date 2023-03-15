import { BiWebcam } from "react-icons/bi";
import { BiFingerprint } from "react-icons/bi";
import { BsBarChartLine } from "react-icons/bs";
import { MdOutlineScience } from "react-icons/md";


import logo1 from "./assets/logo1.png";
import logo2 from "./assets/logo2.png";
import logo3 from "./assets/logo3.png";
import logo4 from "./assets/logo4.png";
import logo5 from "./assets/logo5.png";
import logo6 from "./assets/logo6.png";

export const navLinks = [
  {
    id: 1,
    href: "home",
    link: "Home",
  },
  {
    id: 2,
    href: "about",
    link: "About",
  },
  {
    id: 3,
    href: "services",
    link: "Services",
  },
];

export const categories = [
  {
    id: 1,
    icon: <BiWebcam />,
    category: "Security Camera",
  },
  {
    id: 2,
    icon: <BiFingerprint />,
    category: "Fingerprint Scanner",
  },
  {
    id: 3,
    icon: <BsBarChartLine />,
    category: "Sensors",
  },
  {
    id: 4,
    icon: <MdOutlineScience />,
    category: "Cameras",
  },
];



export const logos = [logo1, logo2, logo3, logo4, logo5, logo6];
