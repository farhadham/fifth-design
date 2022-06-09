import { useState } from "react";
import Header from "./components/Header/Header";
import MouseFollower from "./components/MouseFollower/MouseFollower";
import { useSpring } from "framer-motion";
import Setting from "./components/Setting/Setting";
import { colors } from "./utils/colors";

function App() {
  const [color, setColor] = useState(colors[0]);
  const [lines, setLines] = useState(true);

  const x = useSpring(0, { stiffness: 100 });
  const y = useSpring(0, { stiffness: 100 });

  return (
    <div
      className="App"
      onMouseMove={(event) => {
        x.set(event.pageX - 12.5);
        y.set(event.pageY - 12.5);
      }}
    >
      <Header color={color} lines={lines} />
      <MouseFollower x={x} y={y} color={color} />
      <Setting setColor={setColor} setLines={setLines} />
    </div>
  );
}

export default App;
