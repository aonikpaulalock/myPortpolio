import React from 'react';
import html from "../../Asset/Skill/html.png"
import css from "../../Asset/Skill/css.png"
import tailwind from "../../Asset/Skill/javascript.png"
import boostrap from "../../Asset/Skill/tailwind.png"
import js from "../../Asset/Skill/react.png"
import react from "../../Asset/Skill/node.png"
import node from "../../Asset/Skill/mongo.png"
import express from "../../Asset/Skill/firebase.png"
import Skill from './Skill';

const skills = [
  { id: 1, img: html },
  { id: 2, img: css },
  { id: 3, img: tailwind },
  { id: 4, img: boostrap },
  { id: 5, img: js },
  { id: 6, img: react },
  { id: 7, img: node },
  { id: 8, img: express },
]

const Skills = () => {
  return (
    <div className='sm:px-16 sm:my-8 px-6 my-6' id="skills">
      <h1 class="md:text-4xl font-bold text-secondary text-3xl tracking-wider">MY SKILLS</h1>
      <h3 class="md:text-1xl text-xl font-bold racking-wider pt-2 pb-8 text-neutral">WHAT I KNOW</h3>
      <div className='grid lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-8'>
        {
          skills.map(skill => <Skill
            key={skill.id}
            skill={skill}
          ></Skill>)
        }
      </div>
    </div>
  );
};

export default Skills;