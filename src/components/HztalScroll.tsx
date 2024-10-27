'use client';

import React, { useEffect, useRef,useState } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import "tailwindcss/tailwind.css";
import Train from "./Train";
import TrainIni from "./TrainIni";

gsap.registerPlugin(ScrollTrigger);

const HztalScroll: React.FC = () => {
    const trackRef = useRef<HTMLDivElement | null>(null);
    const containerRef = useRef<HTMLDivElement | null>(null);
    const [showTrain, setShowTrain] = useState(false);

    const handleButtonClick = () => {
      setShowTrain(true);
    };

    useEffect(() => {
        const track = trackRef.current;
        const container = containerRef.current;

        if (track && container) {
            gsap.to(track, {
                x: () => `-${track.scrollWidth - document.documentElement.clientWidth}px`,
                ease: "none",
                scrollTrigger: {
                    trigger: container,
                    invalidateOnRefresh: true,
                    pin: true,
                    scrub: 1,

                },
            });
        }
    }, []);

    return (
        <div ref={containerRef} className="horizontal-scroll w-full h-screen overflow-hidden relative">
            <div
                ref={trackRef}
                className="track-h flex text-white w-[400vw] h-full"
            >
                <div className="subsection flex flex-col items-center justify-center w-screen h-full ">
                    {/* Div 1 - Primera sección */}
                    <div className="w-full flex-1 flex flex-col justify-center items-center mt-[10%] md:mt-[5%]">
                        {/* Título */}
                        <div className="text-center leading-tight">
                            {/* Linea 1 */}
                            <h1 className="text-[1.5rem]">LA</h1>
                            {/* Linea 2 */}
                            <h2 className="text-[2.625rem]">
                                <span className="text-[3.75rem] relative top-2">N</span>AVIDAD
                            </h2>
                            {/* Linea 3 */}
                            <h3 className="text-[1.5rem]">
                                <span className="underline">DE</span>{' '}
                                <span className="text-[3.125rem]">R</span>
                                <span className="text-[2.625rem]">IONEGRO</span>
                            </h3>
                        </div>
                        {/* Subtítulo */}
                        <p className="text-[1.125rem] text-center mt-4 font-minionRegular">
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                        </p>
                        {/* Botón */}
                        <button
                            onClick={handleButtonClick}
                            className="mt-16 md:mt-6 px-16 py-4 rounded-full bg-white text-[#74131f] hover:bg-[#004141] hover:text-white transition-colors shadow-lg hover:shadow-xl transform hover:scale-105"
                        >
                            Entrar
                        </button>
                    </div>

                    {/* Div 2 - Segunda sección */}
                    <div className="pl-[3%] w-full flex-1 flex justify-center md:justify-start items-center">
                        <div className="w-[50%] md:w-1/3 lg:w-1/4 mt-[20%] md:-mt-[7%] ">
                            {showTrain ? <Train /> : <TrainIni />}
                        </div>
                    </div>
                </div>
                <div className="subsection flex items-center justify-center w-screen h-full ">
                    Section 4.2
                </div>
                <div className="subsection flex items-center justify-center w-screen h-full ">
                    Section 4.3
                </div>
                <div className="subsection flex items-center justify-center w-screen h-full ">
                    Section 4.4
                </div>
            </div>
        </div>
    );
};

export default HztalScroll;
