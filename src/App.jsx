import "./App.css";

import { Bodies, Engine, Events, Render, Runner, World } from "matter-js";
import { useEffect, useRef, useState } from "react";

import Player from "./components/Player";
import Interface from "./components/interface";
import EndScreenInit from "./levels/EndScreen";
import HomeScreenInit from "./levels/HomeScreen";
import LevelInit1 from "./levels/Level1";
import LevelInit2 from "./levels/Level2";
import LevelInit3 from "./levels/Level3";
import LevelInit4 from "./levels/Level4";
import LevelInit5 from "./levels/Level5";
import TitleScreen from "./levels/TitleScreen";

function App() {
  const scene = useRef();
  const engine = useRef(Engine.create());
  const runner = useRef(Runner.create());
  engine.current.gravity.scale = 0.00005;

  const [shape, setShape] = useState();
  const [shapelimit, setLimit] = useState({});
  const [currentLevel, setCurrentLevel] = useState("end");

  useEffect(() => {
    const render = Render.create({
      element: scene.current,
      engine: engine.current,
      options: {
        width: 800,
        height: 600,
        wireframes: false,
        background: "transparent",
      },
    });

    Engine.run(engine.current);
    Render.run(render);

    Runner.run(runner.current, engine.current);

    switchLevel(currentLevel);

    return () => {
      Render.stop(render);
      World.clear(engine.current.world);
      Engine.clear(engine.current);
      render.canvas.remove();
      render.canvas = null;
      render.context = null;
      render.textures = {};
    };
  }, []);

  // returns function reference from level name
  const levelNameToFunction = {
    home: HomeScreenInit,
    level1: LevelInit1,
    level2: LevelInit2,
    level3: LevelInit3,
    level4: LevelInit4,
    level5: LevelInit5,
    end: EndScreenInit,
  };

  // used to increment ID at the end of level name string
  const levelNameToNextLevel = {
    home: "level1",
    level1: "level2",
    level2: "level3",
    level3: "level4",
    level4: "level5",
    level5: "end",
  };

  /* This function switches to the given level.
   */
  const switchLevel = (levelName) => {
    World.clear(engine.current.world);
    loadBounds();
    console.log(levelNameToFunction, levelName);
    console.log(levelNameToFunction[levelName]);
    const levelShapeLimit = levelNameToFunction[levelName](
      engine.current.world
    );
    if (levelName != "home" && levelName != "end" && levelName != "about") {
      Player(false, engine, runner.current);
    }

    setLimit(levelShapeLimit);
    setCurrentLevel(levelName);

    console.log("set current level to " + levelName);
  };

  // Restarts the current level
  const restartLevel = () => {
    switchLevel(currentLevel);
  };

  /**
   * Loads the boundaries for the scene. If we're on the homescreen,
   * makes the bottommost boundary bouncy.
   */
  const loadBounds = () => {
    World.add(engine.current.world, [
      Bodies.rectangle(-15, 300, 30, 660, { isStatic: true }), // left
      Bodies.rectangle(815, 300, 30, 660, { isStatic: true }), // right
      Bodies.rectangle(400, -15, 800, 30, { isStatic: true }), // top
    ]);
    if (
      currentLevel === "home" ||
      currentLevel === "about" ||
      currentLevel === "end"
    ) {
      World.add(
        engine.current.world,
        Bodies.rectangle(400, 615, 800, 30, {
          name: "spike",
          restitution: 1,
          isStatic: true,
        })
      ); // bottom
    } else {
      World.add(
        engine.current.world,
        Bodies.rectangle(400, 615, 800, 30, { name: "spike", isStatic: true })
      ); // bottom
    }
  };

  // This region handles spawning shapes on click
  const spawnshapeoptions = {
    mass: 10,
    restitution: 0,
  };

  const handleAddShape = (mouseDownEvent) => {
    if (mouseDownEvent.nativeEvent.offsetY < 115) {
      return;
    }
    if (shape == "circle") {
      if (shapelimit.circle <= 0) {
        return;
      }
      setLimit({
        ...shapelimit,
        circle: shapelimit.circle - 1,
      });
      const rectangle = Bodies.circle(
        mouseDownEvent.nativeEvent.offsetX,
        mouseDownEvent.nativeEvent.offsetY,
        22,
        {
          render: {
            fillStyle: "#FFC85E",
          },
          ...spawnshapeoptions,
        }
      );
      World.add(engine.current.world, [rectangle]);
    } else if (shape == "square") {
      if (shapelimit.square <= 0) {
        return;
      }
      setLimit({
        ...shapelimit,
        square: shapelimit.square - 1,
      });
      const rectangle = Bodies.rectangle(
        mouseDownEvent.nativeEvent.offsetX,
        mouseDownEvent.nativeEvent.offsetY,
        55,
        55,
        {
          render: {
            fillStyle: "#5ECFFF",
          },
          ...spawnshapeoptions,
        }
      );
      World.add(engine.current.world, [rectangle]);
    } else if (shape == "bridge") {
      if (shapelimit.bridge <= 0) {
        return;
      }
      setLimit({
        ...shapelimit,
        bridge: shapelimit.bridge - 1,
      });
      const rectangle = Bodies.rectangle(
        mouseDownEvent.nativeEvent.offsetX,
        mouseDownEvent.nativeEvent.offsetY,
        193,
        19,
        {
          render: {
            fillStyle: "#F57DFF",
          },
          ...spawnshapeoptions,
        }
      );
      World.add(engine.current.world, [rectangle]);
    } else if (shape == "triangle") {
      if (shapelimit.triangle <= 0) {
        return;
      }
      setLimit({
        ...shapelimit,
        triangle: shapelimit.triangle - 1,
      });
      const rectangle = Bodies.polygon(
        mouseDownEvent.nativeEvent.offsetX,
        mouseDownEvent.nativeEvent.offsetY,
        3,
        25,
        {
          render: {
            fillStyle: "#5E94FF",
          },
          ...spawnshapeoptions,
        }
      );
      World.add(engine.current.world, [rectangle]);
    }
  };

  // Collision Handling
  Events.on(engine.current, "collisionStart", (event) => {
    const pairs = event.pairs;

    for (const pair of pairs) {
      const bodyA = pair.bodyA;
      const bodyB = pair.bodyB;

      if (
        (bodyA.name === "player" && bodyB.name === "spike") ||
        (bodyA.name === "spike" && bodyB.name == "player")
      ) {
        restartLevel();
      }
      if (
        (bodyA.name === "player" && bodyB.name === "goal") ||
        (bodyA.name === "goal" && bodyB.name === "player")
      ) {
        const nextLevel = levelNameToNextLevel[currentLevel];
        switchLevel(nextLevel);
      }
    }
  });

  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        width: "100vw",
        height: "100vh",
      }}
    >
      <div
        onMouseDown={handleAddShape}
        ref={scene}
        style={{ width: "800px", height: "600px", backgroundColor: "white" }}
      >
        {currentLevel == "home" && <TitleScreen switchLevel={switchLevel} />}

        <Interface
          shape={shape}
          setShape={setShape}
          shapelimit={shapelimit}
          restartLevel={restartLevel}
        />
      </div>
    </div>
  );
}

export default App;
