import React from "react";
import ScrollIntoView from "react-scroll-into-view";
import {FaChevronDown} from 'react-icons/fa';

const About = ()=> {
    return(<div className = "max-w-4xl mt-20 mx-auto">
        <p className = "text-2xl text-black md:text-4xl font-bold text-center">Hey There Visitor 👋</p>
        <p className = "text-2xl text-gray-600 leading-relaxed mt-4 md:text-2xl  text-center">Web Developer fueled with passion to develop new and Interesting apps. Also into freelancing</p>
        <ScrollIntoView selector = "#tech">
            <div className = "mx-auto p-20">
                <FaChevronDown className = 'animate-bounce mx-auto text-3xl text-blue-500'/>
            </div>
            </ScrollIntoView>
    </div>
    
   
    
    )

}

export default About;