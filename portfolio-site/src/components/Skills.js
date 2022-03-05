import React from "react";
import {FaReact,FaLaravel,FaBootstrap,FaPhp,FaPython,FaNodeJs} from 'react-icons/fa';
import{SiTailwindcss,SiDjango,SiFlask,SiExpress} from 'react-icons/si';
const Skills = () =>{
    return(
            <div className="max-w-4xl mx-auto justify-center py-12" id = "tech">
                <p className = "text-2xl text-black md:text-4xl text-center font-bold">
                    Tech I've worked with.    
                </p>
                <div className = "flex flex-wrap justify-center pt-2">

                    <div className = "flex flex-col w-40 p-10 m-6 overflow-hidden bg-white shadow-2xl rounded-xl sm:w-52">
                        <FaReact className = "text-cyan-800 mx-auto text-2xl sm:text-4xl"></FaReact>
                        <p className = "mt-6 text-xl sm:text-2xl font-semibold text-center">React JS</p>
                    </div>

                    <div className = "flex flex-col w-40 p-10 m-6 overflow-hidden bg-white shadow-2xl rounded-xl sm:w-52">
                        <FaLaravel className = "text-red-500 mx-auto text-2xl sm:text-4xl"></FaLaravel>
                        <p className = "mt-6 text-xl sm:text-2xl font-semibold text-center">Laravel</p>
                    </div>


                    <div className = "flex flex-col w-40 p-10 m-6 overflow-hidden bg-white shadow-2xl rounded-xl sm:w-52">
                        <FaBootstrap className = "text-purple-500 mx-auto text-2xl sm:text-4xl"></FaBootstrap>
                        <p className = "mt-6 text-xl sm:text-2xl font-semibold text-center">Bootstrap</p>
                    </div>

                    <div className = "flex flex-col w-40 p-10 m-6 overflow-hidden bg-white shadow-2xl rounded-xl sm:w-52">
                        <SiTailwindcss className = "text-blue-500 mx-auto text-2xl sm:text-4xl"></SiTailwindcss>
                        <p className = "mt-6 text-xl sm:text-2xl font-semibold text-center">Tailwind CSS</p>
                    </div>

                    <div className = "flex flex-col w-40 p-10 m-6 overflow-hidden bg-white shadow-2xl rounded-xl sm:w-52">
                        <FaPhp className = "text-purple-600 mx-auto text-2xl sm:text-4xl"></FaPhp>
                        <p className = "mt-6 text-xl sm:text-2xl font-semibold text-center">PHP</p>
                    </div>

                    <div className = "flex flex-col w-40 p-10 m-6 overflow-hidden bg-white shadow-2xl rounded-xl sm:w-52">
                        <FaPython className = "mx-auto text-2xl sm:text-4xl"></FaPython>
                        <p className = "mt-6 text-xl sm:text-2xl font-semibold text-center">Python</p>
                    </div>

                    <div className = "flex flex-col w-40 p-10 m-6 overflow-hidden bg-white shadow-2xl rounded-xl sm:w-52">
                        <FaNodeJs className = "text-green-700 mx-auto text-2xl sm:text-4xl"></FaNodeJs>
                        <p className = "mt-6 text-xl sm:text-2xl font-semibold text-center">Node JS</p>
                    </div>

                    <div className = "flex flex-col w-40 p-10 m-6 overflow-hidden bg-white shadow-2xl rounded-xl sm:w-52">
                        <SiExpress className = "mx-auto text-2xl sm:text-4xl"></SiExpress>
                        <p className = "mt-6 text-xl sm:text-2xl font-semibold text-center">Express JS</p>
                    </div>

                    <div className = "flex flex-col w-40 p-10 m-6 overflow-hidden bg-white shadow-2xl rounded-xl sm:w-52">
                        <SiDjango className = "mx-auto text-2xl sm:text-4xl"></SiDjango>
                        <p className = "mt-6 text-xl sm:text-2xl font-semibold text-center">Django</p>
                    </div>

                </div>
            </div>


               
               
               
    )
}

export default Skills;