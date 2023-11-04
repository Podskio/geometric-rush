import { Bodies, Body, Events, World } from "matter-js";

function Player(canMove, engine, runner) {
  //   let time = 0;

  const player = Bodies.rectangle(160, 300, 45, 45, {
    mass: 10,
    friction: 0.1,
    render: { fillStyle: "#ff6262" },
    name: "player",
  });

  const keys = {};

  document.addEventListener("keydown", (event) => {
    keys[event.key] = true;
    const force = 0.05;

    if (event.key == "w" || event.key == "ArrowUp") {
      Body.applyForce(player, player.position, { x: 0, y: -force * 2 });
    }
  });

  document.addEventListener("keyup", (event) => {
    keys[event.key] = false;
  });

  Events.on(runner, "beforeUpdate", () => {
    const force = 0.0025;

    if (keys["a"] || keys["ArrowLeft"]) {
      Body.applyForce(player, player.position, { x: -force, y: 0 });
    }

    if (keys["d"] || keys["ArrowRight"]) {
      Body.applyForce(player, player.position, { x: force, y: 0 });
    }
  });

  Events.on(engine.current, "collisionStart", (event) => {
    const pairs = event.pairs;
    // console.log(pairs); TODO: remove me!

    for (const pair of pairs) {
      //   console.log(pair.bodyA.name + " collided with " + pair.bodyB.name); TODO: remove me!
      const bodyA = pair.bodyA;
      const bodyB = pair.bodyB;
      if (
        (bodyA.name === "player" && bodyB.name === "spike") ||
        (bodyA.name === "spike" && bodyB.name == "player")
      ) {
        console.log("player dead!");
      }
    }
  });

  World.add(engine.current.world, [player]);
}

export default Player;
