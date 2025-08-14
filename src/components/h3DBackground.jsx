import { useEffect, useRef } from "react";
import * as THREE from "three";

import bee from "../assets/backgrounds/Bee.png";
import honeyDrop from "../assets/backgrounds/HoneyDrop.png";
import dust from "../assets/backgrounds/goldSplash.png";

const BeeBackground = () => {
  const mountRef = useRef(null);

  useEffect(() => {
    const currentMount = mountRef.current;

    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(
      60,
      window.innerWidth / window.innerHeight,
      1,
      1000
    );
    camera.position.z = 200;

    const renderer = new THREE.WebGLRenderer({ alpha: true });
    renderer.setSize(window.innerWidth, window.innerHeight);
    renderer.setPixelRatio(window.devicePixelRatio);
    currentMount.appendChild(renderer.domElement);

    const loader = new THREE.TextureLoader();
    const particleGroup = [];

    function createParticles(texture, count, speedRange) {
      const geometry = new THREE.BufferGeometry();
      const positions = [];
      const velocities = [];

      for (let i = 0; i < count; i++) {
        positions.push(
          (Math.random() - 0.5) * 400,
          (Math.random() - 0.5) * 400,
          (Math.random() - 0.5) * 400
        );
        velocities.push(
          (Math.random() - 0.5) * speedRange,
          -Math.random() * speedRange,
          0
        );
      }

      geometry.setAttribute(
        "position",
        new THREE.Float32BufferAttribute(positions, 3)
      );
      geometry.setAttribute(
        "velocity",
        new THREE.Float32BufferAttribute(velocities, 3)
      );

      const material = new THREE.PointsMaterial({
        size: 10,
        map: texture,
        transparent: true,
        depthWrite: false,
      });

      const points = new THREE.Points(geometry, material);
      scene.add(points);
      particleGroup.push(points);
    }

    Promise.all([
      loader.loadAsync(bee),
      loader.loadAsync(honeyDrop),
      loader.loadAsync(dust),
    ]).then(([bee, honey, dust]) => {
      createParticles(bee, 15, 0.3);
      createParticles(honey, 10, 0.2);
      createParticles(dust, 100, 0.1);

      animate();
    });

    const animate = () => {
      requestAnimationFrame(animate);
      particleGroup.forEach((p) => {
        const pos = p.geometry.attributes.position;
        const vel = p.geometry.attributes.velocity;

        for (let i = 0; i < pos.count; i++) {
          pos.array[i * 3 + 1] += vel.array[i * 3 + 1]; // Y axis
          if (pos.array[i * 3 + 1] < -200) {
            pos.array[i * 3 + 1] = 200;
          }
        }
        pos.needsUpdate = true;
      });

      renderer.render(scene, camera);
    };

    const handleResize = () => {
      renderer.setSize(window.innerWidth, window.innerHeight);
      camera.aspect = window.innerWidth / window.innerHeight;
      camera.updateProjectionMatrix();
    };
    window.addEventListener("resize", handleResize);

    return () => {
      currentMount.removeChild(renderer.domElement);
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <div
      ref={mountRef}
      style={{
        position: "fixed",
        top: 0,
        left: 0,
        width: "100vw",
        height: "100vh",
        zIndex: -1,
        overflow: "hidden",
        pointerEvents: "none",
      }}
    />
  );
};

export default BeeBackground;
