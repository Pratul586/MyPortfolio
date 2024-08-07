import logo  from "../assets/PratulSinghProfile.png"
import { FaLinkedin } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";

const Navbar = () => {
 
    const refreshPage = () => {
      window.location.reload();
    }
  
  return (
    <nav className=" mb-20 flex items-center justify-between py-6">
      <div className="flex flex-shrink-0 items-center">
       <img className="mx-2 w-12 transition-transform duration-300 ease-in-out transform hover:scale-125 hover:filter hover:brightness-150 hover:drop-shadow-[0_0_10px_rgba(255,255,255,1)]" src={logo} alt="logo" onClick={refreshPage} />
      </div>
      <div className="m-8 flex items-center justify-center gap-4 text-2xl">
        <a href="https://www.linkedin.com/in/pratul-singh-0795a5222/" target="_blank" rel="noopener noreferrer">
        <FaLinkedin  className="hover:text-blue-700 transition-colors duration-300"/></a>
        <a href="https://github.com/Pratul586" target="_blank" rel="noopener noreferrer">
        <FaGithub className="hover:text-gray-700 transition-colors duration-300" /></a> 
        <a href="https://www.instagram.com/pratul_586" target="_blank" rel="noopener noreferrer">
        <FaInstagram className="hover:text-pink-500 transition-colors duration-300" /></a>
      </div>
    </nav>
  )
}

export default Navbar