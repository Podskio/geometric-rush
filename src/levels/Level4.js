import { Bodies, World } from "matter-js";
import { Goal, RightTriangle } from "../components/Elements";

export default function LevelInit4(world) {
  //creates green floor blocks
  const rect1 = Bodies.rectangle(292 / 2, 518.5, 292, 163, {
    mass: 10,
    restitution: 0,
    friction: 0.05,
    isStatic: true,
    render: {
      fillStyle: "#9AFFC3",
    },
  });

  const rect2 = Bodies.rectangle(292 + 300 / 2, 575, 300, 80, {
    mass: 10,
    restitution: 0,
    friction: 0.05,
    isStatic: true,
    render: {
      fillStyle: "#9AFFC3",
    },
  });

  const rect3 = Bodies.rectangle(604 + 27 / 2, 301 + 301 / 2, 27, 301, {
    mass: 10,
    restitution: 0,
    friction: 0.05,
    isStatic: true,
    render: {
      fillStyle: "#9AFFC3",
    },
  });

  const rect4 = Bodies.rectangle(555 + 245 / 2, 439 + 163 / 2, 245, 163, {
    mass: 10,
    restitution: 0,
    friction: 0.05,
    isStatic: true,
    render: {
      fillStyle: "#9AFFC3",
    },
  });

  RightTriangle(world, 525, 500);
  World.add(world, [rect1, rect2, rect3, rect4]);

  // end goal for the player
  Goal(world, 700, 350);

  return {
    circle: 2,
    square: 4,
    bridge: 5,
    triangle: 2,
  };
}
