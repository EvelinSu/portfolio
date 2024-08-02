import { IParticlesProps } from "@tsparticles/react";

const windowWidth = window.innerWidth;

export const options: IParticlesProps["options"] = {
  particles: {
    number: {
      value: windowWidth < 1000 ? 15 : 50,
      density: {
        enable: false,
      },
    },
    color: {
      value: "#fff",
    },
    shape: {
      type: "star",
    },
    opacity: {
      animation: {
        enable: true,
        count: {
          min: 0.2,
          max: 0.8,
        },
        speed: 1,
        mode: "random",
        startValue: "random",
      },
    },
    size: {
      value: 4,
      animation: {
        enable: true,
        speed: 4,
        count: {
          min: 0.2,
          max: 6,
        },
        sync: false,
      },
    },
    rotate: {
      value: 0,
      random: true,
      direction: "clockwise",
      animation: {
        enable: true,
        speed: 5,
        sync: false,
      },
    },
    line_linked: {
      enable: true,
      distance: windowWidth > 800 ? 180 : 100,
      color: "#ffffff",
      opacity: 0.4,
      width: 2,
    },
    move: {
      enable: true,
      speed: 1,
      random: false,
      straight: false,
      attract: {
        enable: false,
      },
    },
  },
  interactivity: {
    events: {
      onHover: {
        enable: windowWidth > 800,
        mode: ["grab"],
      },
      onClick: {
        enable: false,
        mode: "bubble",
      },
      resize: {
        enable: true,
      },
    },
    modes: {
      grab: {
        distance: 200,
        line_linked: {
          opacity: 1,
        },
      },
      repulse: {
        distance: 200,
      },
      push: {
        particles_nb: 4,
      },
      remove: {
        particles_nb: 2,
      },
    },
  },
  retina_detect: true,
  background: {
    image: "",
    position: "50% 50%",
    repeat: "no-repeat",
  },
};
