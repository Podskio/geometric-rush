import { Bodies, World } from "matter-js";
import { Goal, Spike } from "../components/Elements";

export default function LevelInit(world) {
  // creates the map geometry
  const rect1 = Bodies.rectangle(84.5, 518.5, 169, 163, {
    mass: 10,
    restitution: 0,
    friction: 0.05,
    isStatic: true,
    render: {
      fillStyle: "#9AFFC3",
    },
  });

  const rect2 = Bodies.rectangle(300, 585, 262, 30, {
    mass: 10,
    restitution: 0,
    friction: 0.05,
    isStatic: true,
    render: {
      fillStyle: "#9AFFC3",
    },
  });

  const rect3 = Bodies.rectangle(615.5, 518.5, 369, 163, {
    mass: 10,
    restitution: 0,
    friction: 0.05,
    isStatic: true,
    render: {
      fillStyle: "#9AFFC3",
    },
  });

  World.add(world, [rect1, rect2, rect3]); // add new objects to this array

  // create spikes
  for (var i = 0; i < 6; i++) {
    Spike(world, 171 + 21.5 + i * 43, 600 - (30 + 25));
  }

  // create player goal
  Goal(world, 600, 400);

  return {
    // the limit of what shapes a player can use in a level
    circle: 1,
    square: 1,
    bridge: 1,
    triangle: 1,
  };
}
