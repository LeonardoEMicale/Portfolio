const ProjectItem = ({ img, title }) => {
  let projectDescription;
  let projectGithub;

  if (title === "HealthPlus") {
    projectDescription =
      "HealthPlus is a self-management project that connects users with doctors in a transparent and efficient way.";
  } else if (title === "Rick and Morty") {
    projectDescription =
      "Based on Rick and Morty characters where you can search and save your favorites!";
  } else if (title === "Tnt-Market") {
    projectDescription = "See live main markets activity";
  }

  if (title === "HealthPlus") {
    projectGithub = "https://github.com/LeonardoEMicale/PF-HealthPlus";
  } else if (title === "Rick and Morty") {
    projectGithub = "https://github.com/LeonardoEMicale/Rick-and-Morty-web";
  } else if (title === "Tnt-Market") {
    projectGithub = "In progress";
  }

  return (
    <div className="relative flex items-center justify-center h-auto w-full shadow-xl shadow-gray-400 rounded-xl group hover:bg-gradient-to-r from-gray-200 to-[#001b5e]">
      <img src={img} className="rounded-xl group-hover:opacity-10" />
      <div className="hidden group-hover:block absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%]">
        <h3 className="text-2xl font-bold text-white tracking-wider text-center">
          {title}
        </h3>
        <p className="pb-4 pt-2 text-white text-center">{projectDescription}</p>
        <a href="">
          <p className="text-center p-3 rounded-lg bg-white text-gray-700 font-bold cursor-pointer text-lg">
            <a
              target="blank"
              rel="noopener noreferrer"
              style={{ textDecoration: "none" }}
              href={projectGithub}
            >
              More info
            </a>
          </p>
        </a>
      </div>
    </div>
  );
};

export default ProjectItem;
