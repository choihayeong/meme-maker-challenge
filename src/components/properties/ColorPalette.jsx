import { useEffect, useState } from 'react';
import style from "../../scss/Tools.module.scss";

const ColorPalette = (props) => {
  const { update } = props;

  const [chips, setColorChips] = useState(["#ff9ff3","#feca57","#ee5253","#48dbfb","#1dd1a1"]);

  const API_URL = "";

  const getAPI = async () => {
    const data = await (
      await fetch(`${API_URL}`)
        .then(
          setColorChips(data)
        )
        .catch(
          console.log("api error")
        )
      );
  }

  useEffect(() => {
    getAPI();
  }, [])

  return (
    <ul className={style.palette}>
      {chips.map((chip, index) => (
        <li key={index}>
          <button 
            type='button' 
            className={style.chip} 
            aria-label={chip} 
            style={{
              "backgroundColor": `${chip}`
            }}
            onClick={() => update(chip)}
          ></button>
        </li>
      ))}
    </ul>
  );
};

export default ColorPalette;