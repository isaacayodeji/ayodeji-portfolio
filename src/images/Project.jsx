import image from "../images/projectimg.svg";
import Link from "../images/link.svg";
import github from "../images/githulink.svg";
import AnimationBoxes from "../features/AnimationBox";
import CartyMedicine from "../images/cartsyMedicine.png"
import BankApp from "../images/abcBank.png"
import ComfortStore from "../images/comfortStore.png"

const Project = () => {
  const cards = [
    {
      id: 1,
      title: "Abc Bank App",
      description:
        " This is sample project description random things are here in description This is sample project lorem ipsum generator for dummy content",
      stacks: "Html, tailwind, react, javascript",
      image: BankApp,
      liveLink: "#live",
      github: "#github",
    },
    {
      id: 2,
      title: "Backroad Travels",
      description:
        " This is sample project description random things are here in description This is sample project lorem ipsum generator for dummy content",
      stacks: "Html, tailwind, react, javascript",
      image: image,
      liveLink: "#live",
      github: "#github",
    },
    {
      id: 3,
      title: "Conform store",
      description:
        " This is sample project description random things are here in description This is sample project lorem ipsum generator for dummy content",
      stacks: "Redux, tailwind, react, javascript",
      image: ComfortStore,
      liveLink: "#live",
      github: "#github",
    },
    {
      id: 4,
      title: "Bank App",
      description:
        " This is sample project description random things are here in description This is sample project lorem ipsum generator for dummy content",
      stacks: "Html, tailwind, react, javascript",
      image: image,
      liveLink: "#live",
      github: "#github",
    },
    {
      id: 5,
      title: "Xpress payment website",
      description:
        " This is sample project description random things are here in description This is sample project lorem ipsum generator for dummy content",
      stacks: "Nextjs, tailwind, react, javascript",
      image: image,
      liveLink: "#live",
      github: "#github",
    },
    {
      id: 6,
      title: "Cartsy Medicine store",
      description:
        " This is sample project description random things are here in description This is sample project lorem ipsum generator for dummy content",
      stacks: "Redux, tailwind, react, javascript",
      image: CartyMedicine,
      liveLink: "#live",
      github: "#github",
    },
  ];
  return (
    <>
      <AnimationBoxes/>
      <section id="project" className="lg:p-20 max-w-[1000px] mx-auto">
        <div className="lg:px-10 flex flex-col space-y-10">
          {/* Heading */}
          <div
            data-aos="zoom-in"
            data-aos-duration="3000"
            className="text-center space-y-2"
          >
            <h2 className="font-bold text-2xl text-sky-500">Projects</h2>
            <p className="text-[#666666]">Applications built so far</p>
          </div>
          {/* CARD CONTAINER */}
          <div className="">
            {/* CARDS */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 justify-between  gap-6">
              {cards.map((card) => {
                // SINGLE CARD
                return (
                  <div
                    data-aos="zoom-in"
                    data-aos-duration="3000"
                    key={card.id}
                    className="border rounded-xl"
                  >
                    <img className="w-full lg:h-[45%]" src={card.image} alt={card.title} />
                    <article className="px-2 py-2 space-y-2">
                      <h2 className="text-xl font-bold">{card.title}</h2>
                      <p className="text-[#666666] lg:text-[0.8rem] ">
                        {card.description}
                      </p>
                      <div className="py-2 space-y-2">
                        <h4 className="lg:text-[0.7rem]">
                          <b>Tech stack: </b> {card.stacks}
                        </h4>
                        <div className="flex gap-12 ">
                          <a
                            className="underline flex items-center gap-1 lg:text-[0.8rem]"
                            href={card.liveLink}
                            target="_blank"
                            rel="noopener noreferrer"
                          >
                            <img className="h-3" src={Link} alt="Live link" />
                            live preview
                          </a>
                          <a
                            className="underline flex items-center gap-1 lg:text-[0.8rem]"
                            href={card.github}
                            target="_blank"
                            rel="noopener noreferrer"
                          >
                            <img
                              className="h-3"
                              src={github}
                              alt="GitHub link"
                            />
                            view code
                          </a>
                        </div>
                      </div>
                    </article>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </section>
    </>
  );
};
export default Project;
