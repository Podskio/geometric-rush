import { Bodies, World } from "matter-js";
import { IsosSpikeUp, IsosSpikeDown } from "./Elements"

export default function LevelInit(world) {
    //creating green blocks
    const rect1 = Bodies.rectangle(207 / 2, 518.5, 207, 163, {
        mass: 10,
        restitution: 0,
        friction: 0.005,
        isStatic: true,
        render: {
          fillStyle: "#9AFFC3",
        },
      });

      const rect2 = Bodies.rectangle(207 + (55 / 2), 573, 55, 54, {
        mass: 10,
        restitution: 0,
        friction: 0.005,
        isStatic: true,
        render: {
          fillStyle: "#9AFFC3",
        },
      });

      const rect3 = Bodies.rectangle(262 + (238 / 2), 518.5, 238, 163, {
        mass: 10,
        restitution: 0,
        friction: 0.005,
        isStatic: true,
        render: {
          fillStyle: "#9AFFC3",
        },
      });

      const rect4 = Bodies.rectangle(494 + (310 / 2), 476 + (128 / 2), 310, 128, {
        mass: 10,
        restitution: 0,
        friction: 0.005,
        isStatic: true,
        render: {
          fillStyle: "#9AFFC3",
        },
      });

      const rect5 = Bodies.rectangle(536 + (268 / 2), 458.5, 268, 43, {
        mass: 10,
        restitution: 0,
        friction: 0.005,
        isStatic: true,
        render: {
          fillStyle: "#9AFFC3",
        },
      });

      const rect6 = Bodies.rectangle(667 / 2, 115 + (174 / 2), 667, 174, {
        mass: 10,
        restitution: 0,
        friction: 0.005,
        isStatic: true,
        render: {
          fillStyle: "#9AFFC3",
        },
      });

      const rect7 = Bodies.rectangle(169 + (180 / 2), 289 + (40 / 2), 180, 40, {
        mass: 10,
        restitution: 0,
        friction: 0.005,
        isStatic: true,
        render: {
          fillStyle: "#9AFFC3",
        },
      });

      const rect8 = Bodies.rectangle(502 + (97 / 2), 289 + (70 / 2), 97, 70, {
        mass: 10,
        restitution: 0,
        friction: 0.005,
        isStatic: true,
        render: {
          fillStyle: "#9AFFC3",
        },
      });

      IsosSpikeUp(world, 298, 422.5);
      IsosSpikeUp(world, 430, 422.5);
      IsosSpikeDown(world, 430, 303);
      IsosSpikeDown(world, 542, 391);

      World.add(world, [rect1, rect2, rect3, rect4, rect5, rect6, rect7, rect8])
}