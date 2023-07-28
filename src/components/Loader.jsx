import { Html, useProgress } from '@react-three/drei';
import { html } from '../assets';

const Loader = () => {
  const { progress } = useProgress();

  return (
    <Html>
      <span className="canvas-loader"></span>
      <p
        style={{
          fontSize: 18,
          color: '#f1f1f1',
          fontWeight: 800,
          marginTop: 40 
        }}
        >{progress.toFixed(2)}%</p>
    </Html>
  )
} 

export default Loader