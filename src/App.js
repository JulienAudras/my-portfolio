import "./styles/style.css";
import { Parallax, ParallaxLayer } from "@react-spring/parallax";
import Content from "./components/Content";
import { useState } from "react";

function App() {
  let initialContentHeight;
  if (window.innerWidth > 1024) {
    initialContentHeight = 1.1;
  } else if (window.innerWidth > 768) {
    initialContentHeight = 3.8;
  } 
   else if (window.innerWidth > 350) {
  initialContentHeight = 5.2;
} 
  else {
    initialContentHeight = 6;
  }

  const [contentHeight, setContentHeight] = useState(initialContentHeight);

  const handleContentHeightChange = (height) => {
    const windowHeight = window.innerHeight;
    const newHeight = height / windowHeight;
    setContentHeight(newHeight + 0.5);
  };


  return (
    <div className="App black-bg">
      <Parallax pages={2.1 + contentHeight} className="animation"  >
        <ParallaxLayer offset={0} speed={0.7}>
          <div
            className="animation_layer parallax"
            id="artback"       
          >
          </div>
        </ParallaxLayer>
        <ParallaxLayer offset={0.1} speed={1}>
          <div className="animation_layer parallax" id="mountainsBg"></div>
        </ParallaxLayer>
        <ParallaxLayer offset={0.3} speed={0.8}>
          <div className="animation_layer parallax" id="mountainsFront"></div>       
        </ParallaxLayer>
        <ParallaxLayer offset={0.58} speed={0.8}>
          <div className="animation_layer parallax" id="mountainRight"></div>
        </ParallaxLayer>
        <ParallaxLayer offset={0.85} speed={0.78}>
          <div className="animation_layer parallax" id="treesFront"></div>
        </ParallaxLayer>
        <ParallaxLayer offset={0.67} speed={0.85}>
          <div className="animation_layer parallax" id="manClimbing"></div>
        </ParallaxLayer>
        <ParallaxLayer offset={0.35} speed={0.8} factor={0.25}>
          <div className="animation_layer parallax" id="treesLine"></div>
        </ParallaxLayer>
        <ParallaxLayer offset={1} speed={0} className="pageTwo" />
        <ParallaxLayer
          offset={0.05}
          speed={1}
          z-index={10}
          className="parallax_content animation_layer"   
        >
          <Content onHeightChange={handleContentHeightChange}/>
        </ParallaxLayer>
      </Parallax>
     
    </div>
  );
}

export default App;
