import React from 'react'
import Title from '../layouts/Title'
import {  Webmediacl, Happyroutes, FoodPalace, } from "../../assets/index";
import ProjectsCard from './ProjectsCard';

const Projects = () => {
  return (
    <section
      id="projects"
      className="w-full py-20 border-b-[1px] border-b-black"
    >
      <div className="flex justify-center items-center text-center">
        <Title
          title="VISIT MY PORTFOLIO AND KEEP YOUR FEEDBACK"
          des="My Projects"
        />
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6 xl:gap-14">
        <ProjectsCard
          title="Webmediacl "
          des="Medical clinic & Patient management and appointment!"
          src={Webmediacl}
        />
        <ProjectsCard
          title="Happyroutes"
          des="Happyroutes is a frontend website for plan your holidays!"
          src={Happyroutes}
        />
        <ProjectsCard
          title="Food Palace"
          des=" the food palace is hero section design for food side which is created on Figma!"
          src={FoodPalace}
        />
      </div>
    </section>
  );
}

export default Projects