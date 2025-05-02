import React, { useEffect, useRef } from 'react';
import * as THREE from 'three';

const ParticleBackground = ({ 
  color = '#2196F3', 
  particleCount = 1500, 
  opacity = 0.5, 
  particleSize = 0.02,
  className = ''
}) => {
  const containerRef = useRef(null);
  const mountRef = useRef({
    scene: null,
    camera: null,
    renderer: null,
    particlesGeometry: null,
    particlesMaterial: null,
    particlesMesh: null,
    handleResize: null,
    handleMouseMove: null,
    animationFrameId: null
  });
  
  useEffect(() => {
    if (!containerRef.current) return;
    
    // Create scene
    const scene = new THREE.Scene();
    
    // Create camera
    const camera = new THREE.PerspectiveCamera(
      75,
      containerRef.current.clientWidth / containerRef.current.clientHeight,
      0.1,
      1000
    );
    camera.position.z = 5;
    
    // Create renderer
    const renderer = new THREE.WebGLRenderer({ 
      alpha: true,
      antialias: true 
    });
    renderer.setSize(containerRef.current.clientWidth, containerRef.current.clientHeight);
    
    containerRef.current.appendChild(renderer.domElement);
    
    // Create particles
    const particlesGeometry = new THREE.BufferGeometry();
    
    const posArray = new Float32Array(particleCount * 3);
    
    for (let i = 0; i < particleCount * 3; i++) {
      posArray[i] = (Math.random() - 0.5) * 10;
    }
    
    particlesGeometry.setAttribute('position', new THREE.BufferAttribute(posArray, 3));
    
    // Create material
    const particlesMaterial = new THREE.PointsMaterial({
      size: particleSize,
      color: color,
      transparent: true,
      opacity: opacity,
      blending: THREE.AdditiveBlending
    });
    
    // Create mesh
    const particlesMesh = new THREE.Points(particlesGeometry, particlesMaterial);
    scene.add(particlesMesh);
    
    // Mouse movement effect
    let mouseX = 0;
    let mouseY = 0;
    
    const handleMouseMove = (event) => {
      mouseX = (event.clientX / window.innerWidth) * 2 - 1;
      mouseY = -(event.clientY / window.innerHeight) * 2 + 1;
    };
    
    document.addEventListener('mousemove', handleMouseMove);
    
    // Animation loop
    let animationFrameId;
    const animate = () => {
      animationFrameId = requestAnimationFrame(animate);
      
      // Rotate based on mouse position with damping
      particlesMesh.rotation.x += 0.0003;
      particlesMesh.rotation.y += 0.0005;
      
      // Add slight mouse follow effect
      particlesMesh.rotation.x += (mouseY * 0.0002 - particlesMesh.rotation.x) * 0.05;
      particlesMesh.rotation.y += (mouseX * 0.0002 - particlesMesh.rotation.y) * 0.05;
      
      renderer.render(scene, camera);
    };
    
    animate();
    
    // Handle resize
    const handleResize = () => {
      if (!containerRef.current) return;
      
      camera.aspect = containerRef.current.clientWidth / containerRef.current.clientHeight;
      camera.updateProjectionMatrix();
      renderer.setSize(containerRef.current.clientWidth, containerRef.current.clientHeight);
    };
    
    window.addEventListener('resize', handleResize);
    
    // Store references for cleanup
    mountRef.current = {
      scene,
      camera,
      renderer,
      particlesGeometry,
      particlesMaterial,
      particlesMesh,
      handleResize,
      handleMouseMove,
      animationFrameId
    };
    
    // Cleanup function
    return () => {
      // Remove event listeners
      window.removeEventListener('resize', handleResize);
      document.removeEventListener('mousemove', handleMouseMove);
      
      // Cancel animation frame
      if (animationFrameId) {
        cancelAnimationFrame(animationFrameId);
      }
      
      // Remove element from DOM
      if (containerRef.current && renderer && renderer.domElement) {
        if (containerRef.current.contains(renderer.domElement)) {
          containerRef.current.removeChild(renderer.domElement);
        }
      }
      
      // Dispose Three.js objects - Scene does not have a dispose method
      if (particlesGeometry) {
        particlesGeometry.dispose();
      }
      
      if (particlesMaterial) {
        particlesMaterial.dispose();
      }
      
      if (scene && particlesMesh) {
        scene.remove(particlesMesh);
      }
      
      // Dispose renderer
      if (renderer) {
        renderer.dispose();
      }
    };
  }, [color, particleCount, opacity, particleSize]);
  
  return (
    <div ref={containerRef} className={`particle-background ${className}`} />
  );
};

export default ParticleBackground; 