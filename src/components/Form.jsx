import { useState } from "react";

const Form = ({ onSubmit }) => {
  const [input, setInput] = useState("");
  const [color, setColor] = useState("#000");

  const [font, setFont] = useState("");

  function handleSubmit(e) {
    e.preventDefault();
    onSubmit(input, color, font);
  }
  return (
    <div>
      <form onSubmit={handleSubmit}>
        <label htmlFor="input">Name: </label>
        <input
          type="text"
          id="input"
          name="input"
          placeholder="Enter your name "
          value={input}
          onChange={(e) => setInput(e.target.value)}
        />
        <br />
        <label htmlFor="favcolor">Color:</label>
        <input
          type="color"
          id="favcolor"
          name="favcolor"
          value={color}
          onChange={(e) => setColor(e.target.value)}
        />
        <br />

        <label htmlFor="cars">Choose a font:</label>

        <select
          id="cars"
          value={font}
          onChange={(e) => setFont(e.target.value)}
        >
          <option value="Lato">Lato</option>
          <option value="Lora">Lora</option>
          <option value="Open Sans">Open Sans</option>
          <option value="PT Sans">PT Sans</option>
          <option value="oswald">oswald</option>
          <option value="Playfair display">Playfair display</option>
        </select>
        <br />

        <button type="submit">Submit</button>
      </form>
    </div>
  );
};
export default Form;