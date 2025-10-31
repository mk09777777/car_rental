import { Canvas } from "@react-three/fiber";
import { OrbitControls, useGLTF, Environment } from "@react-three/drei";
import { Suspense, useRef, useState } from "react";

export default function Home1() {
    const controlsRef = useRef();
    const handleControlsChange = () => {};
    function CarModel() {
      const { scene } = useGLTF("/homecar/scene.gltf");
      scene.traverse((child) => {
        if (child.isMesh) {
          child.castShadow = true;
          child.receiveShadow = true;
        }
      });
      return <primitive object={scene} scale={90} position={[-2, -1, 1]} />;
    }
  return (
    <div className="w-full flex flex-col items-center bg-gray-200 from-blue-400 via-purple-500 to-cyan-400">
        <div className="text-center mt-20">
          <h1 className="text-5xl font-bold text-[#414141]">Luxury Cars on Rent</h1>
      
        </div>
        <div className="w-full h-96 flex">
          <Canvas 
                camera={{ position: [0, 0, 4], fov: 45 }}
                shadows
                gl={{ antialias: true, alpha: true }}
              >
            <fog attach="fog" args={['#1a1a1a', 5, 15]} />
            <ambientLight intensity={0.2} color="#404040" />
            <directionalLight 
              position={[5, 10, 5]} 
              intensity={1.2} 
              castShadow 
              shadow-mapSize={[2048, 2048]}
              shadow-camera-far={50}
              shadow-camera-left={-10}
              shadow-camera-right={10}
              shadow-camera-top={10}
              shadow-camera-bottom={-10}
            />
            <spotLight 
              position={[-5, 8, 3]} 
              intensity={0.8} 
              angle={0.3} 
              penumbra={0.5} 
              castShadow
              color="#ffffff"
            />
            <spotLight 
              position={[8, 6, -2]} 
              intensity={0.6} 
              angle={0.4} 
              penumbra={0.7} 
              color="#b3b3ff"
            />
            <Suspense fallback={null}>
              <CarModel />
              <Environment preset="warehouse" background={false} />
              
            </Suspense>
              <OrbitControls
                ref={controlsRef}
                enablePan={false}
                enableZoom={true}
                autoRotate={true}
                target={[-2, -1, 1]}
                onChange={handleControlsChange}
              />
            </Canvas>
          <div className="mr-2  flex flex-col justify-center text-sm text-gray-600">
          
            <p className="text-sm font-bold"> ↻  Drag to rotate 360°</p>
            <p className="text-sm font-bold"> ± Pinch to zoom</p>
          </div>
        </div>
    </div>
  );
}