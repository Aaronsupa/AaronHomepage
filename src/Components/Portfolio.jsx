/**
 * Portfolio component
 *
 * Highlights some of  your creations. These can be designs, websites,
 * open source contributions, articles you've written and more.
 *
 * This is a great area for you to to continually add to and refine
 * as you continue to learn and create.
 */

import React from "react";

/**
 * Desk image
 *
 * Below is a sample desk image. Feel free to update this to an image of your choice,
 * updating below imageAltText to string that represents what you see in that image.
 *
 * Need an image? Check out https://unsplash.com to download a photo you
 * freely use on your site.
 */
import image from "../images/csandbooks.jpg";

const imageAltText = "desktop with books and laptop";

/**
 * Project list
 *
 * An array of objects that will be used to display for your project
 * links section. Below is a sample, update to reflect links you'd like to highlight.
 */
const projectList = [
  {
    title: "10 Things To Know About Azure Static Web Apps 🎉",
    description:
      "Collaboration to create a beginner friendly article to help explain Azure Static Web Apps and tooling to get started.",
    url: "https://github.com/Aaronsupa/PokemonTextGame",
    skills: ["Azure", "Static Web Apps", "GitHub Actions"],
  },
  {
    title: "Pokemon Text Game 🎮",
    description:
      "Interactive text game implemented in Python and using the PokeAPI to get Pokemon data. This program leverages the command line to play and uses Object Oriented Programming principles",
    url: "https://github.com/Aaronsupa/PokemonTextGame",
    skills: ["Python", "APIs"],
  },
  {
    title: "My Resume Site",
    description:
      "Created from Microsoft's resume workshop and deployed to GitHub pages. Includes my interests, projects, and contact information.",
    url: "https://github.com/Aaronsupa/PokemonTextGame",
    skills: ["HTML", "CSS", "JavaScript", "React", "GitHub Pages"],
  },
  {
    title: "“Tradition and Innovation”: Japan",
    description:
      "Website blog project showcasing how Japan has maintained its traditions while embracing innovation. This project was created for my 2024 Spring Break - Study Abroad in Japan program",
    url: "https://github.com/Aaronsupa/PokemonTextGame",
    skills: ["Web Development", "Culture and Communication"],
  },
];

const Portfolio = () => {
  return (
    <section className="padding" id="portfolio">
      <h2 style={{ textAlign: "center" }}>Portfolio</h2>
      <div style={{ display: "flex", flexDirection: "row", paddingTop: "3rem" }}>
        <div
          style={{
            maxWidth: "50%",
            alignSelf: "center",
            display: "flex",
            alignItems: "center",
            alignContent: "center",
            justifyContent: "center", // Add this line to center the image horizontally
          }}
        >
          <img
            src={image}
            style={{ height: "90%", width: "90%", objectFit: "cover" }}
            alt={imageAltText}
          />
        </div>
        <div className="container">
          {projectList.map((project) => (
            <div
              className="box"
              key={project.title}
              style={{ boxShadow: " 1px 1px 1px 1px rgba(0, 0, 0, 0.1)" }}
            >
              <a href={project.url} target="_blank" rel="noopener noreferrer">
                <h3 style={{ flexBasis: "40px" }}>{project.title}</h3>
              </a>
              <p className="small">{project.description}</p>
              <div style={{ display: "flex", flexWrap: "wrap" }}>
                {project.skills &&
                  project.skills.map((skill) => (
                    <div
                      key={skill}
                      style={{
                        backgroundColor: "#f4f4f4",
                        color: "#333",
                        padding: "0.5rem",
                        margin: "0.5rem",
                        borderRadius: "5px",
                        boxShadow: " 1px 1px 1px 1px rgba(0, 0, 0, 0.1)",
                      }}
                    >
                      {skill}
                    </div>
                  ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Portfolio;
