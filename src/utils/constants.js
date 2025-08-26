import xpress from "../images/company/xpress.svg";
import mobile from "../images/mobile.png";
import creator from "../images/creator.png";
import web from "../images/web.png";
import backend from "../images/backend.png";
import udemy from "../images/udemy.png";
import udemyCert from "../images/react-cert.jpg";

export const experiences = [
  {
    title: "Frontend Engineer",
    company_name: "Xpress Payment LTD",
    icon: xpress,
    iconBg: "#383E56",
    date: "April 2022 - Till date",
    points: [
      "Development of complex user interfaces for various web applications, mentoring junior developers, and collaborating with designers and back-end engineers to ensure seamless front-end and back-end systems integration.",
      "Responsible for implementing and maintaining high-quality code standards, following agile development methodologies, and conducting code reviews to ensure the best possible application performance, scalability, and maintainability.",
      "Developed a large-scale payment platform that increased online transactions by 25%.",
      "Improving the user experience, optimizing application performance, and ensuring that the applications are accessible and responsive across all devices.",
    ],
  },
];

export const education = [
  {
    course: "BSC, Computer science",
    school: "Les cours Sonou University",
    location: "Republic of Benin, Cotonou",
    type: "Full time",
    date: "Nov 2020",
  },
];

export const navLinks = [
  {
    id: "home",
    title: "Home",
  },
  {
    id: "about",
    title: "About",
  },
  {
    id: "my-tech-stack",
    title: "Tech-stack",
  },
  {
    id: "work",
    title: "Work",
  },
  {
    id: "contact",
    title: "Contact",
  },
];

export const services = [
  {
    title: "Web Developer",
    icon: web,
  },
  {
    title: "ReactJS Developer",
    icon: mobile,
  },
  {
    title: "NextJS Developer",
    icon: backend,
  },
  {
    title: "User Interface Design",
    icon: creator,
  },
];

export const certification = [
  {
    name: "Advance React for Enterprise: React for Senior Engineers",
    image: udemyCert,
    issuingOrganization: "Udemy",
    url: "https://www.udemy.com/certificate/UC-2752a1a5-e733-47df-8258-a9a96f1cb87c/",
    date: "May 2024",
    logo: udemy,
  },
];
