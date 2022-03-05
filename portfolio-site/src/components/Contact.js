import React from "react";
import {FaArrowRight} from "react-icons/fa";


const Contact = ()=>{
    return(
        <div className = "max-w-lg w-full text-center m-auto pt-36 pb-10">
            <h1 className = "text-4xl"> Don't be shy, Just say Hi! </h1>
            <a href = 'mailto:shripati.codes@gmail.com'>
                <span className = "mt-10 inline-block w-auto bg-black">
                    <div className = "flex flex-row items-center ">
                        <span className = "m-4  text-white">Get in touch</span>
                        <FaArrowRight color="white" className="mr-3"/>
                    </div>
                </span>
            </a>
        </div>
    )
}
export default Contact;