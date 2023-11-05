import "./App.css";

import { useState } from "react";
import { Bodies, Engine, Render, World, Runner } from "matter-js";
import { Interface } from "./components/interface";
import { useEffect, useRef } from "react";
import Interface from "./components/interface";
import Player from "./components/Player";

function App() {
  const scene = useRef();
  const engine = useRef(Engine.create());
  const [shape, setShape] = useState();
  engine.current.gravity.scale = 0.00005;

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

    loadBounds();

    Engine.run(engine.current);
    Render.run(render);
    const runner = Runner.create();

    Runner.run(runner, engine.current);
    Player(false, engine, runner);

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

  const loadBounds = () => {
    World.add(engine.current.world, [
      Bodies.rectangle(-15, 300, 30, 660, { isStatic: true }), // left
      Bodies.rectangle(815, 300, 30, 660, { isStatic: true }), // right
      Bodies.rectangle(400, -15, 800, 30, { isStatic: true }), // top // Yellow
      Bodies.rectangle(400, 615, 800, 30, { isStatic: true }), // bottom // Red
    ]);
  };

  const handleAddRectangle = (mouseDownEvent) => {
    console.log(
      mouseDownEvent.nativeEvent.offsetX,
      mouseDownEvent.nativeEvent.offsetY
    );
    const rectangle = Bodies.rectangle(
      mouseDownEvent.nativeEvent.offsetX,
      mouseDownEvent.nativeEvent.offsetY,
      50,
      50,
      {
        mass: 10,
        restitution: 0,
        friction: 0,
        render: {
          fillStyle: "#FF0000",
        },
      }
    );
    World.add(engine.current.world, [rectangle]);
  };

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
        onMouseDown={handleAddRectangle}
        ref={scene}
        style={{ width: "800px", height: "600px", backgroundColor: "black" }}
      >
        <Interface shape={shape} setShape={setShape} />
      </div>
    </div>
  );
}

export default App;
