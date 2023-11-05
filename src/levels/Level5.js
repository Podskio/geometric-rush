import { Bodies, World } from "matter-js";
import { Goal, IsosSpikeDown, IsosSpikeUp } from "../components/Elements";

export default function LevelInit5(world) {
  //creates green blocks
  const rect1 = Bodies.rectangle(207 / 2, 518.5, 207, 163, {
    mass: 10,
    restitution: 0,
    friction: 0.05,
    isStatic: true,
    render: {
      fillStyle: "#9AFFC3",
    },
  });

  const rect2 = Bodies.rectangle(207 + 55 / 2, 573, 55, 54, {
    mass: 10,
    restitution: 0,
    friction: 0.05,
    isStatic: true,
    render: {
      fillStyle: "#9AFFC3",
    },
  });

  const rect3 = Bodies.rectangle(262 + 238 / 2, 518.5, 238, 163, {
    mass: 10,
    restitution: 0,
    friction: 0.05,
    isStatic: true,
    render: {
      fillStyle: "#9AFFC3",
    },
  });

  const rect4 = Bodies.rectangle(494 + 310 / 2, 476 + 128 / 2, 310, 128, {
    mass: 10,
    restitution: 0,
    friction: 0.05,
    isStatic: true,
    render: {
      fillStyle: "#9AFFC3",
    },
  });

  const rect5 = Bodies.rectangle(534 + 268 / 2, 458.5, 268, 43, {
    mass: 10,
    restitution: 0,
    friction: 0.05,
    isStatic: true,
    render: {
      fillStyle: "#9AFFC3",
    },
  });

  const rect6 = Bodies.rectangle(349 / 2, 115 + 174 / 2, 349, 174, {
    mass: 10,
    restitution: 0,
    friction: 0.05,
    isStatic: true,
    render: {
      fillStyle: "#9AFFC3",
    },
  });

  const rect7 = Bodies.rectangle(169 + 180 / 2, 289 + 30 / 2, 180, 30, {
    mass: 10,
    restitution: 0,
    friction: 0.05,
    isStatic: true,
    render: {
      fillStyle: "#9AFFC3",
    },
  });

  const rect8 = Bodies.rectangle(349 + 300 / 2, 115 + 174 / 2, 300, 174, {
    mass: 10,
    restitution: 0,
    friction: 0.05,
    isStatic: true,
    render: {
      fillStyle: "#9AFFC3",
    },
  });

  const rect9 = Bodies.rectangle(493 + 97 / 2, 280 + 60 / 2, 97, 60, {
    mass: 10,
    restitution: 0,
    friction: 0.05,
    isStatic: true,
    render: {
      fillStyle: "#9AFFC3",
    },
  });

  IsosSpikeUp(world, 298, 422.5);
  IsosSpikeUp(world, 430, 422.5);
  IsosSpikeDown(world, 430, 303);
  IsosSpikeDown(world, 520, 358);

  World.add(world, [
    rect1,
    rect2,
    rect3,
    rect4,
    rect5,
    rect6,
    rect7,
    rect8,
    rect9,
  ]);

  // generate goal post for the player
  Goal(world, 700, 400);

  return {
    circle: 3,
    square: 2,
    bridge: 0,
    triangle: 3,
  };
}
