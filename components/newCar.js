import * as THREE from 'three'
import { useMemo, useRef } from 'react'
import { Canvas, applyProps, useFrame } from '@react-three/fiber'
import {
    Environment,
    Lightformer,
    Float,
    useGLTF,
    BakeShadows,
    ContactShadows,
    OrbitControls,
    useTexture, Decal, PerspectiveCamera
} from '@react-three/drei'
import { LayerMaterial, Color, Depth } from 'lamina'
import {MeshPhongMaterial} from "three";

export default function Car () {
    return (
        <Canvas shadows dpr={[1, 2]} camera={{ position: [-10, 0, 15], fov: 30 }}>
            <Porshe/>
        </Canvas>
    )
}

function Porshe(props) {
    const { nodes, materials } = useGLTF('/911-transformed.glb')
    return (
        <group {...props} dispose={null}>
            <PerspectiveCamera name="camera" fov={40} near={10} far={1000} position={[10, 0, 50]} />
            <pointLight intensity={10} position={[100, 50, 100]} rotation={[-Math.PI / 2, 0, 0]} />
            <group position={[10, -5, 0]}>
                {/*<mesh geometry={}*/}
                {/*<mesh geometry={nodes.robot.geometry} material={materials.metal} />*/}
                {/*<mesh geometry={nodes.rocket.geometry} material={materials.wood} />*/}
            </group>
        </group>
    )
}
