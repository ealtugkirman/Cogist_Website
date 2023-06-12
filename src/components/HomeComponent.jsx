import Logo from "../assets/logo.png";
import Banner from "../assets/header.png";
import { FaTwitter } from "react-icons/fa";

const HomeComponent = () => {
  return (
    <div className="flex md:flex-col space-y-4 h-screen font-first  items-center justify-center px-4  md:px-28 flex-col bg-[radial-gradient(ellipse_at_bottom,_var(--tw-gradient-stops))] from-gray-800 to-custom ">
      <div className="flex flex-col md:flex-row items-center justify-center">
        <div className="w-1/3 animate-spin slower md:w-2/12 ">
          <img src={Logo} alt="Cogist.com Logo" />
        </div>
        <div className="w-1/2 md:w-1/4">
          <img src={Banner} alt="Cogist.com Logo" />
        </div>
      </div>

      <div className="flex md:flex-row md:space-y-0  flex-col justify-center items-center">
        <article className=" md:w-2/3 md:leading-7 text-white text-left  text-sm font-light">
          <p>
            The Cognizer is a publishing platform initiated by CogIST, a
            cognitive science community from Turkey. <br />
            On this platform, articles and essays on different topics from
            different fields of cognitive science are published in a way that
            would bridge the gap between public audience and experts. To
            accomplish this, we will ensure that the publications are
            argumentatively sophisticated, although not technically complex,
            thus preventing the loss of information and insight while
            popularizing academic content. In this way, not only we encourage
            science communication in the field of cognitive science but also
            reach a diverse audience from all around the world, especially from
            the underrepresented regions.
          </p>
          <br />
          <p className="font-bold">
            If you are a cognitive science enthusiast, or an expert in the field
            we would be delighted to read your article. For that, please send
            your 1500-word or longer article to{" "}
            <a href="mailto:info.thecognizer@gmail.com">
              {" "}
              info.thecognizer@gmail.com{" "}
            </a>
          </p>
        </article>
      </div>
      <h1 className="font-bold text-2xl py-2 text-white">Coming Soon..</h1>
      <div className=" flex items-center justify-center">
        <a href="https://twitter.com/the_cognizer">
          <FaTwitter className="text-3xl text-blue-500 hover:text-blue-600 cursor-pointer" />
        </a>
      </div>
    </div>
  );
};

export default HomeComponent;
