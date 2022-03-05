import React from "react";
import {VscGithubAlt} from 'react-icons/vsc';
import {FaInstagram,FaLinkedin,FaEnvelope} from 'react-icons/fa';
const Footer = ()=>{
    return (
        <div className = "py-5 border-t-3/2">
            <div className="flex justify-center mt-4">
            <div className="flex align-center justify-center mt-4">
                <a href="https://github.com/Shripati-Ops" className = "text-xl m-1 p-1 sm:m-2 text-gray-800 hover:bg-gray-800 rounded-full hover:text-white transition-colors duration-300">
                    <VscGithubAlt/>   
                    <span class = "sr-only"> Github</span> 
                </a>

                <a href="https://instagram.com/shripati_acharya" className = "text-xl m-1 p-1 sm:m-2 text-pink-400 hover:bg-pink-400 rounded-full hover:text-white transition-colors duration-300">
                    <FaInstagram/>   
                    <span class = "sr-only"> Instagram</span> 
                </a>

                <a href="https://www.linkedin.com/in/shripati-a-015319132/" className = "text-xl m-1 p-1 sm:m-2 text-blue-500 hover:bg-blue-500 rounded-full hover:text-white transition-colors duration-300">
                    <FaLinkedin/>   
                    <span class = "sr-only"> Linkedin</span> 
                </a>

                <a href="mailto:shripati.codes@gmail.com" className = "text-xl m-1 p-1 sm:m-2 text-teal-500 hover:bg-teal-500 rounded-full hover:text-white transition-colors duration-300">
                    <FaEnvelope/>   
                    <span class = "sr-only"> Linkedin</span> 
                </a>
                
            </div>
                
            </div>
            <div className="flex align-center justify-center mt-4">
                <p className="text-black mb-4">
                    Thanks for visiting by Amigo!<span className="mr-2" role="link"> 🙏 </span>
                </p> 
            </div>
        </div>

    )
}

export default Footer;