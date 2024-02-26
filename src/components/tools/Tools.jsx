import BasicProperties from "./BasicProperties";
import ColorPalette from "./ColorPalette";
import Controller from "./Controller";
import style from "../../scss/Tools.module.scss";

const Tools = (props) => {

  return (
    <div className={style.tools}>
      <button onClick={() => props.update(5)}>borderWidth 변경</button>

      <BasicProperties />

      <ColorPalette />

      <Controller />
    </div>
  );
};

export default Tools;
