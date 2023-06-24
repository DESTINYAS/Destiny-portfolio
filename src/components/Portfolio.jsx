import React from "react";
import boosta from "../images/portfolio/boosta.PNG";
import hopeAlive from "../images/portfolio/hopeAlive.png";
import apiLocalCompass from "../images/portfolio/apiLocalCompass.png";
import drumKit from "../images/portfolio/drumKit.png";
import diceGame from "../images/portfolio/diceGame.png";
import marioClub from "../images/portfolio/marioClub.png";
import time from "../images/portfolio/time.png";

const Portfolio = () => {
  const portfolios = [
    {
      id: 1,
      src: boosta,
      demo: "https://boosta.ng/",
      code : "#",
      textCode : "Code(Priv.)",
      textDemo : "Demo"
    },
    {
      id: 2,
      src: hopeAlive,
      demo:"https://hopealive.com.ng/",
      code : "#",
      textCode : "Code(Priv.)",
      textDemo : "Demo"
    },
    {
      id: 3,
      src: apiLocalCompass,
      demo: "https://local-compass-iyvy.onrender.com/api#/",
      code : "https://github.com/DESTINYAS/local-compass-backend-task/tree/master",
      textCode : "Code",
      textDemo : "Demo"
    },
    {
      id: 4,
      src: drumKit,
      demo:"https://destinyas.github.io/Drum-Kit/",
      code : "https://github.com/DESTINYAS/Drum-Kit",
      textCode : "Code",
      textDemo : "Demo"
    },
    {
      id: 5,
      src: time,
      demo:"https://destinyas.github.io/StopWatch/",
      code : "https://github.com/DESTINYAS/StopWatch",
      textCode : "Code",
      textDemo : "Demo"
    },
    {
      id: 6,
      src: diceGame,
      demo:"https://destinyas.github.io/Deploy-Dice-Game/",
      code : "https://github.com/DESTINYAS/Dice-Game",
      textCode : "Code",
      textDemo : "Demo"
    },
    {
      id: 7,
      src: marioClub,
      demo:"https://destinyas.github.io/MarioClub/",
      code : "https://github.com/DESTINYAS/StopWatch",
      textCode : "Code",
      textDemo : "Demo"
      },
  ];

  return (
    <div
      name="portfolio"
      className="bg-gradient-to-b from-black to-gray-800 w-full text-white md:h-screen"
    >
      <div className="max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full">
        <div className="4">
          <p className="text-4xl font-bold inline border-b-4 border-gray-500">
            Portfolio
          </p>
          <p className="py-3">Check out some of my work right here</p>
        </div>

        <div className="grid sm:grid-cols-2 md:grid-cols-4 gap-8 px-12 sm:px-0">
          {portfolios.map(({ id, src,code,demo,textCode,textDemo }) => (
            <div key={id} className="shadow-md shadow-gray-600 rounded-lg">
              <img
                src={src}
                alt=""
                className="rounded-md duration-200 hover:scale-105"
              />
              <div className="flex items-center justify-center">
                <button className="w-1/2 px-6 py-1 m-4 duration-200 hover:scale-105">
                  <a href={demo} target="_blank" rel="noopener noreferrer">{textDemo}</a>
                </button>
                <button className="w-1/2 px-6 py-1 m-4 duration-200 hover:scale-105">
                  <a href={code} target="_blank" rel="noopener noreferrer">{textCode}</a>
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Portfolio;
