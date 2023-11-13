import WorkItem from "./WorkItem";

const data = [
  {
    year: 2023,
    title: "Full stack developer",
    duration: "1 year",
    details:
      "+ 1 year Experience as a software developer. In my previous experience I joined work teams under agile methodologies. I learned a lot about importance of relationships in work groups, that's why I always seek the goal of improving my skills, technical and human, as well as those of my colleagues.",
  },
  {
    year: 2019,
    title: "Ecommerce managment",
    duration: "4 years",
    details:
      "Leading a team of 5 people, I managed to establish effective methodologies and processes of work on the picking and dispatch line, increasing production capacity by 30%. Together with a team of two people I carried out the implementation of new products andsales opportunities during the different calendar events, analyzing the market and competitors.",
  },
];

const Work = () => {
  return (
    <div id="work" className="max-w-[1040px] m-auto md:pl-20 p-4 py-16">
      <h1 className="text-4xl font-bold text-center text-[#001b5e]">Work</h1>
      {data.map((item, index) => (
        <WorkItem
          key={index}
          year={item.year}
          title={item.title}
          duration={item.duration}
          details={item.details}
        />
      ))}
    </div>
  );
};

export default Work;
