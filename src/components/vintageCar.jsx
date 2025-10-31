import { Canvas } from "@react-three/fiber";
import { OrbitControls, useGLTF, Environment } from "@react-three/drei";
import { Suspense, useRef, useState } from "react";

function CarModel() {
  const { scene } = useGLTF("/vintageCar/scene.gltf");
  scene.traverse((child) => {
    if (child.isMesh) {
      child.castShadow = true;
      child.receiveShadow = true;
    }
  });
  return <primitive object={scene} scale={2.5} position={[-1, -2, -4]} />;
}

export default function VintageCar() {
  const controlsRef = useRef();
  const [showLogin, setShowLogin] = useState(false);
  const [isSignup, setIsSignup] = useState(false);
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');

  const handleLogin = () => {
    console.log('Login:', { username, password });
  };

  const handleSignup = () => {
    console.log('Signup:', { name, email, phone, username, password, confirmPassword });
  };

  const handleGoogleLogin = () => {
    console.log('Google Login');
  };

  const handleGoogleSignup = () => {
    console.log('Google Signup');
  };

  const handleControlsChange = () => {
    if (controlsRef.current) {
      const azimuthAngle = controlsRef.current.getAzimuthalAngle();
      setShowLogin(azimuthAngle <= -Math.PI/5);
    }
  };

  return (
    <div className="w-full h-screen relative">
      {/* Background Image */}
      <div 
        className="absolute inset-0 z-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: 'url(/background.png)' }}
      />
      {/* Car Canvas Overlay */}
      <div className="absolute inset-0 z-10">
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
            enableZoom={false}
            minAzimuthAngle={-Math.PI/5}
            maxAzimuthAngle={Math.PI/6}
            minPolarAngle={Math.PI/2}
            maxPolarAngle={Math.PI/2}
            onChange={handleControlsChange}
          />
        </Canvas>
      </div>
      
      {/* GoMiles Heading */}
      <div className="absolute top-8 left-16 z-30">
        <h1 className="text-6xl font-bold text-white cursor-pointer hover:scale-110 transition-transform duration-300 bg-gradient-to-r from-blue-400 via-purple-500 to-cyan-400 bg-clip-text text-transparent ">
          GoMiles
        </h1>
      </div>
      
      {/* Animated Arc with Text */}
      <div className="absolute top-0 left-1/2 transform -translate-x-1/2 z-20">
        <div className="relative">
          <svg width="700" height="200" viewBox="0 0 700 200" className="animate-pulse">
            <defs>
              <linearGradient id="arcGradient" x1="0%" y1="0%" x2="100%" y2="0%">
                <stop offset="0%" stopColor="#3b83f6" stopOpacity="0.8" />
                <stop offset="50%" stopColor="#8b5cf6" stopOpacity="1" />
                <stop offset="100%" stopColor="#06b6d4" stopOpacity="0.8" />
              </linearGradient>
            </defs>
            <path 
              d="M 10 180 Q 350 5 690 180" 
              stroke="url(#arcGradient)" 
              strokeWidth="5" 
              fill="none"
              className="animate-[draw_2s_ease-in-out_infinite]"
            />
          </svg>
          <div className="absolute top-16 left-1/3 transform -translate-x-1/2 text-white text-lg font-semibold animate-bounce">
            Swipe to Login/Signup →
          </div>
        </div>
      </div>
      {showLogin && (
        <div className="absolute top-40 left-1/2 transform -translate-x-1/2 z-20">
          <div className="backdrop-blur-lg bg-black bg-opacity-30 px-6 py-4 rounded-lg border border-gray-300 w-96">
            <h1 className="text-lg font-medium text-white mb-4 text-center">{isSignup ? 'Sign Up' : 'Login'}</h1>
            <div className="space-y-3">
              {isSignup && (
                <div className="grid grid-cols-2 gap-3">
                  <div>
                    <h3 className="text-white text-sm mb-1">Name</h3>
                    <input value={name} onChange={(e) => setName(e.target.value)} className="w-full p-2 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500" placeholder="Full Name" />
                  </div>
                   <div>
                <h3 className="text-white text-sm mb-1">Username</h3>
                <input value={username} onChange={(e) => setUsername(e.target.value)} className="w-full p-2 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500" placeholder="Username" />
              </div>
                
                </div>
              )}
              {isSignup && (
                <div>
                  <h3 className="text-white text-sm mb-1">Phone</h3>
                  <input value={phone} onChange={(e) => setPhone(e.target.value)} className="w-full p-2 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500" placeholder="Phone Number" />
                </div>
              )}
               <div>
                    <h3 className="text-white text-sm mb-1">Email</h3>
                    <input value={email} onChange={(e) => setEmail(e.target.value)} className="w-full p-2 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500" placeholder="Email" type="email" />
                  </div>
              {isSignup ? (
                <div className="grid grid-cols-2 gap-3">
                  <div>
                    <h3 className="text-white text-sm mb-1">Password</h3>
                    <input value={password} onChange={(e) => setPassword(e.target.value)} className="w-full p-2 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500" placeholder="Password" type="password" />
                  </div>
                  <div>
                    <h3 className="text-white text-sm mb-1">Confirm Password</h3>
                    <input value={confirmPassword} onChange={(e) => setConfirmPassword(e.target.value)} className="w-full p-2 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500" placeholder="Confirm Password" type="password" />
                  </div>
                </div>
              ) : (
                <div>
                  <h3 className="text-white text-sm mb-1">Password</h3>
                  <input value={password} onChange={(e) => setPassword(e.target.value)} className="w-full p-2 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500" placeholder="Password" type="password" />
                </div>
              )}
              {!isSignup && (
                <div>
                  <a href="#" className="text-sm text-blue-400 hover:underline">Forgot Password?</a>
                </div>
              )}
              <div>
                <button onClick={isSignup ? handleSignup : handleLogin} className="w-full bg-blue-500 text-white py-2 rounded-md hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500 mb-2">{isSignup ? 'Sign Up' : 'Login'}</button>
                <button onClick={isSignup ? handleGoogleSignup : handleGoogleLogin} className="w-full bg-red-500 text-white py-2 rounded-md hover:bg-red-600 focus:outline-none focus:ring-2 focus:ring-red-500 flex items-center justify-center gap-2">
                  <span>🔍</span> {isSignup ? 'Sign Up with Google' : 'Login with Google'}
                </button>
              </div>
              <div className="text-center">
                <button onClick={() => setIsSignup(!isSignup)} className="text-sm text-blue-400 hover:underline">
                  {isSignup ? 'Already have an account? Login' : 'New user? Register'}
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
