import { useEffect, useRef } from "react";

export default function InteractiveCube() {
  const cubeRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      if (!cubeRef.current) return;

      const rect = cubeRef.current.getBoundingClientRect();

      // Find the center of the cube
      const cubeX = rect.left + rect.width / 2;
      const cubeY = rect.top + rect.height / 2;

      // Distance between cursor and cube center
      const deltaX = e.clientX - cubeX;
      const deltaY = e.clientY - cubeY;

      // Convert distance into an angle
      const rotateY = Math.atan2(deltaX, 500) * (180 / Math.PI);
      const rotateX = -Math.atan2(deltaY, 500) * (180 / Math.PI);

      cubeRef.current.style.transform = `
        rotateX(${rotateX}deg)
        rotateY(${rotateY}deg)
      `;
    };

    window.addEventListener("mousemove", handleMouseMove);

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
    };
  }, []);

  return (
    <div className="cube-container">
      <div ref={cubeRef} className="cube">
        <div className="cube-face cube-front"></div>
        <div className="cube-face cube-back"></div>
        <div className="cube-face cube-right"></div>
        <div className="cube-face cube-left"></div>
        <div className="cube-face cube-top"></div>
        <div className="cube-face cube-bottom"></div>
      </div>
    </div>
  );
}