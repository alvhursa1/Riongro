'use client';   

import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';

const HumoTrain = () => {
  const humoSupRef = useRef<SVGPathElement>(null);
  const humoInfRef = useRef<SVGPathElement>(null);

  useEffect(() => {
    // Animación del humo
    if (humoSupRef.current && humoInfRef.current) {
      gsap.to([humoSupRef.current, humoInfRef.current], {
        y: -50,
        opacity: 0,
        repeat: -1,
        yoyo: true,
        duration: 3,
        ease: 'power1.inOut',
        stagger: 0.5,
      });
    }
  }, []);

  return (
    <div className="overflow-x-hidden">
      <svg
        className="w-full h-auto mt-10 pt-20"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 800 400"
      >
        <g>
          {/* Humo superior */}
          <path
            ref={humoSupRef}
            id="humosup"
            d="M38.04,137.51c29.75,51.25,77.8,82.84,134.44,46.42,30.12-19.37,5.19-22.2,11.61-38.69,31.19,55.43,83.42,51.68,135.4,27.08-3.5,46.76,45.57,67.39,85.11,52.23,14.56,46.2,47.12,37.02,49.33,39.65-5.77,13.88,4.26,29.5,16.44,35.79,25.82,13.33,45.67.34,62.87,1.93,1.49-2.04,22.19-8.16,19.34-43.52-1.75-21.69-37.71-62.3-45.46-57.06l-4.84-6.77c22.98-42.21,4.5-86.09-45.46-86.08-18.12-15.21-44.24-22.51-67.7-19.34-9.84-95.52-146.63-124.21-191.5-36.75-17.39-17.84-48.88-14.89-56.1,11.61-23.2-11.32-50.78-10.8-71.57,5.8-35.77-90.33-120.79,14.09-28.05,37.72-5.05,7.94-4.53,20.81-3.87,29.98h0Z" // Path del humo superior
            style={{ fill: 'gray', opacity: 0.7 }}
          />

          {/* Humo inferior */}
          <path
            ref={humoInfRef}
            id="humoinf"
            d="M38.04,137.51c6.23,85.82,109.38,109.01,155.71,40.62,27.55,28.09,59.77,19.52,63.83,21.28,30.26,56.77,74.55,26.91,79.31,27.08,1.44.05,8.67,9.38,27.08,9.67,2.99,1.94,7.19,38.08,50.29,42.56-4.02,21.15,43.53,65.09,58.03,67.7,24.44,4.4,55.35-9.17,53.19-37.72,1.15-2.14,4.24-2.01,7.74-6.77-17.2-1.6-37.05,11.39-62.87-1.93-12.18-6.29-22.21-21.9-16.44-35.79-2.21-2.63-34.76,6.54-49.33-39.65-39.54,15.16-88.61-5.47-85.11-52.23-51.98,24.6-104.22,28.35-135.4-27.08-6.41,16.48,18.52,19.32-11.61,38.69-56.64,36.41-104.69,4.83-134.44-46.42h.02Z" // Path del humo inferior
            style={{ fill: 'gray', opacity: 0.5 }}
          />
        </g>
      </svg>
    </div>
  );
};

export default HumoTrain;
