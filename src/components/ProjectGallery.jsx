// import { ProjectCard } from "./projectCard"
import CartyMedicine from "../images/project-icon/cartsyMedicine.png";
import BankApp from "../images/project-icon/abcBank.png";
import ComfortStore from "../images/project-icon/comfortStore.png";
import { ProjectCard } from "./ProjectCard";
import Zeeticket from "../images/zeeticket.png";
import Portfolio from "../images/portfolio-image.png";
import Mts from "../images/mts-website.png";
import XpressWebsite from "../images/xpress-website.png";

// import image from "../images/project-icon/profileImg.jpeg";

export function ProjectGallery() {
  const projects = [
    {
      title: "Conform store",
      description:
        "An e-commerce platform offering a smooth and intuitive shopping experience. Features include dynamic product listings, shopping cart functionality, and responsive design tailored for all device sizes.",
      imageSrc: ComfortStore,
      technologies: ["React", "Tailwind CSS", "Mongo DB", "Daisy Ui"],
      demoUrl: "https://confort-storee.vercel.app/",
      repoUrl: "#",
    },
    {
      title: "XpressPayment",
      description:
        "Xpress Payment Solutions Limited, incorporated in Nigeria in 2016, specialises in creating and delivering cutting-edge platforms for electronic payments, collections, bills payment and funds disbursement. Operating under CBN Switching and Processing Licence Category, we serve as a Transaction Switching, Payment Solution Service Provider (PSSP), Payment Terminal Service Provider (PTSP), Third Party Processing (TPP) and non-bank acquiring Agent, continually disrupting markets to simplify and enable smarter living for all Africans.",
      imageSrc: XpressWebsite,
      technologies: ["Next.js", "Tailwind CSS", "C#", "CMS"],
      demoUrl: "https://xpresspayments.com",
      repoUrl: "#",
    },
    {
      title: "Cartsy Medicine Store",
      description:
        "A pharmacy-focused online store built to showcase and sell medical products. Includes product filtering, cart management, and a user-friendly interface for easy browsing and purchasing.",
      imageSrc: CartyMedicine,
      technologies: ["React", "TypeScript", "Tailwind CSS"],
      demoUrl: "#",
      repoUrl: "#",
    },
    {
      title: "Abc Bank App",
      description:
        "A modern banking web application designed to simulate core financial operations such as account management, fund transfers, and transaction history. Built with a clean UI and responsive layout for seamless user experience.",
      imageSrc: BankApp,
      technologies: ["React", "Tailwind CSS", "c#", "Sql"],
      demoUrl: "https://abc-bank-orpin.vercel.app/",
      repoUrl: "#",
    },
    {
      title: "Zeeticket",
      description:
        "An event ticketing platform designed to streamline the process of discovering, booking, and managing tickets for various events. It features an intuitive UI, real-time availability, and a responsive layout to ensure a smooth user experience across devices.",
      imageSrc: Zeeticket,
      technologies: ["React", "Tailwind CSS", "Node", "Mongo DB"],
      demoUrl: "https://zeetickets.vercel.app/",
      repoUrl: "#",
    },
    {
      title: "Portfolio",
      description:
        "A sleek and responsive personal portfolio website showcasing my skills, projects, and professional background. Built with a focus on clean design and smooth navigation to provide an engaging experience for potential clients and employers.",
      imageSrc: Portfolio,
      technologies: ["React", "Tailwind CSS"],
      demoUrl: "https://ayodeji-olu-ewulo.vercel.app/",
      repoUrl: "#",
    },
    {
      title: "XpressMts",
      description:
        "Xpressmonie is a cutting-edge digital banking app that aims to transform the way individuals manage their finances and conduct transactions. With its user-friendly interface and robust features, Xpressmonie provides a secure and seamless banking experience, empowering users to take control of their financial lives.",
      imageSrc: Mts,
      technologies: ["Next.js", "Tailwind CSS"],
      demoUrl: "https://xpressmts.com/products/digital-banking/",
      repoUrl: "#",
    },
  ];

  return (
    <div className=" min-h-screen py-12 px-4">
      <div className=" max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {projects.map((project) => (
          <ProjectCard
            key={project.title}
            title={project.title}
            description={project.description}
            imageSrc={project.imageSrc}
            technologies={project.technologies}
            demoUrl={project.demoUrl}
            repoUrl={project.repoUrl}
          />
        ))}
      </div>
    </div>
  );
}
