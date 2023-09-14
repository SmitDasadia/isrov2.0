import {
  FaFacebook,
  FaTwitter,
  FaInstagram,
  FaExternalLinkAlt,
  FaLinkedin,
  FaYoutube,
} from "react-icons/fa";
const Footer: React.FC = () => {
  return (
    
    <footer className="bg-black text-white body-font">
      <div className="container px-5 py-8 mx-auto flex items-center sm:flex-row flex-col">
        <p className="text-lg font-semibold  ">&copy; {new Date().getFullYear()} Isro</p>

        <span className="inline-flex sm:ml-auto sm:mt-0 mt-4 justify-center sm:justify-start">
          <a
            href="https://www.facebook.com/ISRO"
            target="_blank"
            rel="noopener noreferrer"
            className="mr-4"
          >
            <FaFacebook
              size={24}
              className="text-white hover:text-blue-500 transition-colors duration-300"
            />
          </a>
          <a
            href="https://twitter.com/isro"
            target="_blank"
            rel="noopener noreferrer"
            className="mr-4"
          >
            <FaTwitter
              size={24}
              className="text-white hover:text-blue-500 transition-colors duration-300"
            />
          </a>
          <a
            href="https://instagram.com/isro.dos/"
            target="_blank"
            rel="noopener noreferrer"
            className="mr-4"
          >
            <FaInstagram
              size={24}
              className="text-white hover:text-blue-500 transition-colors duration-300"
            />
          </a>

          <a
            href="https://www.linkedin.com/company/officialisro/"
            target="_blank"
            rel="noopener noreferrer"
            className="mr-4"
          >
            <FaLinkedin
              size={24}
              className="text-white hover:text-blue-500 transition-colors duration-300"
              
            />
          </a>
          <a
            href="https://www.youtube.com/channel/UCw5hEVOTfz_AfzsNFWyNlNg"
            target="_blank"
            rel="noopener noreferrer"
            className="mr-4"
          >
            <FaYoutube
              size={24}
              className="text-white hover:text-blue-500 transition-colors duration-300"
            />
          </a>
        </span>
      </div>
    </footer>
  );
};

export default Footer;
