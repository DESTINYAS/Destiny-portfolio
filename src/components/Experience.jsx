import React from "react";
import html from "../images/html.png";
import css from "../images/css.png";
import javascript from "../images/javascript.png";
import reactImage from "../images/react.png";
import nestjs from "../images/nestjs.png";
import nodejs from "../images/nodejs.png";
import github from "../images/github.png";
import java from "../images/Java-Logo.png";
import tailwind from "../images/tailwind.png";
import docker from "../images/docker.png";
import nginx from "../images/nginx.png";
import rabbit from "../images/rabbit.png";

const Experience = () => {
  const techs = [
    {
      id: 1,
      src: html,
      title: "HTML",
      style: "shadow-orange-500",
    },
    {
      id: 2,
      src: css,
      title: "CSS",
      style: "shadow-blue-500",
    },
    {
      id: 3,
      src: javascript,
      title: "JavaScript",
      style: "shadow-yellow-500",
    },
    {
        id: 4,
        src: nodejs,
        title: "Node JS",
        style: "shadow-pink-400",
      },
      {
        id: 5,
        src: nestjs,
        title: "Nest JS",
        style: "shadow-white",
      },
      {
        id: 6,
        src: rabbit,
        title: "Rabbit MQ",
        style: "shadow-white",
      },
      {
        id: 7,
        src: docker,
        title: "Docker",
        style: "shadow-yellow-500",
      },
      {
        id: 8,
        src: nginx,
        title: "NGINX",
        style: "shadow-yellow-500",
      },
    {
      id: 9,
      src: reactImage,
      title: "React",
      style: "shadow-blue-600",
    },
    {
      id: 10,
      src: tailwind,
      title: "Tailwind",
      style: "shadow-sky-400",
    },
    {
      id: 11,
      src: github,
      title: "GitHub",
      style: "shadow-gray-400",
    },
    {
      id: 12,
      src: java,
      title: "Java",
      style: "shadow-gray-400",
    },
  ];

  return (
    <div
      name="experience"
      className="bg-gradient-to-b from-gray-800 to-black w-full h-screen"
    >
      <div className="max-w-screen-lg mx-auto p-4 flex flex-col justify-center w-full h-full text-white">
        <div>
          <p className="text-4xl font-bold border-b-2 border-gray-500 p-1 py-0 inline">
            Experience
          </p>
          <p className="py-3">These are some of the technologies I've worked with</p>
        </div>

        <div className="w-full grid grid-cols-2 sm:grid-cols-4 gap-8 text-center py-1 px-12 sm:px-0">
          {techs.map(({ id, src, title, style }) => (
            <div
              key={id}
              className={`shadow-md hover:scale-105 duration-500 py-2 rounded-lg ${style}`}
            >
              <img src={src} alt="" className="w-20 mx-auto" />
              <p className="mt-4">{title}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Experience;
