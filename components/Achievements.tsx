'use client';

import CountUp from 'react-countup';

import { FaBriefcase, FaClock, FaTrophy } from 'react-icons/fa';
import { ImUsers } from 'react-icons/im';

import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';

const stats = [
  {
    number: 19,
    icon: FaBriefcase,
    text: 'training courses',
  },
  {
    number: 879,
    icon: FaClock,
    text: 'working hours',
  },
  {
    number: 150,
    icon: ImUsers,
    text: 'happy customers',
  },
  {
    number: 9,
    icon: FaTrophy,
    text: 'International awards',
  },
];

const Achievements = () => {
  const ref = useRef(null);

  const isInView = useInView(ref);
  return (
    <section>
      <div className="container mx-auto ">
        <div className="grid grid-cols-2 md:grid-cols-4 md:gap-14 gap-16">
          {stats.map((items, index) => {
            return (
              <div
                className="flex flex-col justify-center items-center "
                key={index}
              >
                {/* circle outer */}
                <div
                  ref={ref}
                  className="border border-accent/40 w-[120px] h-[120px] mx-auto rounded-full p-1  mb-6"
                >
                  {/* circle Inner and count position */}
                  <div
                    className="border border-accent/30 w-full h-full flex items-center
                   justify-center text-5xl rounded-full"
                  >
                    {/*render the countup animation when animation is in view */}
                    {isInView && (
                      <CountUp start={0} end={items.number} duration={3} />
                    )}
                  </div>
                </div>
                <div className="flex flex-col justify-center items-center text-center">
                  <items.icon className="text-3xl mb-2" />
                  <h4 className="h4">{items.text}</h4>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Achievements;
