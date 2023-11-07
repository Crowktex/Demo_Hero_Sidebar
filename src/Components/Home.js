import { useState } from "react";
import Hand from "../Assets/WavingHand.png"
import {DiGithubBadge} from "react-icons/di"
import {CiLinkedin} from "react-icons/ci"


const Home = () => {

  return (
    <>
    <section class=" bg-gray-100 flex h-[100vh] relative flex-col w-full " id="hero">

        <div className="container m-auto max-w-screen py-4">
            <div className="content items-center flex max-h-[63rem] max-gap-[10rem] justify-center relative">
                <div className="hero-main items-center flex justify-center relative gap-[10rem]">
                <div className="hero-text flex flex-col max-w-[50rem] relative  ">
                    <h1 class="mb-8 mt-8 text-7xl lg:text-8xl text-zinc-800 font-bold"> Full-Stack Web Developer</h1>

                    <img src={Hand} className="mb-8 mt-8 absolute top-20 left-3/4 md:left-3/4 sm:left-3/4 lg:left-2/3 xl:left-[60%] xl:top-[8rem] h-14 w-14 animate-[wave_5s_ease-in-out_2]" id="waving"></img>
                    
                    <p className="presentation max-w-none text-zinc-600 leading-6 font-mono font-semibold lg:max-w-[32rem] md:max-w-none sm:max-w-none">
                        Hi, this is a demo about responsive header and an animated hero using React and Tailwind.
                    </p>
                    <span className="flex cursor-pointer my-8  justify-center lg:justify-normal ">
                        <a className="" aria-label="linkedin" rel="noreferrer" target="_blank" href="https://www.linkedin.com/">
                            <h3 className="text-5xl duration-300 hover:text-red-600"><CiLinkedin /></h3>
                        </a>
                        <a className="" aria-label="linkedin" rel="noreferrer" target="_blank" href="https://www.github.com/">
                            <h3 className="text-5xl duration-300 hover:text-red-600"><DiGithubBadge /></h3>
                        </a>
                    </span>
                    
                </div>
                <div className="hero-img">
                    </div> 
                </div>


            </div>


        </div>
    </section>

        
 

     
    </>
  );
};

export default Home;
