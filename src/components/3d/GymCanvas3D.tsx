import React, { useEffect, useRef } from 'react';
import * as THREE from 'three';

interface GymCanvas3DProps {
  className?: string;
}

export const GymCanvas3D: React.FC<GymCanvas3DProps> = ({ className = '' }) => {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    // Scene, Camera, Renderer
    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(
      45,
      container.clientWidth / container.clientHeight,
      0.1,
      1000
    );
    camera.position.z = 6;

    const renderer = new THREE.WebGLRenderer({ alpha: true, antialias: true });
    renderer.setSize(container.clientWidth, container.clientHeight);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    container.appendChild(renderer.domElement);

    // Group for objects
    const mainGroup = new THREE.Group();
    scene.add(mainGroup);

    // Outer Metallic Dumbbell/Plate Ring
    const torusGeometry = new THREE.TorusGeometry(1.8, 0.12, 16, 100);
    const metallicMaterial = new THREE.MeshStandardMaterial({
      color: 0x111111,
      metalness: 0.9,
      roughness: 0.2,
      wireframe: false,
    });
    const torusMesh = new THREE.Mesh(torusGeometry, metallicMaterial);
    mainGroup.add(torusMesh);

    // Inner Glowing Electric Lime Accent Ring
    const innerTorusGeometry = new THREE.TorusGeometry(1.4, 0.04, 16, 80);
    const limeMaterial = new THREE.MeshBasicMaterial({
      color: 0xa3ff12,
      wireframe: true,
    });
    const innerTorusMesh = new THREE.Mesh(innerTorusGeometry, limeMaterial);
    mainGroup.add(innerTorusMesh);

    // Floating Particles
    const particlesCount = 250;
    const particleGeometry = new THREE.BufferGeometry();
    const positions = new Float32Array(particlesCount * 3);
    const colors = new Float32Array(particlesCount * 3);

    const colorLime = new THREE.Color(0xa3ff12);
    const colorWhite = new THREE.Color(0xffffff);

    for (let i = 0; i < particlesCount * 3; i += 3) {
      positions[i] = (Math.random() - 0.5) * 12;
      positions[i + 1] = (Math.random() - 0.5) * 12;
      positions[i + 2] = (Math.random() - 0.5) * 12;

      const mixedColor = Math.random() > 0.4 ? colorLime : colorWhite;
      colors[i] = mixedColor.r;
      colors[i + 1] = mixedColor.g;
      colors[i + 2] = mixedColor.b;
    }

    particleGeometry.setAttribute(
      'position',
      new THREE.BufferAttribute(positions, 3)
    );
    particleGeometry.setAttribute(
      'color',
      new THREE.BufferAttribute(colors, 3)
    );

    const particleMaterial = new THREE.PointsMaterial({
      size: 0.04,
      vertexColors: true,
      transparent: true,
      opacity: 0.8,
    });

    const particleSystem = new THREE.Points(particleGeometry, particleMaterial);
    scene.add(particleSystem);

    // Lights
    const ambientLight = new THREE.AmbientLight(0xffffff, 0.6);
    scene.add(ambientLight);

    const pointLight = new THREE.PointLight(0xa3ff12, 3, 10);
    pointLight.position.set(3, 3, 3);
    scene.add(pointLight);

    const blueSpotLight = new THREE.PointLight(0xffffff, 2, 10);
    blueSpotLight.position.set(-3, -3, 2);
    scene.add(blueSpotLight);

    // Mouse Parallax Interaction
    let targetX = 0;
    let targetY = 0;
    let mouseX = 0;
    let mouseY = 0;

    const handleMouseMove = (event: MouseEvent) => {
      const { clientX, clientY } = event;
      const windowWidth = window.innerWidth;
      const windowHeight = window.innerHeight;
      mouseX = (clientX / windowWidth - 0.5) * 2;
      mouseY = (clientY / windowHeight - 0.5) * 2;
    };

    window.addEventListener('mousemove', handleMouseMove);

    // Resize Handler
    const handleResize = () => {
      if (!container) return;
      camera.aspect = container.clientWidth / container.clientHeight;
      camera.updateProjectionMatrix();
      renderer.setSize(container.clientWidth, container.clientHeight);
    };

    window.addEventListener('resize', handleResize);

    // Animation Loop
    let animationFrameId: number;
    const clock = new THREE.Clock();

    const animate = () => {
      animationFrameId = requestAnimationFrame(animate);
      const elapsedTime = clock.getElapsedTime();

      // Gentle rotation
      mainGroup.rotation.x = elapsedTime * 0.25;
      mainGroup.rotation.y = elapsedTime * 0.35;

      particleSystem.rotation.y = elapsedTime * 0.05;

      // Smooth Mouse Interpolation
      targetX += (mouseX - targetX) * 0.05;
      targetY += (mouseY - targetY) * 0.05;

      mainGroup.position.x = targetX * 0.8;
      mainGroup.position.y = -targetY * 0.8;

      renderer.render(scene, camera);
    };

    animate();

    // Cleanup
    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('resize', handleResize);
      cancelAnimationFrame(animationFrameId);
      if (container && renderer.domElement) {
        container.removeChild(renderer.domElement);
      }
      torusGeometry.dispose();
      innerTorusGeometry.dispose();
      metallicMaterial.dispose();
      limeMaterial.dispose();
      particleGeometry.dispose();
      particleMaterial.dispose();
      renderer.dispose();
    };
  }, []);

  return (
    <div
      ref={containerRef}
      className={`w-full h-full pointer-events-none relative ${className}`}
      aria-hidden="true"
    />
  );
};
