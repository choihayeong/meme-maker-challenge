import BorderWidth from "../properties/BorderWidth";
import ColorPicker from "../properties/ColorPicker";
import style from "../../scss/Tools.module.scss";

const BasicProperties = (props) => {
  const { initialValue, updateBorder, updateColor } = props;

  return (
    <div className={style.properties}>
      <BorderWidth update={updateBorder} initialValue={initialValue.border} />

      <ColorPicker update={updateColor} initialValue={initialValue.color} />
    </div>
  );
};

export default BasicProperties;
