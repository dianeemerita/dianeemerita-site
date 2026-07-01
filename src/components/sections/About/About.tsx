import React from "react";
import './About.css'
import bg1 from "../../../assets/backgrounds/bg1.webp";
import bg8 from "../../../assets/backgrounds/bg8.webp";
import {
    Accordion,
    AccordionItem,
    AccordionTrigger,
    AccordionContent,
} from "../../ui/accordion";

const About: React.FC = () => {
    return (
        <section id="about" className="section-about scroll-mt-15 !py-10 !md:py-14 !lg:py-16">
            {/* Background texture */}
            <img src={bg1} alt="" aria-hidden="true" className="about-bg about-bg--desktop" />
            <img src={bg8} alt="" aria-hidden="true" className="about-bg about-bg--mobile" />

            <div className="container mx-auto px-4 md:px-8 lg:px-16">
                <div className="about-grid">
                    <div className="about-text fade-up">
                        <h2 className="section-title">About</h2>

                        {/* Always visible — first paragraph */}
                        <p className="about-body">
                            Diane Emerita writes with a kind of honesty that feels almost unguarded. Her songs unfold like fragments of something lived, and her visual world mirrors that instinct, immersive, intentional and unmistakably her own.
                        </p>

                        {/* Desktop: paragraphs 2–4 always visible, paragraphs 5–6 behind accordion */}
                        <div className="about-body-desktop">
                            <p className="about-body">
                                In an interview with Elle Sweden, she was described as a "reluctant pop-star", a phrase that captures her grounded and uncompromising presence. The German-Swedish artist, multi-instrumentalist, producer and songwriter draws inspiration from her classical piano education and love for literature. With a deep and emotionally charged voice, Emerita carries stories of heartbreak, hope, family and the quiet tension of being human. Building her music instinctively, guided more by feeling than form, always returning to storytelling as the center of it all.
                            </p>
                            <p className="about-body">
                                In March 2026, she released her debut full-length studio album "Porcelain Heart" via Def Jam Recordings Sweden. In which Emerita fully embraces her role as multi-instrumentalist and songwriter in a playful yet profound way. With a sound rooted in alternative pop and driven by curiosity, Diane Emerita delivers an album that feels both timeless and relevant.
                            </p>
                            <p className="about-body">
                                On stage, Emerita enchants both large and small audiences and her poetic soundscapes feel like a warm embrace. Humor dissolves into stillness, vulnerability into release and we get to experience her sense of life. Off stage, her world becomes the forest, the sea, the people around her and a quiet life with a rich inner world. A place where stories form.
                            </p>
                            <Accordion type="single" collapsible>
                                <AccordionItem value="read-more-desktop">
                                    <AccordionTrigger>Read more</AccordionTrigger>
                                    <AccordionContent>
                                        <p className="about-body">
                                            Beyond being dubbed a "Reluctant Popstar" in an interview by Elle Sweden, Emerita has been named an "Artist to Watch" by Spotify and described by Swedish media as "one of the clearest voices on the Swedish music scene." Over the past year, she has demonstrated a striking versatility across disciplines and audiences, from features on Kulturreportage i P1 to a role in the TV series Stenbeck, where she performed her interpretation of "Time of the Season" in the opening scene. Her music has also reached global audiences through a sync placement in The Sims 4, featuring her hyper-pop track "Carry You." from her EP "Indigo Bruised". In March last year, she collaborated with Swedish artist Stuzzi and Brazilian artist Bruno Berle on the single "Tagesanbruch," while also releasing her own poetry book.
                                        </p>
                                        <p className="about-body">
                                            In 2024, Emerita released her heartfelt EP "Travelling Forever" marking her signing to Universal Music Sweden. Skip forward to March 2026, she released her debut full-length studio album "Porcelain Heart" via Def Jam Recordings Sweden, a journey through longing, healing, hope, and aching heartbreak. Amid the release of her debut full-length studio album, Emerita has already performed at major festivals and venues including Way Out West, Copenhagen Jazz Festival, the Nordic Museum, Världskulturmuseet, Victoria theatre, and Cirkus for the annual Swedish Amnesty concert. Driven by instinct and artistic curiosity, Diane Emerita continues to evolve, moving fluidly between genres, formats, and spaces, always following where her inspiration leads.
                                        </p>
                                    </AccordionContent>
                                </AccordionItem>
                            </Accordion>
                        </div>

                        {/* Mobile: paragraphs 2–6 all behind one accordion */}
                        <div className="about-body-mobile">
                            <Accordion type="single" collapsible>
                                <AccordionItem value="read-more">
                                    <AccordionTrigger>Read more</AccordionTrigger>
                                    <AccordionContent>
                                        <p className="about-body">
                                            In an interview with Elle Sweden, she was described as a "reluctant pop-star", a phrase that captures her grounded and uncompromising presence. The German-Swedish artist, multi-instrumentalist, producer and songwriter draws inspiration from her classical piano education and love for literature. With a deep and emotionally charged voice, Emerita carries stories of heartbreak, hope, family and the quiet tension of being human. Building her music instinctively, guided more by feeling than form, always returning to storytelling as the center of it all.
                                        </p>
                                        <p className="about-body">
                                            In March 2026, she released her debut full-length studio album "Porcelain Heart" via Def Jam Recordings Sweden. In which Emerita fully embraces her role as multi-instrumentalist and songwriter in a playful yet profound way. With a sound rooted in alternative pop and driven by curiosity, Diane Emerita delivers an album that feels both timeless and relevant.
                                        </p>
                                        <p className="about-body">
                                            On stage, Emerita enchants both large and small audiences and her poetic soundscapes feel like a warm embrace. Humor dissolves into stillness, vulnerability into release and we get to experience her sense of life. Off stage, her world becomes the forest, the sea, the people around her and a quiet life with a rich inner world. A place where stories form.
                                        </p>
                                        <p className="about-body">
                                            Beyond being dubbed a "Reluctant Popstar" in an interview by Elle Sweden, Emerita has been named an "Artist to Watch" by Spotify and described by Swedish media as "one of the clearest voices on the Swedish music scene." Over the past year, she has demonstrated a striking versatility across disciplines and audiences, from features on Kulturreportage i P1 to a role in the TV series Stenbeck, where she performed her interpretation of "Time of the Season" in the opening scene. Her music has also reached global audiences through a sync placement in The Sims 4, featuring her hyper-pop track "Carry You." from her EP "Indigo Bruised". In March last year, she collaborated with Swedish artist Stuzzi and Brazilian artist Bruno Berle on the single "Tagesanbruch," while also releasing her own poetry book.
                                        </p>
                                        <p className="about-body">
                                            In 2024, Emerita released her heartfelt EP "Travelling Forever" marking her signing to Universal Music Sweden. Skip forward to March 2026, she released her debut full-length studio album "Porcelain Heart" via Def Jam Recordings Sweden, a journey through longing, healing, hope, and aching heartbreak. Amid the release of her debut full-length studio album, Emerita has already performed at major festivals and venues including Way Out West, Copenhagen Jazz Festival, the Nordic Museum, Världskulturmuseet, Victoria theatre, and Cirkus for the annual Swedish Amnesty concert. Driven by instinct and artistic curiosity, Diane Emerita continues to evolve, moving fluidly between genres, formats, and spaces, always following where her inspiration leads.
                                        </p>
                                    </AccordionContent>
                                </AccordionItem>
                            </Accordion>
                        </div>
                    </div>

                    <div className="about-image about-image--desktop fade-up">
                        <img src="src/assets/images/ImageAbout.webp" alt="Diane Emerita portrait" />
                    </div>
                </div>
            </div>
        </section>
    );
};

export default About;
