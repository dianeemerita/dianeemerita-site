import React from "react";
import './Hero.css'

const heroImage = "src/assets/images/Hero-wide.webp";
const heroImageMobile = "src/assets/images/Hero.webp";

const Hero: React.FC = () => {
    return(
        <section id="hero" className="hero">
            <div className="hero-image">
                <img src={heroImage} alt="Diane Emerita" className="hero-img--desktop" />
                <img src={heroImageMobile} alt="Diane Emerita" className="hero-img--mobile" />
            </div>
            
            <div className="hero-content">
                <div className="hero-name-block">
                    <h1 className="hero-name">Diane Emerita</h1>
                </div>
            </div>
        </section>
    );
};

export default Hero;