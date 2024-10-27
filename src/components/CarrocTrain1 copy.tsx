'use client';

import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';

const CarrocTrain1 = () => {
  const carroceriaRef = useRef<SVGGElement>(null);
  const humoSupRef = useRef<SVGPathElement>(null);
  const humoInfRef = useRef<SVGPathElement>(null);

  useEffect(() => {
    // Animación de la carrocería del tren para simular el movimiento
    if (carroceriaRef.current) {
      gsap.to(carroceriaRef.current, {
        y: '+=5', // Movimiento hacia arriba
        repeat: -1,
        yoyo: true,
        duration: 1.5,
        ease: 'power1.inOut',
      });
    }

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
    <g ref={carroceriaRef} id="tren2">
      <path
        className="fill-[#9e3016]"
        d="M590.6,364.4v406.6h243.1v-406.6h-243.1ZM814.2,524.9h-208.6v-147h208.6v147Z"
      />
      <rect className="fill-[#b23918]" x="833.7" y="648.7" width="266.3" height="122.3" />
      <rect className="fill-[#bb5333]" x="1100.1" y="540.3" width="132.1" height="230.7" />
      <rect className="fill-[#293456]" x="833.7" y="524.9" width="266.3" height="123.8" />
      <path
        className="fill-[#293456]"
        d="M595.6,322.1h232c9.6,0,17.4,7.8,17.4,17.4v24.8h-266.9v-24.8c0-9.6,7.8-17.4,17.4-17.4h0Z"
      />
      <rect className="fill-[#b23918]" x="939" y="419.3" width="76.6" height="105.6" />
      <rect className="fill-[#b23918]" x="620.9" y="524.9" width="50" height="243.1" />
      <rect className="fill-[#9e3016]" x="1100.1" y="524.9" width="40.1" height="246.1" />
      <rect className="fill-[#9e3016]" x="939" y="419.3" width="9.9" height="106.3" />
      <rect className="fill-[#d97767] opacity-40" x="956.4" y="419.3" width="20.9" height="106.3" />
      <path
        className="fill-[#293456]"
        d="M951.7,375.6h49.7c9.7,0,17.5,7.8,17.5,17.5v26.2h-84.7v-26.2c0-9.6,7.8-17.5,17.5-17.5h0Z"
      />
      <polygon className="fill-[#a4a6ab]" points="1239.7 666.4 1239.7 771 1407.8 771 1239.7 666.4" />
      <line className="stroke-[#57585b] stroke-[2px]" x1="1250" y1="765.9" x2="1250" y2="688.3" />
      <line className="stroke-[#57585b] stroke-[2px]" x1="1265.5" y1="765.9" x2="1265.5" y2="688.3" />
      <line className="stroke-[#57585b] stroke-[2px]" x1="1279.9" y1="765.9" x2="1279.9" y2="703.4" />
      <line className="stroke-[#57585b] stroke-[2px]" x1="1292.9" y1="765.9" x2="1292.9" y2="715.7" />
      <line className="stroke-[#57585b] stroke-[2px]" x1="1307.2" y1="765.9" x2="1307.2" y2="720.1" />
      <line className="stroke-[#57585b] stroke-[2px]" x1="1320.2" y1="765.9" x2="1320.2" y2="732.1" />
      <line className="stroke-[#57585b] stroke-[2px]" x1="1334.3" y1="765.9" x2="1334.3" y2="740.8" />
      <line className="stroke-[#57585b] stroke-[2px]" x1="1346.2" y1="765.9" x2="1346.2" y2="746.9" />
      <line className="stroke-[#57585b] stroke-[2px]" x1="1360.2" y1="765.9" x2="1360.2" y2="754.7" />
      <rect className="fill-[#293456]" x="1232.1" y="577.7" width="43.9" height="153" />
      <rect className="fill-[#ebab6c]" x="1276" y="599.4" width="13.3" height="109.5" />
      <rect className="fill-[#d97767] opacity-40" x="1152.3" y="540.3" width="20.9" height="230.7" />
      <rect className="fill-[#b23918]" x="1140.2" y="524.9" width="62.9" height="15.4" />
      <rect className="fill-[#293456]" x="1140.2" y="477.3" width="62.9" height="47.6" />
      <rect className="fill-[#b23918]" x="1140.2" y="462.4" width="62.9" height="15.4" />
      <polygon className="fill-[#b23918]" points="1089.9 383.4 1249.2 383.4 1203 462.4 1140.2 462.4 1089.9 383.4" />
      <rect className="fill-[#293456]" x="1084.2" y="371.7" width="171.4" height="11.8" />
      <polygon className="fill-[#d97767] opacity-40" points="1110.4 383.4 1152.3 462.4 1166.1 462.4 1159.6 383.4 1110.4 383.4" />
   
      <path
        ref={humoSupRef}
        id="humosup"
        d="M38.04,137.51c29.75,51.25,77.8,82.84,134.44,46.42,30.12-19.37,5.19-22.2,11.61-38.69,31.19,55.43,83.42,51.68,135.4,27.08-3.5,46.76,45.57,67.39,85.11,52.23,14.56,46.2,47.12,37.02,49.33,39.65-5.77,13.88,4.26,29.5,16.44,35.79,25.82,13.33,45.67.34,62.87,1.93,1.49-2.04,22.19-8.16,19.34-43.52-1.75-21.69-37.71-62.3-45.46-57.06l-4.84-6.77c22.98-42.21,4.5-86.09-45.46-86.08-18.12-15.21-44.24-22.51-67.7-19.34-9.84-95.52-146.63-124.21-191.5-36.75-17.39-17.84-48.88-14.89-56.1,11.61-23.2-11.32-50.78-10.8-71.57,5.8-35.77-90.33-120.79,14.09-28.05,37.72-5.05,7.94-4.53,20.81-3.87,29.98h0Z"
        style={{ fill: '#d6dde7', opacity: 0.7 }}
      />

      {/* Humo inferior */}
      <path
        ref={humoInfRef}
        id="humoinf"
        d="M38.04,137.51c6.23,85.82,109.38,109.01,155.71,40.62,27.55,28.09,59.77,19.52,63.83,21.28,30.26,56.77,74.55,26.91,79.31,27.08,1.44.05,8.67,9.38,27.08,9.67,2.99,1.94,7.19,38.08,50.29,42.56-4.02,21.15,43.53,65.09,58.03,67.7,24.44,4.4,55.35-9.17,53.19-37.72,1.15-2.14,4.24-2.01,7.74-6.77-17.2-1.6-37.05,11.39-62.87-1.93-12.18-6.29-22.21-21.9-16.44-35.79-2.21-2.63-34.76,6.54-49.33-39.65-39.54,15.16-88.61-5.47-85.11-52.23-51.98,24.6-104.22,28.35-135.4-27.08-6.41,16.48,18.52,19.32-11.61,38.69-56.64,36.41-104.69,4.83-134.44-46.42h.02Z"
        style={{ fill: '#9fbed1', opacity: 0.3 }}
      />
   
   
    </g>
  );
};

export default CarrocTrain1;
