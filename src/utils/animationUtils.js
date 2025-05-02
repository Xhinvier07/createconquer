import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import AOS from 'aos';
import 'aos/dist/aos.css';
import * as THREE from 'three';

// Register GSAP plugins
gsap.registerPlugin(ScrollTrigger);

// Initialize AOS
export const initAOS = () => {
  AOS.init({
    duration: 800,
    easing: 'ease-out',
    once: true,
    offset: 50,
  });
};

// GSAP animation for hero sections
export const animateHero = (element) => {
  const tl = gsap.timeline();
  
  tl.from(element.querySelector('.hero-content h1'), {
    y: 50,
    opacity: 0,
    duration: 0.8,
    ease: 'power3.out'
  })
  .from(element.querySelector('.hero-content p'), {
    y: 30,
    opacity: 0,
    duration: 0.6,
    ease: 'power3.out'
  }, '-=0.4')
  .from(element.querySelector('.hero-cta'), {
    y: 20,
    opacity: 0,
    duration: 0.6,
    ease: 'power3.out'
  }, '-=0.3');
};

// Create animated background with Three.js
export const createParticleBackground = (containerElement) => {
  // Create scene
  const scene = new THREE.Scene();
  
  // Create camera
  const camera = new THREE.PerspectiveCamera(
    75,
    containerElement.clientWidth / containerElement.clientHeight,
    0.1,
    1000
  );
  camera.position.z = 5;
  
  // Create renderer
  const renderer = new THREE.WebGLRenderer({ 
    alpha: true,
    antialias: true 
  });
  renderer.setSize(containerElement.clientWidth, containerElement.clientHeight);
  containerElement.appendChild(renderer.domElement);
  
  // Create particles
  const particlesGeometry = new THREE.BufferGeometry();
  const particlesCount = 1000;
  
  const posArray = new Float32Array(particlesCount * 3);
  
  for (let i = 0; i < particlesCount * 3; i++) {
    posArray[i] = (Math.random() - 0.5) * 10;
  }
  
  particlesGeometry.setAttribute('position', new THREE.BufferAttribute(posArray, 3));
  
  // Create material
  const particlesMaterial = new THREE.PointsMaterial({
    size: 0.02,
    color: '#2196F3',
    transparent: true,
    opacity: 0.8
  });
  
  // Create mesh
  const particlesMesh = new THREE.Points(particlesGeometry, particlesMaterial);
  scene.add(particlesMesh);
  
  // Animation loop
  const animate = () => {
    requestAnimationFrame(animate);
    particlesMesh.rotation.x += 0.0005;
    particlesMesh.rotation.y += 0.0005;
    renderer.render(scene, camera);
  };
  
  animate();
  
  // Resize handler
  window.addEventListener('resize', () => {
    camera.aspect = containerElement.clientWidth / containerElement.clientHeight;
    camera.updateProjectionMatrix();
    renderer.setSize(containerElement.clientWidth, containerElement.clientHeight);
  });
  
  return {
    destroy: () => {
      window.removeEventListener('resize', () => {});
      containerElement.removeChild(renderer.domElement);
      particlesGeometry.dispose();
      particlesMaterial.dispose();
      scene.dispose();
    }
  };
};

// GSAP staggered animation for grid items
export const animateGrid = (container, items, staggerAmount = 0.1) => {
  gsap.from(items, {
    scrollTrigger: {
      trigger: container,
      start: "top 80%",
    },
    y: 30,
    opacity: 0,
    duration: 0.8,
    stagger: staggerAmount,
    ease: "power3.out"
  });
};

// GSAP text reveal animation
export const animateText = (element, delay = 0) => {
  gsap.from(element, {
    scrollTrigger: {
      trigger: element,
      start: "top 90%",
    },
    y: 20,
    opacity: 0,
    duration: 0.8,
    delay: delay,
    ease: "power3.out"
  });
}; 