import React from "react";
import Matter, { Bodies, Composite, Engine, Render, Runner } from "matter-js";
import { useEffect, useRef } from "react";
import { Button } from "./Button";

const GameField: React.FC = () => {
  const engine = useRef(Matter.Engine.create());
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const cw = 800;
    const ch = 600;
    if (canvasRef.current === null) return;
    const render = Render.create({
      canvas: canvasRef.current,
      engine: engine.current,
      options: {
        width: cw,
        height: ch,
        wireframes: false,
        background: "transparent",
      },
    });

    Composite.add(engine.current.world, [
      Bodies.rectangle(cw / 2, -10, cw, 20, { isStatic: true }),
      Bodies.rectangle(-10, ch / 2, 20, ch, { isStatic: true }),
      Bodies.rectangle(cw / 2, ch + 10, cw, 20, { isStatic: true }),
      Bodies.rectangle(cw + 10, ch / 2, 20, ch, { isStatic: true }),
    ]);

    Runner.run(engine.current);
    Render.run(render);

    return () => {
      Render.stop(render);
      Engine.clear(engine.current);
      render.canvas.remove();
    };
  }, []);

  const handleAddCircle = () => {
    const ball = Bodies.circle(400, 200, 30, {
      mass: 10,
    });
    Composite.add(engine.current.world, ball);
  };

  return (
    <>
      <canvas width={800} height={600} ref={canvasRef}></canvas>
      <Button onClick={handleAddCircle}>Add</Button>
    </>
  );
};

export { GameField };
