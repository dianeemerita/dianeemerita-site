import React from "react";
import './Music.css'
import {albums} from '../../../data/album'
import bg2 from "../../../assets/backgrounds/bg2.webp";
import bg3 from "../../../assets/backgrounds/bg3.webp";
import bg10 from "../../../assets/backgrounds/bg10.webp";
import bg11 from "../../../assets/backgrounds/bg11.webp";
import { SpotifyIcon, AppleMusicIcon, TidalIcon, SoundCloudIcon, YoutubeIcon as YouTubeMusicIcon } from "../../ui/icons";

const Music: React.FC = () => {
    return(
        <section id="music" className="section-music scroll-mt-15 !py-10 !md:py-14 !lg:py-16">
            <div className="container px-4 md:px-8 lg:px-16">
                <h2 className="section-title fade-up">Music</h2>
                <div className="album-grid">
                    {albums.map((album, index) => (
                        <div key={index} className={`album-row fade-up ${index % 2 !== 0 ? 'odd' : ''}`}>
                            {/* Desktop: bg2/bg3 alternating */}
                            <img
                                src={index % 2 !== 0 ? bg3 : bg2}
                                alt=""
                                aria-hidden="true"
                                className="album-row-bg album-row-bg--desktop"
                            />
                            {/* Mobile: bg10/bg11 alternating */}
                            <img
                                src={index % 2 !== 0 ? bg11 : bg10}
                                alt=""
                                aria-hidden="true"
                                className="album-row-bg album-row-bg--mobile"
                            />
                            <div className="album-image">
                                <div className="album-cover">
                                    <img src={album.cover} alt={album.title}/>
                                </div>
                            </div>
                            <div className="album-content">
                                <h3 className="album-title">{album.title} ({album.year})</h3>
                                <div className="album-platforms">
                                    {album.spotifyURL && (
                                        <a href={album.spotifyURL} className="platform-link platform-link--spotify" target="_blank" rel="noopener noreferrer" aria-label="Spotify" title="Spotify">
                                            <SpotifyIcon />
                                        </a>
                                    )}
                                    {album.tidalURL && (
                                        <a href={album.tidalURL} className="platform-link" target="_blank" rel="noopener noreferrer" aria-label="Tidal" title="Tidal">
                                            <TidalIcon />
                                        </a>
                                    )}
                                    {album.soundcloudURL && (
                                        <a href={album.soundcloudURL} className="platform-link" target="_blank" rel="noopener noreferrer" aria-label="SoundCloud" title="SoundCloud">
                                            <SoundCloudIcon />
                                        </a>
                                    )}
                                    {album.appleMusicURL && (
                                        <a href={album.appleMusicURL} className="platform-link" target="_blank" rel="noopener noreferrer" aria-label="Apple Music" title="Apple Music">
                                            <AppleMusicIcon />
                                        </a>
                                    )}
                                    {album.youtubeMusicURL && (
                                        <a href={album.youtubeMusicURL} className="platform-link" target="_blank" rel="noopener noreferrer" aria-label="YouTube Music" title="YouTube Music">
                                            <YouTubeMusicIcon />
                                        </a>
                                    )}
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Music;
