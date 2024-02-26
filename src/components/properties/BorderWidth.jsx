const BorderWidth = (props) => {
  const { initialValue, update } = props;

  return (
    <label htmlFor="lineWidth" title="border-width">
      💅 ({initialValue}px) : <br />
      <input
        type="range"
        id="lineWidth"
        min={1}
        max={10}
        value={initialValue}
        step={0.5}
        onChange={(event) => update(event.target.value)}
      />
    </label>
  );
};

export default BorderWidth;