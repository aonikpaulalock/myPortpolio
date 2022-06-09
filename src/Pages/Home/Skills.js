import React from 'react';
import html from "../../Asset/Skills/html5.png"
import css from "../../Asset/Skills/css3.png"
import tailwind from "../../Asset/Skills/tailwind-css.png"
import boostrap from "../../Asset/Skills/bootstrap.png"
import js from "../../Asset/Skills/javascript.png"
import react from "../../Asset/Skills/react.png"
import node from "../../Asset/Skills/nodejs.png"
import express from "../../Asset/Skills/express.png"
import mongodb from "../../Asset/Skills/mongodb.png"
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
  { id: 9, img: mongodb },
]

const Skills = () => {
  return (
    <div className='sm:px-16 sm:my-8 px-6 my-6'>
      <h1 class="md:text-4xl font-bold text-secondary text-3xl tracking-wider">MY SKILLS</h1>
      <h3 class="md:text-1xl text-xl font-bold racking-wider pt-2 pb-6 text-neutral">WHAT I KNOW</h3>
      <div className='grid md:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-6'>
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