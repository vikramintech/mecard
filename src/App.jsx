import { useState } from "react";
import Form from "./components/Form";
import ShowImage from "./components/ShowImage";
const App = () => {
  const [data, setData] = useState({
    name: "Name",
    color: "#fff",
    font: "Lora",
  });
  function toUpdate(name, color, font) {
    setData({ name: name, color: color, font: font });
  }
  return (
    <div>
      <h1>{data.name}</h1>
      <Form onSubmit={toUpdate} />
      <ShowImage data={data} />
    </div>
  );
};
export default App;