import { Environment, MeshPortalMaterial, OrbitControls, RoundedBox, useTexture } from "@react-three/drei";
import { AmbientLight } from "three";
import * as THREE from "three"
import { Mavi } from "./mavi";
import { Pembe } from './pembe';
import { useState } from "react";


export const Experience = () => {
const map = useTexture('../textures/texture.jpg')
const map2 = useTexture('../textures/texture2.jpg')
const [active, setActive] = useState(null)
const [hovered, setHovered] = useState(null)

const handleHover = () => {
  setHovered(null)
}

//  <RoundedBox args={[2,3,0.025]} position-x={1.5}>
  return (
    <>
    
      <OrbitControls
      minPolarAngle={Math.PI / 4} 
      maxPolarAngle={(3 * Math.PI) / 6} 
      minAzimuthAngle={-Math.PI / 4} 
      maxAzimuthAngle={Math.PI / 4}
      enableZoom={true} 
      target={[0,0,0]}
      
      />
      <ambientLight intensity={0.25}/>
      <Environment preset="sunset"/>
      <group>
      <RoundedBox args={hovered ? [2,3,1] : [2,3,0.025]}
       position-x={1.5}>
        <MeshPortalMaterial side={THREE.DoubleSide}>
          <ambientLight intensity={1}/>
          <Environment preset="sunset"/>
          <Mavi scale={0.45} position-y={-1} active={active} setActive={setActive}/>
          <mesh>
            <sphereGeometry args={[5, 64, 64]}/>
            <meshStandardMaterial map={map2} side={THREE.BackSide}/>
          </mesh> 
        </MeshPortalMaterial>
       
      </RoundedBox>

      <RoundedBox args={[2,3, 0.025]} position-x={-1.5}>
        <MeshPortalMaterial side={THREE.DoubleSide}>
          <ambientLight intensity={1}/>
          <Environment preset="sunset"/>
          <Pembe scale={0.45} position-y={-1} rotation-y={Math.PI / 64} active={active} setActive={setActive}/>
          <mesh>
            <sphereGeometry args={[5, 64, 64]}/>
            <meshStandardMaterial map={map} side={THREE.BackSide}/>
          </mesh> 
        </MeshPortalMaterial>
        
      </RoundedBox>

    </group>
    </>
  );
};
