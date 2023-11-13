import { TypeAnimation } from "react-type-animation";
import { FaTwitter, FaGithub, FaInstagram, FaLinkedinIn } from "react-icons/fa";

const Main = () => {
  return (
    <div id="main">
      <img
        className="w-full h-screen object-cover object-left scale-x-[-1]"
        src="https://images.unsplash.com/photo-1444677374926-21fdd7d58bd4?q=80&w=1631&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
        alt=""
      />
      <div className="w-full h-screen absolute top-0 lef-0 bg-white/50">
        <div className="max-w-[700px] m-auto h-full w-full flex flex-col justify-center items-center lg:items-start">
          <h1 className="sm:text-5xl text-4xl font-bold text-gray-800">
            Leonardo Micale | Software developer
          </h1>
          <h2 className="flex sm:text-3xl text-2xl pt-4 text-gray-900">
            Enthusiastic team player, experience working with agile
            methodologies
          </h2>
          <span className="flex sm:text-3xl text-2xl pt-4 text-gray-900">
            Tech stack
          </span>
          <h2 className="flex sm:text-3xl text-2xl pt-4 text-gray-900">
            <TypeAnimation
              sequence={[
                "BACK END DEVELOPMENT | Express * Node.js",
                1000, // wait 1s before replacing "Mice" with "Hamsters"
                "FRONT END DEVELOPMENT | React.js * Redux * JavaScript * Tailwind CSS * HTML * CSS",
                1000,
                "DATABASES | MongoDB * PostgreSQL * Firebase * Sequelize * SQL",
                1000,
              ]}
              wrapper="div"
              cursor={true}
              style={{ fontSize: "1em", paddingLeft: "5px" }}
              repeat={Infinity}
            />
          </h2>
          <div className="flex justify-between pt-6 max-w-[200px] w-full">
            <a
              href="https://github.com/LeonardoEMicale"
              target="blank"
              rel="noopener noreferrer"
            >
              <FaGithub className="cursor-pointer" size={20} />
            </a>
            <a
              href="https://www.linkedin.com/in/leonardo-em/"
              target="blank"
              rel="noopener noreferrer"
            >
              <FaLinkedinIn className="cursor-pointer" size={20} />
            </a>
            <FaTwitter className="cursor-pointer" size={20} />
            <FaInstagram className="cursor-pointer" size={20} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Main;
