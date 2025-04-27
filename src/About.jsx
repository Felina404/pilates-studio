import { useState, useEffect, useRef } from "react";
import about1_small from "./assets/about1_small.jpg";
import about1_medium from "./assets/about1_medium.jpg";
import about2_small from "./assets/about2_small.jpg";
import about2_medium from "./assets/about2_medium.jpg";
import about3_small from "./assets/about3_small.jpg";
import about3_medium from "./assets/about3_medium.jpg";



function About() {
    
    return (
        <>
         <div id="about" className="w-full flex flex-col items-center justify-center p-4">
            <h1 className="text-[clamp(3rem,5vw,6rem)] uppercase font-extralight text-center m-2 md:w-1/2">Transform your mind & body</h1>
            <p className="text-left mt-4 w-[90%] md:w-[70%] text-lg leading-relaxed tracking-wide text-gray-700 md:text-gray-600">At myPilates, we belive focus on the mind to body 
                connection is the key to a successful Pilates practice.
                Our classes are designed to help you develop a deeper
                understanding of your body and how it moves. We offer
                a variety of classes, from beginner to advanced, so you
                can find the perfect fit for your level of experience.
                Our experienced instructors will guide you through each
                class, providing personalized attention and support to
                help you achieve your goals. Whether you're looking to
                improve your strength, flexibility, or overall well-being,
                myPilates is here to help you transform your mind and body.
                Join us today and discover the power of Pilates for
                yourself!           
                </p>
        </div>
        <div className="flex justify-center items-center">
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 p-4 w-full md:w-[80%] justify-items-center ">
            
                <div className="flex flex-col md:flex-row lg:flex-col items-center max-w-[70%] md:max-w-full">
                <picture className="md:flex-0 md:w-1/2 lg:w-auto md:mr-5 lg:mr-auto"> 
                    <source media="(max-width: 640px)" srcSet={about1_small} />
                    <source media="(min-width: 641px)" srcSet={about1_medium} />
                    <img src={about1_small} alt="group mat pilates" loading="lazy"className="w-full h-full object-cover"/>
                    </picture> 
                    <div className="text-center mt-4 md:text-start lg:text-center md:flex-0 md:w-1/2 lg:w-auto">
                        <h3 className="uppercase text-lg my-4 font-medium">Mat Pilates</h3>
                        <p className="mt-4 leading-relaxed tracking-wide text-gray-700">At my Pilates we offer a variety of mat Pilates classes designed to suit all 
                        fitness levels. Whether you're a beginner looking to build a 
                        strong foundation or an experienced practitioner aiming to refine your 
                        technique, our classes provide a supportive and engaging environment 
                        to help you achieve your goals.</p>
                    </div>      
                </div>

                
                <div className="flex flex-col md:flex-row lg:flex-col items-center max-w-[70%] md:max-w-full">
                    <picture className="md:flex-0 md:w-1/2 lg:w-auto md:mr-5 lg:mr-auto">
                    <source media="(max-width: 640px)" srcSet={about2_small} />
                    <source media="(min-width: 641px)" srcSet={about2_medium} />
                    <img src={about2_small} alt="reformer machines" loading="lazy"className="w-full h-full object-cover"/>
                    </picture> 
                    <div className="text-center mt-4 md:text-start lg:text-center md:flex-0 md:w-1/2 lg:w-auto">
                        <h3 className="uppercase text-lg my-4 font-medium">Reformer machines</h3>
                        <p className="mt-4 leading-relaxed tracking-wide text-gray-700">Our reformer machine classes are designed to enhance your Pilates 
                        experience by incorporating resistance training. These classes help improve your strength, 
                        flexibility, and posture while providing a low-impact workout suitable for all fitness levels. 
                        Whether you're new to reformer machines or an experienced user, our instructors 
                        will guide you through each session to ensure you get the most out of your practice.</p>
                    </div>
                    
                </div>

                <div className="flex flex-col md:flex-row lg:flex-col items-center max-w-[70%] md:max-w-full">
                    <picture className="md:flex-0 md:w-1/2 lg:w-auto  md:mr-5 lg:mr-auto">
                    <source media="(max-width: 640px)" srcSet={about3_small} />
                    <source media="(min-width: 641px)" srcSet={about3_medium} />
                    <img src={about3_small} alt="reformer machines" loading="lazy"className="w-full h-full object-cover"/>
                    </picture> 
                    <div className="text-center mt-4 md:text-start lg:text-center md:flex-0 md:w-1/2 lg:w-auto">
                        <h3 className="uppercase text-lg my-4 font-medium">Outdoors classes</h3>
                        <p className="mt-4 leading-relaxed tracking-wide text-gray-700">Experience the joy of Pilates in the fresh air with our outdoor classes.
                        These sessions are designed to combine the benefits of Pilates with the rejuvenating 
                        effects of being in nature. Whether in a park or another scenic location, 
                        our outdoor classes provide a unique and invigorating way to improve your strength, 
                        flexibility, and overall well-being.</p>
                    </div>
                    
                </div>
        
        </div>
        </div>
        </>
       
    );
}

export default About;

     