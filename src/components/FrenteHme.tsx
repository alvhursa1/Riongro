'use client';

import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

// Asegúrate de registrar ScrollTrigger antes de usarlo
gsap.registerPlugin(ScrollTrigger);

const FrenteHme = () => {
  const containerRef = useRef<HTMLDivElement | null>(null);
  const svgRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const container = containerRef.current;
    if (container) {
      // GSAP ScrollTrigger para mover el contenedor horizontalmente
      gsap.to(container, {
        x: () => `-${container.scrollWidth - window.innerWidth}px`,
        ease: 'power2.out', // Para un desplazamiento suave
        scrollTrigger: {
          trigger: container,
          start: 'top top',
          end: () => `+=${container.scrollWidth}`,
          scrub: true,
          pin: true,
          snap: 1 / 2, // Anima suavemente para fijar cada sección al llegar
          anticipatePin: 1,
        },
      });
    }
  }, []);

  return (
    <div className="relative w-full h-screen overflow-hidden">
      {/* Imagen SVG al frente que abarca toda la pantalla, alineada al borde inferior y con altura del 20% */}
      <div ref={svgRef} className="absolute bottom-0 w-full h-[20%]">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 11529.24 607.47"
          className="w-full h-full"
        >
          <defs>
            <style>
              {`.cls-1 { fill: #0b1941; }
                .cls-2 { fill: #004040; }
                .cls-3 { fill: #ebab6c; }`}
            </style>
          </defs>
          <path className="cls-2" d="M7693.36,602.19h3835.88v-225.52l-299.53-48.26c-19.45-3.13-39.2-4.08-58.86-2.86-492.35,30.52-444.63-205.79-998.5,25.66-28.32,11.83-59.61,14.63-89.58,8.03-397.98-87.62-217.47.26-627.78,10.11-9.28.22-18.57-.7-27.63-2.76-436.49-99.14-359.87,30.6-620.19,21.7-22.23-.76-45.18-4.05-64.21-15.58-888.47-567.96-1730.04-81.05-2052.32,234.63h997.89c-.06-2.55,1.55-5.14,4.82-5.14Z"/>
          <path className="cls-2" d="M2447,604.77h1397.37v-279.63C2463.13,610.05,740.36,124.46,0,325.14v282.2h2442.72c.72-1.47,2.14-2.57,4.28-2.57Z"/>
          <g>
            <polygon className="cls-1" points="5038.91 607.34 5038.91 401.9 4958.79 308.32 4281.73 308.32 4204.26 398.8 4204.26 607.34 5038.91 607.34"/>
            <g>
              <polygon className="cls-1" points="4341.66 384.26 4425.47 384.26 4425.47 308.32 4383.57 274.91 4341.66 308.32 4341.66 384.26"/>
              <path className="cls-1" d="M4428.07,386.86h-89.01v-79.79l44.5-35.49,44.5,35.49v79.79h.01ZM4344.26,381.66h78.62v-72.09l-39.31-31.34-39.31,31.34v72.09Z"/>
            </g>
            <path className="cls-1" d="M4383.57,313.38h0c9.03,0,16.36,7.33,16.36,16.36v37.12h-32.73v-37.12c0-9.03,7.33-16.36,16.36-16.36h.01Z"/>

          </g>
        </svg>
      </div>

      {/* Contenedor principal para las diapositivas */}
      <div ref={containerRef} className="flex w-[300vw] h-screen">
        {/* Cada "diapositiva" de pantalla completa */}
        <div className="w-screen h-screen flex items-center justify-center bg-blue-500">
          <h2 className="text-white text-4xl">Diapositiva 1</h2>
        </div>
        <div className="w-screen h-screen flex items-center justify-center bg-green-500">
          <h2 className="text-white text-4xl">Diapositiva 2</h2>
        </div>
        <div className="w-screen h-screen flex items-center justify-center bg-red-500">
          <h2 className="text-white text-4xl">Diapositiva 3</h2>
        </div>
      </div>
    </div>
  );
};

export default FrenteHme;
