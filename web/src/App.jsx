import "./App.css";

import { Bodies, Engine, Render, World } from "matter-js";
import { useEffect, useRef } from "react";

function App() {
  const scene = useRef();
  const engine = useRef(Engine.create());
  const cw = document.body.clientWidth;
  const ch = document.body.clientHeight;

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
      Bodies.rectangle(cw / 2, -10, cw, 20, { isStatic: true }),
      Bodies.rectangle(-10, ch / 2, 20, ch, { isStatic: true }),
      Bodies.rectangle(cw / 2, ch + 10, cw, 20, { isStatic: true }),
      Bodies.rectangle(cw + 10, ch / 2, 20, ch, { isStatic: true }),
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
          fillStyle: "#00000",
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
      <div ref={scene} style={{ width: "800px", height: "600px" }} />
    </div>
  );
}

export default App;
