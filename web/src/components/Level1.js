import { Bodies, World } from "matter-js";
import { Flag, Spike } from "./Elements";

export default function LevelInit(world) {
  const rect1 = Bodies.rectangle(169 / 2, 518.5, 169, 163, {
    // SCUFFED
    mass: 10,
    restitution: 0,
    friction: 0.005,
    isStatic: true,
    render: {
      fillStyle: "#9AFFC3",
    },
  });

  const rect2 = Bodies.rectangle(169 + 262 / 2, 600 - 15, 262, 30, {
    // SCUFFED
    mass: 10,
    restitution: 0,
    friction: 0.005,
    isStatic: true,
    render: {
      fillStyle: "#9AFFC3",
    },
  });

  const rect3 = Bodies.rectangle(800 - 369 / 2, 518.5, 369, 163, {
    // SCUFFED
    mass: 10,
    restitution: 0,
    friction: 0.005,
    isStatic: true,
    render: {
      fillStyle: "#9AFFC3",
    },
  });

  // create spikes
  for (var i = 0; i < 6; i++) {
    Spike(world, 171 + 21.5 + i * 43, 600 - (30 + 25));
  }

  // create flag
  Flag(world, 700, 400);

  World.add(world, [rect1, rect2, rect3]); // add new objects to this array.
}
