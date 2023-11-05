import { Bodies, Body, Events, World } from "matter-js";

function Player(canMove, engine, runner) {
  //   let time = 0;

  const player = Bodies.rectangle(160, 300, 45, 45, {
    mass: 10,
    friction: 0.1,
    render: { fillStyle: "#ff6262" },
    name: "player",
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
      } else if (
        (bodyA.name === "player" && bodyB.name === "goal") ||
        (bodyA.name === "goal" && bodyA.name === "player")
      ) {
        console.log("player won... loading the next level... jk");
      }
    }
  });

  const keys = {};
  let time = 0;
  let time2 = 0;
  document.addEventListener("keydown", (event) => {
    keys[event.key] = true;
    const force = 0.05;

    if (event.key == "w" || event.key == "ArrowUp") {
      if (time > time2 + 2500) {
        Body.applyForce(player, player.position, { x: 0, y: -force * 2 });
        time2 = time;
      }
    }
  });

  document.addEventListener("keyup", (event) => {
    keys[event.key] = false;
  });

  Events.on(runner, "beforeUpdate", (option) => {
    time = option.timestamp - time2;
    const force = 0.0025;

    if (keys["a"] || keys["ArrowLeft"]) {
      Body.applyForce(player, player.position, { x: -force, y: 0 });
    }

    if (keys["d"] || keys["ArrowRight"]) {
      Body.applyForce(player, player.position, { x: force, y: 0 });
    }
  });

  World.add(engine.current.world, [player]);
}

export default Player;
