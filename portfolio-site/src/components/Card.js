import React from "react";
import {VscGithubAlt} from 'react-icons/vsc';
import {FaInstagram,FaLinkedin,FaEnvelope} from 'react-icons/fa';
const Card = ()=>{
    return(
        <div className = 'w-full'>
             <div className = "flex flex-col justify-center max-w-ms mx-auto bg-white shadow-xl rounded-xl p-5 drop-shadow-sm">
                <div className="">
                    <img src = "/WhatsApp Image 2021-12-09 at 09.04.11.jpeg" className = "w-32 mx-auto shadow-xl rounded-full drop-shadow-sm"/>
                </div>
                <div className = "text-center mt-5">
                    <p className="text-xl sm: text-2xl text-gray-900"> Shripati Vijayaraghavan </p>
                </div>

                <div className = "text-center mt-5">
                    <p className="text-xl sm: text-base  text-gray-600 pt-2 pb-4 px-5 w-auto inline-block border-b-2"> React JS/Node JS Developer/PHP And Laravel Developer</p>

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
          </div>        
        </div>
    )
}

export default Card;