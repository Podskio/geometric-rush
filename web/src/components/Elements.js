import { Bodies, World } from "matter-js";

export function Spike(world, x, y) {
  const spike = Bodies.fromVertices(
    x,
    y,
    [
      [
        { x: 0, y: 0 },
        { x: 43, y: 0 },
        { x: 21.5, y: -75 },
      ],
    ],
    {
      mass: 10,
      restitution: 0,
      friction: 0.005,
      isStatic: true,
      render: {
        fillStyle: "#D9D9D9",
      },
      name: "spike",
    }
  );

  World.add(world, [spike]); // add new objects to this array.
}
