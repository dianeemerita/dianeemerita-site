import React from "react";
import './Contact.css'
import bg7 from "../../../assets/backgrounds/bg7.webp";
import bg13 from "../../../assets/backgrounds/bg13.webp";
import { InstagramIcon, SpotifyIcon, AppleMusicIcon, TidalIcon, SoundCloudIcon, YoutubeIcon } from "../../ui/icons";

const socialLinks = [
    { label: "Instagram", href: "https://www.instagram.com/dianeemerita/", Icon: InstagramIcon },
    { label: "Spotify", href: "https://open.spotify.com/artist/3LhfJfuhr6OZLHrpCXIyuH", Icon: SpotifyIcon },
    { label: "Tidal", href: "https://tidal.com/artist/34509245", Icon: TidalIcon },
    { label: "SoundCloud", href: "https://soundcloud.com/diane42348", Icon: SoundCloudIcon },
    { label: "YouTube", href: "https://www.youtube.com/@dianeemerita", Icon: YoutubeIcon },
    { label: "Apple Music", href: "http://music.apple.com/se/artist/diane-emerita/1645834838", Icon: AppleMusicIcon },
];

const Contact: React.FC = () => {
    return (
        <section id="contact" className="section-contact scroll-mt-15 !py-10 !md:py-14 !lg:py-16">
            <img src={bg7} alt="" aria-hidden="true" className="contact-bg contact-bg--desktop" />
            <img src={bg13} alt="" aria-hidden="true" className="contact-bg contact-bg--mobile" />
            <div className="container">

                {/* Top bar: three columns */}
                <div className="contact-bar fade-up">

                    {/* Left column: contact emails */}
                    <div className="contact-col">
                        {/* Artist: Diane Emerita */}
                        <div className="contact-entry">
                            <span className="contact-label">Artist</span>
                            <a href="mailto:dianeemerita@gmail.com" className="contact-link">dianeemerita@gmail.com</a>
                        </div>
                        {/* PR Contact: Emil Sinkkonen */}
                        <div className="contact-entry">
                            <span className="contact-label">PR — Emil Sinkkonen</span>
                            <a href="mailto:emil@birdswillsingforyou.com" className="contact-link">emil@birdswillsingforyou.com</a>
                        </div>
                        {/* Label Contact: Universal Music Sweden, Mattias Caliste */}
                        <div className="contact-entry">
                            <span className="contact-label">Label — Universal Music Sweden</span>
                            <a href="mailto:mattias.caliste@umusic.com" className="contact-link">mattias.caliste@umusic.com</a>
                        </div>
                        {/* Live booking agent: Decireè Åkesson */}
                        <div className="contact-entry">
                            <span className="contact-label">Booking — Decireè Åkesson</span>
                            <a href="mailto:deciree@luger.se" className="contact-link">deciree@luger.se</a>
                        </div>
                    </div>

                    {/* Centre column: social icons in a row */}
                    <div className="contact-col contact-col--center">
                        <span className="contact-label">Social Media</span>
                        <div className="social-links">
                            {socialLinks.map(({ label, href, Icon }) => (
                                <a key={label} href={href} className="social-icon-link" aria-label={label} title={label}>
                                    <Icon />
                                </a>
                            ))}
                        </div>
                    </div>

                    {/* Right column: copyright */}
                    <div className="contact-col contact-col--right">
                        <span className="contact-label">Diane Emerita</span>
                        <span className="contact-copyright">© {new Date().getFullYear()}</span>
                    </div>

                </div>
            </div>
        </section>
    );
};

export default Contact;
