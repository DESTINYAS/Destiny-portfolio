import React from "react";

const About = () => {
  return (
    <div
      name="about"
      className="w-full h-screen bg-gradient-to-b from-gray-800 to-black text-white"
    >
      <div className="max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full">
        <div className="pb-8 pt-20">
          <p className="text-4xl font-bold inline border-b-4 border-gray-500">
            About
          </p>
        </div>

        <p className="text-xl mt-20">
        I'm a passionate and experienced backend developer dedicated to crafting efficient, reliable, and user-friendly software solutions. With a solid background in both front-end and back-end development, I enjoy working on a wide range of projects, from building interactive web applications to designing scalable server architectures.
        </p>

        <br />

        <p className="text-xl mb-20 pb-8">
        I have experience in HTML, CSS, SCSS, TAILWIND JavaScript, Java,Spring Boot, React, React-Redux, Typscript, Node.js, Nest.js,Docker, nginx, Express.js, database design and management using SQL and NoSQL databases e.t.c. I excel in creating seamless end-to-end solutions, Building and integrating APIs, and delivering high-quality software products. I thrive in agile environments, value teamwork, and constantly stay updated with industry trends. Let's collaborate and bring your ideas to life!
        </p>
      </div>
    </div>
  );
};

export default About;
