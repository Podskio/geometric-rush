import { Bodies, World } from "matter-js";
import { Goal, SmallSpike } from "../components/Elements";

export default function LevelInit2(world) {
  //creating green floor blocks
  const rect1 = Bodies.rectangle(169 / 2, 518.5, 169, 163, {
    mass: 10,
    restitution: 0,
    friction: 0.05,
    isStatic: true,
    render: {
      fillStyle: "#9AFFC3",
    },
  });

  const rect2 = Bodies.rectangle(287.5, 518.5, 15, 163, {
    mass: 10,
    restitution: 0,
    friction: 0.05,
    isStatic: true,
    render: {
      fillStyle: "#9AFFC3",
    },
  });

  const rect3 = Bodies.rectangle(407.5, 518.5, 15, 163, {
    mass: 10,
    restitution: 0,
    friction: 0.05,
    isStatic: true,
    render: {
      fillStyle: "#9AFFC3",
    },
  });

  const rect4 = Bodies.rectangle(522.5, 518.5, 15, 163, {
    mass: 10,
    restitution: 0,
    friction: 0.05,
    isStatic: true,
    render: {
      fillStyle: "#9AFFC3",
    },
  });

  const rect5 = Bodies.rectangle(728.5, 518.5, 156, 163, {
    mass: 10,
    restitution: 0,
    friction: 0.05,
    isStatic: true,
    render: {
      fillStyle: "#9AFFC3",
    },
  });

  //creates spike objects
  SmallSpike(world, 287.5, 430);
  SmallSpike(world, 522.5, 430);

  // create the player goal
  Goal(world, 750, 400);

  World.add(world, [rect1, rect2, rect3, rect4, rect5]);

  return {
    circle: 3,
    square: 2,
    bridge: 2,
    triangle: 2,
  };
}
