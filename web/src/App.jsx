import "./App.css";

import { Bodies, Engine, Render, World } from "matter-js";
import { useEffect, useRef } from "react";

function App() {
  const scene = useRef();
  const engine = useRef(Engine.create());

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
    const rectangle = Bodies.rectangle(
      mouseDownEvent.clientX,
      mouseDownEvent.clientY,
      50,
      50,
      {
        mass: 10,
        restitution: 1,
        friction: 0.005,
        render: {
          fillStyle: "#FF0000",
        },
      }
    );
    World.add(engine.current.world, [rectangle]);
  };

  return (
    <div
      onMouseDown={handleAddRectangle}
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        width: "100vw",
        height: "100vh",
      }}
    >
      <div
        ref={scene}
        style={{ width: "800px", height: "600px", backgroundColor: "black" }}
      />
    </div>
  );
}

export default App;
