import { Bodies, World } from "matter-js";

export default function HomeScreenInit(world) {
  //randomize function?
  const color = [
    "#FFC85E",
    "#C79AFF",
    "#FF6262",
    "#5ECFFF",
    "#F57DFF",
    "#5E94FF",
    "#9AFFC3",
  ];

  const rad = [20, 30, 40];
  const size = [50, 100, 125, 150, 175, 200];
  const xloc = [50, 100, 150, 200, 250, 300, 400, 450, 500, 650, 600, 750, 800];
  const yloc = [50, 100, 200, 250];

  for (var i = 0; i < 4; i++) {
    const rect1 = Bodies.rectangle(
      randomOf(xloc),
      randomOf(yloc),
      randomOf(size),
      40,
      {
        mass: 0,
        restitution: 0.25,
        friction: 0,
        isStatic: false,
        render: {
          fillStyle: randomOf(color),
        },
      }
    );

    const rect2 = Bodies.rectangle(
      randomOf(xloc),
      randomOf(yloc),
      randomOf(size),
      randomOf(size),
      {
        mass: 0,
        restitution: 0.25,
        friction: 0,
        isStatic: false,
        render: {
          fillStyle: randomOf(color),
        },
      }
    );

    const circ = Bodies.circle(randomOf(xloc), randomOf(yloc), randomOf(rad), {
      mass: 0,
      restitution: 0.25,
      friction: 0,
      isStatic: false,
      render: {
        fillStyle: randomOf(color),
      },
    });

    const trisize = randomOf(size);
    const triangle = Bodies.fromVertices(
      randomOf(xloc),
      randomOf(yloc),
      [
        [
          { x: 0, y: 0 },
          { x: trisize, y: 0 },
          { x: trisize / 2, y: -trisize },
        ],
      ],
      {
        mass: 0,
        restitution: 0.25,
        friction: 0.005,
        render: {
          fillStyle: randomOf(color),
        },
      }
    );

    World.add(world, [rect1, rect2, circ, triangle]);
  }

  return {
    circles: 0,
    squares: 0,
    bridges: 0,
    triangles: 0,
  };
}

const randomOf = (list) => {
  return list[Math.floor(Math.random() * list.length)];
};
