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
      name: "spike",
      mass: 10,
      restitution: 0,
      friction: 0.005,
      isStatic: true,
      render: {
        fillStyle: "#D9D9D9",
      },
    }
  );

  World.add(world, [spike]); // add new objects to this array.
}

export function SmallSpike(world, x, y) {
  const smallspike = Bodies.fromVertices(
    x,
    y,
    [
      [
        { x: 0, y: 0 },
        { x: 15, y: 0 },
        { x: 7.5, y: -20 },
      ],
    ],
    {
      name: "spike",
      mass: 10,
      restitution: 0,
      friction: 0.005,
      isStatic: true,
      render: {
        fillStyle: "#D9D9D9",
      },
    }
  );

  World.add(world, [smallspike]); // add new objects to this array.
}

export function IsosSpikeUp(world, x, y) {
  const isospikeup = Bodies.fromVertices(
    x,
    y,
    [
      [
        { x: 0, y: 0 },
        { x: 43, y: 0 },
        { x: 21.5, y: -43 },
      ],
    ],
    {
      name: "spike",
      mass: 10,
      restitution: 0,
      friction: 0.005,
      isStatic: true,
      render: {
        fillStyle: "#D9D9D9",
      },
    }
  );

  World.add(world, [isospikeup]); // add new objects to this array.
}

export function IsosSpikeDown(world, x, y) {
  const isospikedown = Bodies.fromVertices(
    x,
    y,
    [
      [
        { x: 0, y: 0 },
        { x: 43, y: 0 },
        { x: 21.5, y: 43 },
      ],
    ],
    {
      name: "spike",
      mass: 10,
      restitution: 0,
      friction: 0.005,
      isStatic: true,
      render: {
        fillStyle: "#D9D9D9",
      },
    }
  );

  World.add(world, [isospikedown]); // add new objects to this array.
}

//create right triangle for uphill section of level 4
export function RightTriangle(world, x, y) {
  const righttriangle = Bodies.fromVertices(
    x,
    y,
    [
      [
        { x: 0, y: 0 },
        { x: 302, y: -154 },
        { x: 302, y: 0 },
      ],
    ],
    {
      mass: 10,
      restitution: 0,
      friction: 0.005,
      isStatic: true,
      render: {
        fillStyle: "#9AFFC3",
      },
    }
  );

  World.add(world, [righttriangle]); // add new objects to this array.
}

export function Goal(world, x, y) {
  const goal = Bodies.rectangle(x, y, 50, 50, {
    name: "goal",
    isStatic: true,
    isSensor: true,
    render: {
      sprite: {
        texture: "/Goal.png",
      },
      fillStyle: "#000000",
    },
  });
  World.add(world, [goal]);
}
