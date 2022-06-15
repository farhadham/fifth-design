import { useState } from "react";
import Header from "./components/Header/Header";
import MouseFollower from "./components/MouseFollower/MouseFollower";
import { useSpring } from "framer-motion";
import Setting from "./components/Setting/Setting";
import { colors } from "./utils/colors";
import Footer from "./components/Footer/Footer";
import Nav from "./components/Nav/Nav";
import About from "./components/About/About";
import Portfolio from "./components/Portfolio/Portfolio";
import Experience from "./components/Experience/Experience";
import Language from "./components/Language/Language";
import Skills from "./components/Skills/Skills";
import Testimonial from "./components/Testimonial/Testimonial";
import Clients from "./components/Clients/Clients";

function App() {
  const [color, setColor] = useState(colors[0]);
  const [lines, setLines] = useState(true);
  const [linkHovered, setLinkHovered] = useState(false);

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
      <MouseFollower x={x} y={y} color={color} linkHovered={linkHovered} />
      <Setting setColor={setColor} setLines={setLines} />
      <Nav setLinkHovered={setLinkHovered} />
      <Header color={color} lines={lines} />
      <About color={color} lines={lines} />
      <Experience color={color} lines={lines} />
      <Skills color={color} lines={lines} />
      <Language color={color} lines={lines} />
      <Testimonial color={color} lines={lines} />
      <Clients color={color} lines={lines} />
      <Portfolio color={color} lines={lines} setLinkHovered={setLinkHovered} />
      <Footer setLinkHovered={setLinkHovered} />
    </div>
  );
}

export default App;
