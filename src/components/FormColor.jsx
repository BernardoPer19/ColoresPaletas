import React, { useState } from "react";
import Values from "values.js";

function FormColor({ setList }) {
  const [color, setColor] = useState();
  const [error, setError] = useState(false);

  const handleGenerator = (e) => {
    e.preventDefault();
    console.log(setColor);

    try {
      let colors = new Values(color).all(11);
      setList(colors);
      setError(false);
      setError("");
    } catch (error) {
      console.log(error);
      setError(true);
    }
  };

  return (
    <div className="form-color">
      <h1>Color palette generator</h1>
      <form onSubmit={handleGenerator}>
        <input
          type="text"
          placeholder="Escribe un color!"
          onChange={(e) => {
            setColor(e.target.value);
          }}
        />
        <input type="submit" value={"Generar"} />
      </form>

      {error ? <p className="error">No existe el color!</p> : null}
    </div>
  );
}

export default FormColor;
