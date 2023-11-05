import { Bodies, World } from "matter-js";

import { Goal } from "../components/Elements";

export default function LevelInit3(world) {
  //creates green floor blocks
  const rect1 = Bodies.rectangle(169 / 2, 518.5, 169, 163, {
    mass: 10,
    restitution: 0,
    friction: 0.05,
    isStatic: true,
    render: {
      fillStyle: "#9AFFC3",
    },
  });

  const rect2 = Bodies.rectangle(140 + 505 / 2, 553 + 47 / 2, 505, 47, {
    mass: 10,
    restitution: 0,
    friction: 0.05,
    isStatic: true,
    render: {
      fillStyle: "#9AFFC3",
    },
  });

  const rect3 = Bodies.rectangle(608 + 192 / 2, 301 + 299 / 2, 192, 299, {
    mass: 10,
    restitution: 0,
    friction: 0.05,
    isStatic: true,
    render: {
      fillStyle: "#9AFFC3",
    },
  });

  World.add(world, [rect1, rect2, rect3]);

  // creates end goal for the player
  Goal(world, 700, 267); 

  return {
    circle: 4,
    square: 10,
    bridge: 3,
    triangle: 4,
  };
}
