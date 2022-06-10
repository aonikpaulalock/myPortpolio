import React, { Component } from "react";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import html from "../../Asset/Skills/html5.png"
import css from "../../Asset/Skills/css3.png"
import tailwind from "../../Asset/Skill/tailwind.png"
import boostrap from "../../Asset/Skills/bootstrap.png"
import js from "../../Asset/Skill/javascript.png"
import react from "../../Asset/Skill/react.png"
import node from "../../Asset/Skill/node.png"
import express from "../../Asset/Skills/express.png"
import mongodb from "../../Asset/Skill/mongo.png"
import firebase from "../../Asset/Skill/firebase.png"
import "../../Styles/SkillsSlider.css"
const SkillsSlider = () => {
  const settings = {
    className: "center",
    // centerMode: true,
    infinite: true,
    slidesToShow: 3,
    speed: 500,
    slidesToScroll: 2,
    slickNext: true,
    autoplay:true,
    // dots:true ,
  };
  return (
    <div className="my-12">
      <div className="md:w-10/12 md:mx-auto w-full md:px-0 ">
        <h1 class="md:text-4xl font-bold text-secondary text-3xl tracking-wider">MY SKILLS</h1>
        <h3 class="md:text-1xl text-xl font-bold racking-wider pt-2 pb-8 text-neutral">WHAT I KNOW</h3>
        <Slider {...settings}>
          <div>
            <img src={html} alt="" />
          </div>
          <div>
            <img src={css} alt="" />
          </div>
          <div>
            <img src={js} alt=""/>
          </div>
          <div>
            <img src={tailwind} alt=""/>
          </div>
          <div>
            <img src={react} alt=""/>
          </div>
          <div>
            <img src={node} alt="" />
          </div>
          <div>
            <img src={mongodb} alt="" width={120} />
          </div>
          <div>
            <img src={firebase} alt="" width={120} />
          </div>
        </Slider>
      </div>
    </div>
  );
};

export default SkillsSlider;