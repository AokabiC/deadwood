import Matter from "matter-js";
import { useEffect, useRef } from "react";

const GameField: React.FC = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const engine = Matter.Engine.create();
  const runner = Matter.Runner.create();
  const boxA = Matter.Bodies.rectangle(400, 200, 80, 80);

  useEffect(() => {
    const render = Matter.Render.create({
      canvas: canvasRef.current ?? undefined,
      engine,
    });
    Matter.Composite.add(engine.world, boxA);
    Matter.Render.run(render);
    Matter.Runner.run(runner, engine);
  });

  return <canvas ref={canvasRef}></canvas>;
};

export { GameField };
