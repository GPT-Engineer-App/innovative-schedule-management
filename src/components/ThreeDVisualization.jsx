import React, { useEffect, useRef } from 'react';
import * as THREE from 'three';

const ThreeDVisualization = () => {
  const mountRef = useRef(null);

  useEffect(() => {
    const mount = mountRef.current;

    // Scene
    const scene = new THREE.Scene();

    // Camera
    const camera = new THREE.PerspectiveCamera(75, mount.clientWidth / mount.clientHeight, 0.1, 1000);
    camera.position.z = 5;

    // Renderer
    const renderer = new THREE.WebGLRenderer();
    renderer.setSize(mount.clientWidth, mount.clientHeight);
    mount.appendChild(renderer.domElement);

    // Building (replacing the cube)
    const geometry = new THREE.BoxGeometry(1, 3, 1);
    const material = new THREE.MeshBasicMaterial({ color: 0xff0000 });
    const building = new THREE.Mesh(geometry, material);
    scene.add(building);

    // Animation
    const animate = () => {
      requestAnimationFrame(animate);
      building.rotation.y += 0.01; // Rotate the building
      renderer.render(scene, camera);
    };
    animate();

    // Cleanup
    return () => {
      mount.removeChild(renderer.domElement);
    };
  }, []);

  return <div ref={mountRef} style={{ width: '100%', height: '500px' }} />;
};

export default ThreeDVisualization;