import ColorPalette from "./ColorPalette";

const ColorPicker = (props) => {
  const { initialValue, update } = props;

  return (
    <>
      <label htmlFor="paintColor" title="paint-color">
        🎨 (hex : {initialValue}) : <br />
        <input 
          type="color" 
          id="paintColor" 
          value={initialValue}
          onChange={(event) => update(event.target.value)} 
        />
      </label>

      <ColorPalette update={update} />
    </>
  );
};

export default ColorPicker;