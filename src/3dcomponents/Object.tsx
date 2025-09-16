import { useFrame } from "@react-three/fiber";
import { useRef } from "react";
import { RobotModel } from "./Mockup assembly";

export default function Object():JSX.Element{
          const objectRef = useRef<THREE.Group>(null); // Move ref above useFrame
        
          useFrame(() => {
            if (objectRef.current) {
              objectRef.current.rotation.z += 0.01;
            }
          });
    return (<>
        <RobotModel ref={objectRef} position={[0,  0, -7.5]} rotation={[Math.PI/2,Math.PI,Math.PI]} scale={[5,5,5]}/>
    </>)
}