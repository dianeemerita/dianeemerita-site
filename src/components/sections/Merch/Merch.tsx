import React from "react";
import './Merch.css'
import bg6 from "../../../assets/backgrounds/bg6.webp";

const Merch: React.FC = () => {
    return (
        <section id="merch" className="section-merch scroll-mt-20 !py-10 !md:py-14 !lg:py-16">
            <img src={bg6} alt="" aria-hidden="true" className="merch-bg" />
            <div className="container">
                <h2 className="section-title fade-up">Merch</h2>
                <div className="merch-coming-soon fade-up">
                    <div className="merch-coming-soon__inner">
                        <span className="merch-coming-soon__label">Coming Soon</span>
                        <p className="merch-coming-soon__sub">Vinyls are on the way</p>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Merch;
