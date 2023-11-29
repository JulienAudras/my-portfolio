import "./styles/style.css";
import { Parallax, ParallaxLayer } from "@react-spring/parallax";
import Logo from "./components/Logo";
import { useSpring, animated } from "@react-spring/web";
import logo from "./images/logo.png";
import Intro from "./components/Intro";

function App() {
  return (
    <div className="App black-bg">
      {/* <Logo /> */}

      <Parallax pages={2} class="animation">
        <ParallaxLayer offset={0.2} speed={0.5}>
          <div className="animation_layer parallax" id="logoInt"></div>
        </ParallaxLayer>
        <ParallaxLayer offset={0} speed={0.4}>
          <div
            className="animation_layer parallax"
            id="artback"
            // style={{ zIndex: 1 }}
          >
            {/* <Logo /> */}
          </div>
        </ParallaxLayer>
        <ParallaxLayer offset={0.1} speed={0.7}>
          <div className="animation_layer parallax" id="mountainsBg"></div>
          <img src={logo} alt="logo" className="logo" />
        </ParallaxLayer>
        {/* <ParallaxLayer offset={0.2} speed={0.2}>
          <div className="animation_layer parallax" id="logoInt"></div>
        </ParallaxLayer> */}
        <ParallaxLayer offset={0.3} speed={0.8}>
          {/* <img src={logo} alt="logo" className="logo" /> */}
          <div className="animation_layer parallax" id="mountainsFront"></div>
          <span class="scroll-icon">
            <span class="scroll-icon__dot"></span>
          </span>
        </ParallaxLayer>
        <ParallaxLayer offset={0.38} speed={0.7}>
          <div className="animation_layer parallax" id="mountainRight"></div>
        </ParallaxLayer>
        {/* <ParallaxLayer offset={0.08} speed={0.7}>
          <div className="animation_layer parallax" id="birds"></div>
        </ParallaxLayer> */}
        <ParallaxLayer offset={0.51} speed={0.75}>
          <div className="animation_layer parallax" id="treesFront"></div>
        </ParallaxLayer>
        <ParallaxLayer offset={0.35} speed={0.86}>
          <div className="animation_layer parallax" id="manClimbing"></div>
        </ParallaxLayer>
        <ParallaxLayer offset={0.35} speed={0.8} factor={0.25}>
          <div className="animation_layer parallax" id="treesLine"></div>
        </ParallaxLayer>
        {/* <ParallaxLayer offset={0.96} speed={0.1}>
          <div class="animation_layer parallax" id="blackbg"></div>
        </ParallaxLayer> */}
        {/* <ParallaxLayer offset={0.99} speed={0.8} factor={1}>
          <div class="animation_layer parallax" id="blackbg"></div>
        </ParallaxLayer> */}
        <ParallaxLayer
          offset={0.9}
          speed={0.85}
          style={{ backgroundSize: "cover" }}
        >
          <Intro />
        </ParallaxLayer>
      </Parallax>
      {/* <section className="section intro">
        <h2 className="section__title">About</h2>
      </section> */}
    </div>
  );
}

export default App;
