import { Bodies, Body, Events, World } from "matter-js";

function Player(canMove, engine, runner) {
  //Creates the player object
  const player = Bodies.rectangle(84.5, 300, 45, 45, {
    mass: 10,
    friction: 0,
    render: { fillStyle: "#ff6262" },
    name: "player",
  });

  const keys = {};

  let currentTime = 0;
  let timeSinceLast = 0;

  document.addEventListener("keydown", (event) => {
    //Will capture mouse press
    keys[event.key] = true;
    const force = 0.05;

    if (event.key == "w" || event.key == "ArrowUp") {
      //Allows player to jump
      if (currentTime - timeSinceLast > 4000) {
        //Disallows spam jumping
        Body.applyForce(player, player.position, { x: 0, y: -force * 1.4 });
        timeSinceLast = currentTime;
      }
    }
  });

  document.addEventListener("keyup", (event) => {
    //Will capture mouse release
    keys[event.key] = false;
  });

  Events.on(runner, "beforeUpdate", (option) => {
    //Allows player to move side to side and captures time of jumps
    currentTime = option.timestamp;
    const force = 0.0005;

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
