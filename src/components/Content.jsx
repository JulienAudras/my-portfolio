import { useEffect, useRef } from 'react';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Intro from './Intro';
import Projects from './Projects';
import Skills from './Skills';
import Contact from './Contact';
import logoBig from "../images/logoBig.png";
import slideIcon from "../images/slideIcon.png";

const Content = ({ onHeightChange }) => {
    const ref = useRef(null);

    const updateHeight = () => {
        if (ref.current) {
            const height = ref.current.offsetHeight;
            onHeightChange(height);
        }
    };

    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        afterChange: () => updateHeight()
    };

    useEffect(() => {
        updateHeight();
        window.addEventListener('resize', updateHeight);

        return () => {
            window.removeEventListener('resize', updateHeight);
        };
    },);

    return (
        <main ref={ref} >
            <img src={logoBig} alt="logo" className="logo" id="logoBig" />
            <Contact />
            <span className="scroll-icon">
                <span className="scroll-icon__dot"></span>
            </span>
            <Slider {...settings} className="contentSlider">
                <div>
                    <div className="slideIconContainer">
                        <img src={slideIcon} alt="slide icon" className="slideIcon__icon" />
                    </div>
                    <Intro />
                </div>
                <div>
                    <div className="slideIconContainer">
                        <img src={slideIcon} alt="slide icon" className="slideIcon__icon" />
                    </div>
                    <Projects />
                </div>
                <div>
                    <div className="slideIconContainer">
                        <img src={slideIcon} alt="slide icon" className="slideIcon__icon" />
                    </div>
                    <Skills />
                </div>
            </Slider>
        </main>
    );
}

export default Content