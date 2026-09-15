import { useEffect, useRef } from "react";
import * as THREE from "three";

const PALETTE = ["#00ff41", "#00cc33", "#66ff99", "#e6ffe6", "#009929"];

export default function Hero3D() {
  const mountRef = useRef(null);

  useEffect(() => {
    const mount = mountRef.current;
    if (!mount) return;

    let renderer;
    try {
      renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true });
    } catch {
      return;
    }
    renderer.setPixelRatio(Math.min(window.devicePixelRatio || 1, 1.75));
    renderer.setSize(mount.clientWidth, mount.clientHeight);
    mount.appendChild(renderer.domElement);

    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(
      50,
      mount.clientWidth / Math.max(1, mount.clientHeight),
      0.1,
      100
    );
    camera.position.z = 8;

    scene.add(new THREE.AmbientLight(0xffffff, 0.4));
    const keyLight = new THREE.PointLight(0x00ff41, 80, 40);
    keyLight.position.set(4, 3, 4);
    scene.add(keyLight);
    const rimLight = new THREE.PointLight(0x00cc33, 50, 40);
    rimLight.position.set(-5, -2, 3);
    scene.add(rimLight);

    const group = new THREE.Group();
    scene.add(group);

    const wire = new THREE.Mesh(
      new THREE.IcosahedronGeometry(1.9, 1),
      new THREE.MeshBasicMaterial({
        color: 0x00ff41,
        wireframe: true,
        transparent: true,
        opacity: 0.4,
      })
    );
    group.add(wire);

    const core = new THREE.Mesh(
      new THREE.IcosahedronGeometry(0.85, 3),
      new THREE.MeshStandardMaterial({
        color: 0x031503,
        emissive: 0x00cc33,
        emissiveIntensity: 0.9,
        roughness: 0.35,
        metalness: 0.5,
      })
    );
    group.add(core);

    const ringMain = new THREE.Mesh(
      new THREE.TorusGeometry(2.9, 0.018, 8, 140),
      new THREE.MeshBasicMaterial({
        color: 0x00ff41,
        transparent: true,
        opacity: 0.5,
      })
    );
    ringMain.rotation.x = Math.PI / 2.4;
    group.add(ringMain);

    const ringDim = new THREE.Mesh(
      new THREE.TorusGeometry(3.4, 0.012, 8, 140),
      new THREE.MeshBasicMaterial({
        color: 0x009929,
        transparent: true,
        opacity: 0.35,
      })
    );
    ringDim.rotation.x = Math.PI / 1.8;
    ringDim.rotation.y = 0.4;
    group.add(ringDim);

    // Particle field (kept light on purpose)
    const COUNT = 600;
    const positions = new Float32Array(COUNT * 3);
    const colors = new Float32Array(COUNT * 3);
    const color = new THREE.Color();
    for (let i = 0; i < COUNT; i++) {
      const radius = 3 + Math.random() * 4.5;
      const theta = Math.random() * Math.PI * 2;
      const phi = Math.acos(2 * Math.random() - 1);
      positions[i * 3] = radius * Math.sin(phi) * Math.cos(theta);
      positions[i * 3 + 1] = radius * Math.sin(phi) * Math.sin(theta) * 0.7;
      positions[i * 3 + 2] = radius * Math.cos(phi) * 0.6 - 1;
      color.set(PALETTE[Math.floor(Math.random() * PALETTE.length)]);
      colors[i * 3] = color.r;
      colors[i * 3 + 1] = color.g;
      colors[i * 3 + 2] = color.b;
    }
    const particleGeo = new THREE.BufferGeometry();
    particleGeo.setAttribute(
      "position",
      new THREE.BufferAttribute(positions, 3)
    );
    particleGeo.setAttribute("color", new THREE.BufferAttribute(colors, 3));
    const particles = new THREE.Points(
      particleGeo,
      new THREE.PointsMaterial({
        size: 0.05,
        vertexColors: true,
        transparent: true,
        opacity: 0.9,
        blending: THREE.AdditiveBlending,
        depthWrite: false,
      })
    );
    scene.add(particles);

    const layout = () => {
      const w = mount.clientWidth;
      group.position.x = w >= 1024 ? 2.6 : 0;
      group.position.y = w >= 1024 ? 0 : 0.4;
    };
    layout();

    let targetX = 0;
    let targetY = 0;
    let currentX = 0;
    let currentY = 0;
    const onMouseMove = (e) => {
      targetX = (e.clientX / window.innerWidth - 0.5) * 2;
      targetY = (e.clientY / window.innerHeight - 0.5) * 2;
    };
    window.addEventListener("mousemove", onMouseMove, { passive: true });

    const onResize = () => {
      const w = mount.clientWidth;
      const h = Math.max(1, mount.clientHeight);
      camera.aspect = w / h;
      camera.updateProjectionMatrix();
      renderer.setSize(w, h);
      layout();
    };
    window.addEventListener("resize", onResize);

    const hero = mount.closest("section");
    const clock = new THREE.Clock();
    let rafId;
    const animate = () => {
      rafId = requestAnimationFrame(animate);
      const t = clock.getElapsedTime();
      currentX += (targetX - currentX) * 0.045;
      currentY += (targetY - currentY) * 0.045;

      group.rotation.y = t * 0.12 + currentX * 0.55;
      group.rotation.x = currentY * 0.35 + Math.sin(t * 0.2) * 0.08;
      wire.rotation.z = t * 0.05;
      ringMain.rotation.z = t * 0.07;
      ringDim.rotation.z = -t * 0.05;
      core.position.y = Math.sin(t * 0.8) * 0.09;
      core.rotation.y = -t * 0.2;

      particles.rotation.y = t * 0.02 + currentX * 0.08;
      particles.rotation.x = currentY * 0.05;

      if (hero) {
        const rect = hero.getBoundingClientRect();
        const fade = Math.min(
          1,
          Math.max(0, 1 - -rect.top / (rect.height * 0.7))
        );
        mount.style.opacity = String(fade);
      }

      renderer.render(scene, camera);
    };
    animate();

    return () => {
      cancelAnimationFrame(rafId);
      window.removeEventListener("mousemove", onMouseMove);
      window.removeEventListener("resize", onResize);
      scene.traverse((obj) => {
        if (obj.geometry) obj.geometry.dispose();
        if (obj.material) {
          const materials = Array.isArray(obj.material)
            ? obj.material
            : [obj.material];
          materials.forEach((m) => m.dispose());
        }
      });
      renderer.dispose();
      if (renderer.domElement.parentNode === mount) {
        mount.removeChild(renderer.domElement);
      }
    };
  }, []);

  return <div ref={mountRef} className="absolute inset-0" aria-hidden="true" />;
}
