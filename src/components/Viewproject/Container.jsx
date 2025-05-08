import React, { useEffect, useState, useRef } from 'react';
import Card from './Card';
import { Link } from 'react-router-dom';
import Printify from './Printify.png';
import Zomato from './Zomato.png';
import Music from './Music.png';
import ClubVista from './ClubVista.png';
import GreenBreeze from './GreenBreeze.png';

function Container() {
    const [visibleIndices, setVisibleIndices] = useState([]); // Tracks which cards are visible
    const linkRefs = useRef([]); // References to all the link elements

    const links = [
        {
            to: "https://greenbreeze.vercel.app",
            title: "GreenBreeze",
            desc: "Calculates the required plantation area to improve air quality in a city. Provides actionable solutions for combating air pollution using data points.",
            img: GreenBreeze,
        },
        {
            to: "https://schedule-3fe75.web.app/",
            title: "ClubVista",
            desc: "Manages club events efficiently. Creates, schedules, and manages events. Uploads and stores reports for future reference, promoting transparency.",
            img: ClubVista,
        },
        {
            to: "https://printify-web-three.vercel.app/",
            title: "Printify Landing Page",
            desc: "Recreates the UI of Printify.com. Demonstrates UI design skills and front-end development knowledge while highlighting creative problem-solving.",
            img: Printify,
        },
        {
            to: "/zomato",
            title: "Zomato UI Page",
            desc: "Replicates the basic UI of Zomato's landing page. Demonstrates the ability to translate visual elements into code, showcasing foundational web skills.",
            img: Zomato,
        },
        {
            to: "/musicplayer",
            title: "Music Player Website",
            desc: "Builds a simple website for playing songs. Demonstrates the ability to integrate multimedia elements and create interactive web experiences.",
            img: Music,
        },
    ];

    useEffect(() => {
        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) {
                        const index = parseInt(entry.target.getAttribute('data-index'), 10);
                        setVisibleIndices((prevIndices) => [...new Set([...prevIndices, index])]); // Avoid duplicates
                    }
                });
            },
            { threshold: 0.4 } // Trigger when 40% of the element is visible
        );

        linkRefs.current.forEach((ref) => ref && observer.observe(ref));

        return () => {
            linkRefs.current.forEach((ref) => ref && observer.unobserve(ref));
        };
    }, []);

    return (
        <div className="gap-8 p-6 flex flex-col justify-center items-center">
            {links.map((link, index) => (
                <Link
                    key={index}
                    to={link.to}
                    target={link.to.startsWith('http') ? "_blank" : undefined}
                    className={`w-full sm:w-fit lg:w-fit transform transition-all duration-700 ease-out ${
                        visibleIndices.includes(index)
                            ? 'translate-x-0 opacity-100'
                            : index % 2 === 0
                            ? '-translate-x-32 opacity-0'
                            : 'translate-x-32 opacity-0'
                    }`}
                    ref={(el) => (linkRefs.current[index] = el)} // Store ref for each Link
                    data-index={index} // Add index to identify elements
                >
                    <Card
                        title={link.title}
                        desc={link.desc}
                        img={link.img}
                    />
                </Link>
            ))}
        </div>
    );
}

export default Container;
