import React from "react";
import Particles from "react-tsparticles";

function Particle() {
  return (
    <Particles
      id="tsparticles"
      params={{
        particles: {
          number: {
            value: 500,
            density: {
              enable: true,
              value_area: 1500,
            },
          },
          line_linked: {
            enable: false,
            opacity: 0.2,
          },
          move: {
            enable: true,
            speed: 3, // Adjust speed as needed
            direction: "bottom", // Set direction to bottom
            random: false, // Set random movement to false for a circular motion
            straight: false, // Set straight movement to false for a circular motion
            out_mode: "out",
          },
          size: {
            value: 1,
          },
          opacity: {
            anim: {
              enable: true,
              speed: 2,
              opacity_min: 0.05,
            },
          },
        },
        interactivity: {
          events: {
            onclick: {
              enable: true,
              mode: "push",
            },
          },
          modes: {
            push: {
              particles_nb: 1,
            },
          },
        },
        retina_detect: true,
      }}
    />
  );
}

export default Particle;
