import { useState, useEffect } from "react";
import PropTypes from "prop-types";
import style from "../scss/Canvas.module.scss";
// import Tools from "./tools/Tools";
import BasicProperties from "./tools/BasicProperties";

const Canvas = (props) => {
  // canvas element
  const { canvasRef, width, height } = props;
  const [cursorOffset, setCursorOffset] = useState(null);
  const [isPainting, setPaintingStatus] = useState(false);
  const [ctx, setCtx] = useState();

  // tools
  const [borderWidth, setBorderWidth] = useState(3);
  const [colorStyle, setColorStyle] = useState("#cccccc");

  const onSetBorderWidth = (num) => {
    setBorderWidth(num);
  };
  const onSetColorStyle = (hex) => {
    setColorStyle(hex);
  };

  // methods
  const onMouseMove = (event) => {
    setCursorOffset({
      x: event.pageX - canvasRef.current?.offsetLeft,
      y: event.pageY - canvasRef.current?.offsetTop,
    });

    if (isPainting) {
      ctx.lineWidth = borderWidth;
      ctx.lineCap = "round";
      ctx.strokeStyle = colorStyle;
      ctx.fillStyle = colorStyle;
      ctx.lineTo(cursorOffset.x, cursorOffset.y);
      ctx.stroke();

      return;
    }
  };

  const startPainting = () => {
    setPaintingStatus(true);
  };

  const cancelPainting = () => {
    setPaintingStatus(false);
    ctx?.beginPath();
  };

  useEffect(() => {
    const { current } = canvasRef;

    setCtx(current.getContext("2d"));
  }, []);

  return (
    <>
      <canvas 
        ref={canvasRef} 
        className={style.canvas} 
        width={width} 
        height={height}
        onMouseMove={onMouseMove}
        onMouseDown={startPainting}
        onMouseUp={cancelPainting}
        onMouseLeave={cancelPainting}
      ></canvas>

      <div className="tools">
        <BasicProperties 
          updateBorder={onSetBorderWidth} 
          updateColor={onSetColorStyle} 
          initialValue={
            {
              border : borderWidth, 
              color : colorStyle,
            }
          } 
        />
      </div>
    </>
  );
};

Canvas.defaultProps = {
  width : 800,
  height: 800,
};

Canvas.propsType = {
  width : PropTypes.number,
  height : PropTypes.number,
};

export default Canvas;

