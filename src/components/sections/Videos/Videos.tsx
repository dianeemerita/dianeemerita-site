import React from "react";
import './Videos.css'
import {videos} from '../../../data/video'
import bg5 from "../../../assets/backgrounds/bg5.webp";
import bg15 from "../../../assets/backgrounds/bg15.webp";

const Videos: React.FC = () => {
    return(
        <section id="videos" className="section-videos scroll-mt-15 !py-10 !md:py-14 !lg:py-16">
            <img src={bg5} alt="" aria-hidden="true" className="videos-bg videos-bg--desktop" />
            <img src={bg15} alt="" aria-hidden="true" className="videos-bg videos-bg--mobile" />
            <div className="container px-4 md:px-8 lg:px-16">
                <h2 className="section-title fade-up">Videos</h2>
                <div className="video-list">
                    {videos.map ((video, index) => (
                        <div key={index} className="video-card fade-up">
                            <div className="video-wrapper">
                                <iframe
                                    src={`https://www.youtube-nocookie.com/embed/${video.youtubeId}`}
                                    title={video.title}
                                    frameBorder={0}
                                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                                    allowFullScreen
                                    referrerPolicy="strict-origin-when-cross-origin"
                                    className="video-iframe"
                                ></iframe>
                            </div>
                            <h3 className="video-title">{video.title}</h3>
                            <p className="video-year">{video.year}</p>
                            {video.description && (
                                <p className="video-description">{video.description}</p>
                            )}
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Videos;