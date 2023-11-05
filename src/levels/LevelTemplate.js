import { Bodies, World } from "matter-js";

export default function LevelInit(world) {
  const rectangle = Bodies.rectangle(100, 100, 50, 50, {
    mass: 10,
    restitution: 1,
    friction: 0.005,
    isStatic: true,
    render: {
      fillStyle: "#FF0000",
    },
  });

  World.add(world, [rectangle]);
}
