import { Canvas } from "@react-three/fiber";
import { OrbitControls, useGLTF, Environment } from "@react-three/drei";
import { Suspense, useRef, useState, useEffect } from "react";
import { useCarContext } from "../context/CarContext.jsx";
import Navigation from "./Navigation";
import UserSign from "./usersign.jsx";

export default function Home1() {
    const controlsRef = useRef();
    const handleControlsChange = () => {};
    const { setSelectedCarColor } = useCarContext();
    const [loginOpen,setLoginOpen] = useState(false);
    const [sign,setSign]=useState(false);
    
    const cars = [{
        name: "BMW M3",
        model: "/homecar/scene.gltf",
        color: "#353B38",
        color2:"#545F59"
    }, {
        name: "Toyota Supra",
        model: "/homecar2/scene.gltf",
        color: "#D1030F",
        color2:"#FC3641"
    }, {
        name: "Porsche 911",
        model: "/homecar3/scene.gltf",
        color: "#0B295C",
        color2:"#1651B6"
    }, {
        name: "Jeep Wrangler",
        model: "/homecar4/scene.gltf",
        color: "#B3291D",
        color2:"#E35B4F"
    }];
    
    const [currentCarIndex, setCurrentCarIndex] = useState(0);
    const currentCar = cars[currentCarIndex];
    
    useEffect(() => {
        setSelectedCarColor(currentCar.color);
    }, [currentCarIndex, setSelectedCarColor, currentCar.color]);
    
    const nextCar = () => {
        setCurrentCarIndex((prev) => (prev + 1) % cars.length);
    };
    
    const prevCar = () => {
        setCurrentCarIndex((prev) => (prev - 1 + cars.length) % cars.length);
    };
    
    function CarModel({ modelPath }) {
        const { scene } = useGLTF(modelPath);
        scene.traverse((child) => {
            if (child.isMesh) {
                child.castShadow = true;
                child.receiveShadow = true;
            }
        });
        return <primitive object={scene} scale={65} position={[-2, -1.6, 1]} />;
    }

    const handleLoginOpen=(login)=>{
      setLoginOpen(login);
    }


    const handlesignin=(Sign)=>{
    setSign(Sign);
    }

  return (
    <div style={{background: `radial-gradient(circle, ${currentCar.color2}, ${currentCar.color})`}}>
         <Navigation handleLoginOpen={handleLoginOpen} sign={sign} isHomePage={true} />
      
      <div className="w-full h-screen flex flex-col justify-center items-center" >
             {loginOpen && <UserSign onClose={()=>setLoginOpen(false)} handlesignin={handlesignin} />}
         
    
        {/* <div className="text-center mt-20">
          <h1 className="text-5xl font-bold text-[#414141]">Luxury Cars on Rent</h1>
      
        </div> */}
        <div className="w-full h-screen mb-20 flex relative">
          
          <div className="absolute top-32 inset-0 flex  justify-center pointer-events-none">
            <h3 className="text-[8rem] font-bold text-white  select-none" style={{fontFamily: 'Fugaz One, cursive'}}>{currentCar.name}</h3>
          </div>
          <button onClick={prevCar} className="absolute left-4 top-1/2 transform -translate-y-1/2 z-10 bg-white/20 hover:bg-white/40 rounded-full p-2">
            <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 20 20">
              <path fillRule="evenodd" d="M12.707 5.293a1 1 0 010 1.414L9.414 10l3.293 3.293a1 1 0 01-1.414 1.414l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 0z" clipRule="evenodd" />
            </svg>
          </button>
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
              <CarModel modelPath={currentCar.model} />
              <mesh rotation={[-Math.PI / 2, 0, 0]} position={[-2, -1.7, 1]} receiveShadow>
                <circleGeometry args={[1.5, 100]} />
                <shadowMaterial opacity={0.1} transparent blur={80} />
              </mesh>
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
          <button onClick={nextCar} className="absolute right-4 top-1/2 transform -translate-y-1/2 z-10 bg-white/20 hover:bg-white/40 rounded-full p-2">
            <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 20 20">
              <path fillRule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clipRule="evenodd" />
            </svg>
          </button>
          
        </div>
        <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2">
          <button 
            onClick={() => window.scrollTo({ top: window.innerHeight, behavior: 'smooth' })}
            className="bg-white/20 hover:bg-white/40 rounded-full p-3 animate-bounce"
          >
            <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 20 20">
              <path fillRule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clipRule="evenodd" />
            </svg>
          </button>
        </div>
        {/* <div className="text-center mb-1">
          <h2 className="text-4xl font-bold bg-clip-text text-transparent" style={{backgroundImage: `linear-gradient(to bottom, ${currentCar.color}, white)`, WebkitBackgroundClip: 'text'}}>{currentCar.name}</h2>
        </div> */}
    </div>
    </div>
  );
}