import React, { useState } from "react";
import bg16 from "../../assets/backgrounds/bg16.webp";

const MOBILE_SCROLL_OFFSET = 16;

const Navigation: React.FC = () => {
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

    const handleMobileNavClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
        const href = e.currentTarget.getAttribute("href");
        if (href?.startsWith("#")) {
            e.preventDefault();
            const target = document.getElementById(href.slice(1));
            if (target) {
                const top = target.getBoundingClientRect().top + window.scrollY - MOBILE_SCROLL_OFFSET;
                window.scrollTo({ top, behavior: "smooth" });
            }
        }
        setMobileMenuOpen(false);
    };

    return (
        <>
            <nav className="nav">
                <a href="#hero" className="logo">Diane Emerita</a>
                <div className="nav-links">
                    <a href="#hero">Home</a>
                    <a href="#about">About</a>
                    <a href="#music">Music</a>
                    <a href="#tour">Tour</a>
                    <a href="#videos">Videos</a>
                    <a href="#merch">Merch</a>
                    <a href="#contact">Contact</a>
                </div>
                <button className="mobile-menu-btn" onClick={() => setMobileMenuOpen(!mobileMenuOpen)}>
                    <span></span><span></span><span></span>
                </button>
            </nav>
            {/* Preload bg16 */}
            <img src={bg16} alt="" aria-hidden="true" style={{ display: 'none' }} />

            {mobileMenuOpen && (
                <div className="mobile-menu">
                    <img src={bg16} alt="" aria-hidden="true" className="mobile-menu-bg" />
                    <a href="#hero" onClick={handleMobileNavClick}>Home</a>
                    <a href="#about" onClick={handleMobileNavClick}>About</a>
                    <a href="#music" onClick={handleMobileNavClick}>Music</a>
                    <a href="#tour" onClick={handleMobileNavClick}>Tour</a>
                    <a href="#videos" onClick={handleMobileNavClick}>Videos</a>
                    <a href="#merch" onClick={handleMobileNavClick}>Merch</a>
                    <a href="#contact" onClick={handleMobileNavClick}>Contact</a>
                </div>
            )}
        </>
    );
};

export default Navigation;