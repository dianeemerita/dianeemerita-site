import React from "react";
import './Tour.css'
import {upcomingShows, pastShows} from '../../../data/tour'
import {
    Accordion,
    AccordionItem,
    AccordionTrigger,
    AccordionContent,
} from "../../ui/accordion";
import bg4 from "../../../assets/backgrounds/bg4.webp";

const Tour: React.FC = () => {
    return (
        <section id="tour" className="section-tour scroll-mt-15 !py-10 !md:py-14 !lg:py-16">
            <img src={bg4} alt="" aria-hidden="true" className="tour-bg" />
            <div className="container px-4 md:px-8 lg:px-16">
                <h2 className="section-title fade-up">Tour</h2>
                <div className="tour-table">

                    {/* Upcoming shows */}
                    <div className="tour-category">
                        <h3 className="tour-category-title">Upcoming</h3>
                        {upcomingShows.map((show, index) => (
                            <div key={index} className="tour-row fade-up">
                                <span className="tour-date">
                                    {show.date}
                                    <span className="tour-year">{show.year}</span>
                                </span>
                                <div className="tour-details">
                                    <span className="tour-venue">{show.venue}</span>
                                    <span className="tour-city">{show.city}</span>
                                </div>
                                {show.tickets ? (
                                    <a href={show.tickets} className="tour-tickets">More Info</a>
                                ) : (
                                    <span />
                                )}
                            </div>
                        ))}
                    </div>

                    {/* Past shows */}
                    <div className="tour-category">
                        <Accordion type="single" collapsible>
                            <AccordionItem value="past-shows">
                                <AccordionTrigger>Past Shows</AccordionTrigger>
                                <AccordionContent>
                                    {pastShows.map((show, index) => (
                                        <div key={index} className="tour-row past">
                                            <span className="tour-date">
                                                {show.date}
                                                <span className="tour-year">{show.year}</span>
                                            </span>
                                            <div className="tour-details">
                                                <span className="tour-venue">{show.venue}</span>
                                                <span className="tour-city">{show.city}</span>
                                            </div>
                                            <span />
                                        </div>
                                    ))}
                                </AccordionContent>
                            </AccordionItem>
                        </Accordion>
                    </div>

                </div>
            </div>
        </section>
    );
};

export default Tour;
