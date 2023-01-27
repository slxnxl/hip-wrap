import * as THREE from 'three'
import { useMemo, useRef } from 'react'
import { Canvas, applyProps, useFrame } from '@react-three/fiber'
import {Environment, Lightformer, Float, useGLTF, BakeShadows, ContactShadows, OrbitControls} from '@react-three/drei'
import { LayerMaterial, Color, Depth } from 'lamina'

// TODO можно настроить камеры как в исходном решении
export const CarThree = () => (
    <Canvas shadows dpr={[1, 2]} camera={{ position: [-10, 0, 15], fov: 30 }}>
        <Porsche scale={1.6} position={[0, -0.20, 0]} rotation={[0, Math.PI / 5, 0]} />
        <spotLight position={[0, 15, 0]} angle={0.3} penumbra={1} castShadow intensity={2} shadow-bias={-0.0001} />
        <ambientLight intensity={0.2} />
        <ContactShadows resolution={1024} frames={1} position={[0, -1.16, 0]} scale={10} blur={3} opacity={1} far={10} />

        {/* Renders contents "live" into a HDRI environment (scene.environment). */}
        <Environment frames={Infinity} resolution={256}>
            {/* Ceiling */}
            <Lightformer intensity={0.75} rotation-x={Math.PI / 2} position={[0, 5, -9]} scale={[10, 10, 1]} />
            <MovingSpots />
            {/* Sides */}
            <Lightformer intensity={4} rotation-y={Math.PI / 2} position={[-5, 1, -1]} scale={[20, 0.1, 1]} />
            <Lightformer rotation-y={Math.PI / 2} position={[-5, -1, -1]} scale={[20, 0.5, 1]} />
            <Lightformer rotation-y={-Math.PI / 2} position={[10, 1, 0]} scale={[20, 1, 1]} />
            {/* Accent (red) */}
            <Float speed={5} floatIntensity={2} rotationIntensity={2}>
                <Lightformer form="ring" color="red" intensity={1} scale={10} position={[-15, 4, -18]} target={[0, 0, 0]} />
            </Float>
            {/* Background */}
            <mesh scale={300}>
                <sphereGeometry args={[2, 64, 64]} />
                <LayerMaterial side={THREE.BackSide}>
                    <Color color="#444" alpha={1} mode="normal" />
                    <Depth colorA="blue" colorB="black" alpha={0.5} mode="normal" near={0} far={300} origin={[100, 100, 100]} />
                </LayerMaterial>
            </mesh>
        </Environment>

        <BakeShadows />
        {/*<CameraRig />*/}
        {/*https://codesandbox.io/s/qyz5r для совмещения вращения и свободного поворота мышкой*/}
        {/*https://codesandbox.io/s/ymb5d9 для размещения надписи на машине*/}
        <OrbitControls enablePan={false} enableZoom={true} minPolarAngle={Math.PI / 2.2} maxPolarAngle={Math.PI / 2.2} />
    </Canvas>
)

function Porsche(props) {
    const { scene, nodes, materials } = useGLTF('/911-transformed.glb')
    useMemo(() => {
        // TODO изучить подробнее возможности работы с моделькой
        Object.values(nodes).forEach((node) => node.isMesh && (node.receiveShadow = node.castShadow = true))
        //колеса
        applyProps(materials.rubber, { color: '#222', roughness: 0.6, roughnessMap: null, normalScale: [4, 4] })
        //окна
        applyProps(materials.window, { color: 'gray', roughness: 0, clearcoat: 0.1 })
        //кузов
        applyProps(materials.coat, {color: "green", envMapIntensity: 4, roughness: 0.5, metalness: 1 })
        //что-то тоже с кузовом
        applyProps(materials.paint, { roughness: 0.5, metalness: 0.8, color: 'red', envMapIntensity: 2 })
        // nodes.yellow_WhiteCar_0.material = new THREE.MeshPhysicalMaterial({
        //     roughness: 0.3,
        //     metalness: 0.05,
        //     color: '#00ff00',
        //     envMapIntensity: 0.75,
        //     clearcoatRoughness: 0,
        //     clearcoat: 1
        // })
    }, [nodes, materials])
    return <primitive object={scene} {...props} />
}

function CameraRig({ v = new THREE.Vector3() }) {
    return useFrame((state) => {
        const t = state.clock.elapsedTime
        state.camera.position.lerp(v.set(Math.sin(t / 5), -10, 12 + Math.cos(t / 5)), 0.05)
        // расположение камеры (поднять машину выше или ниже)
        state.camera.lookAt(0, -0.5, 0)
    })
}

function MovingSpots({ positions = [2, 0, 2, 0, 2, 0, 2, 0] }) {
    const group = useRef()
    useFrame((state, delta) => (group.current.position.z += delta * 15) > 60 && (group.current.position.z = -60))
    return (
        <group rotation={[0, 0.5, 0]}>
            <group ref={group}>
                {positions.map((x, i) => (
                    // eslint-disable-next-line react/jsx-key
                    <Lightformer form="circle" intensity={4} rotation={[Math.PI / 2, 0, 0]} position={[x, 4, i * 4]} scale={[3, 1, 1]} />
                ))}
            </group>
        </group>
    )
}