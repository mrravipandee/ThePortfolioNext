import React from 'react';
import { Spotlight } from './ui/Spotlight';
import { TextGenerateEffect } from './ui/TextGenerateEffect';
import MagicButton from './ui/MagicButton';
import { FaLocationArrow } from "react-icons/fa6";

const Hero = () => {
    return (
        <div className="pb-20 pt-36 relative">
            {/* Spotlight Backgrounds */}
            <Spotlight className="-top-40 -left-10 md:-left-32 md:-top-20 h-screen" fill="white" />
            <Spotlight className="top-10 left-full h-[80vh] w-[50vw]" fill="purple" />
            <Spotlight className="top-28 left-80 h-[80vh] w-[50vw]" fill="blue" />

            {/* Main Container */}
            <div className="h-[50rem] w-full dark:bg-black-100 bg-white dark:bg-grid-white/[0.05] bg-grid-black/[0.2] flex items-center justify-center absolute top-0 left-0">
                {/* Radial Gradient Overlay */}
                <div className="absolute pointer-events-none inset-0 flex items-center justify-center dark:bg-black-100 bg-white [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)]"></div>
            </div>

            {/* Text Container */}
            <div className="flex justify-center relative my-20 z-10">
                <div className="max-w-[89vw] md:max-w-2xl lg:max-w-[60vw] flex flex-col items-center justify-center">
                    <h2 className="uppercase tracking-widest text-xs text-center text-blue-300 max-w-80">
                        Ravi Pandey
                    </h2>

                    {/* Main Animated Text */}
                    <TextGenerateEffect
                        className="text-center text-[40px] md:text-5xl lg:text-6xl bg-clip-text text-transparent bg-gradient-to-b from-blue-400 to-blue-600"
                        words="Transforming concepts into seamless experiences"
                    />

                    <p className="text-center md:tracking-wider mb-4 text-sm md:text-lg lg:text-2xl">
                        Hi, I am Ravi, a MERN Stack Developer & ML Enthusiast
                    </p>

                    <a href="#">
                        <MagicButton 
                            title="Show my work" 
                            icon={<FaLocationArrow />} 
                            position="right"
                            otherClasses="mt-4"
                        />
                    </a>
                </div>
            </div>
        </div>
    );
};

export default Hero;
