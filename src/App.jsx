import { useRef } from "react";
import './scss/App.scss';
import Canvas from "./components/Canvas";
// import Tools from "./components/tools/Tools";

function App() {
  const canvasEl = useRef();

  return (
    <div className='wrap'>
      <div className='container'>
        <Canvas canvasRef={canvasEl} />
      </div>
    </div>
  )
}

export default App
