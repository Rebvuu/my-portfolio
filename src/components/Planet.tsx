"use client";

import Script from "next/script";

export default function PlanetScene() {
  return (
    <>
      <script
        type="module"
        src="https://cdn.spline.design/@splinetool/viewer@2.0.52/build/spline-viewer.js"
      ></script>
      <spline-viewer url="https://prod.spline.design/aX9SVXj1kF6jrxjm/scene.splinecode"></spline-viewer>
    </>
  );
}