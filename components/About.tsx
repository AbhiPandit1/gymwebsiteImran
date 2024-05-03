'use client';

import { FaUsers } from 'react-icons/fa';
import { IoIosPricetag } from 'react-icons/io';
import { FaDumbbell } from 'react-icons/fa6';

import { motion } from 'framer-motion';
import { fadeIn } from '@/lib/variants';
import Achievements from './Achievements';

const featured = [
  {
    icon: <FaUsers />,
    title: 'award-winning trainers',
    subtitle:
      ' About Lorem ipsum, dolor sit amet consectetur adipisicing elit. Modi soluta obcaecati commodi recusandae sit maxime expedita suscipit ipsum voluptatibus, quasi molestiae quae sint officia officiis ',
  },
  {
    icon: <IoIosPricetag />,
    title: 'excellent prices',
    subtitle:
      ' About Lorem ipsum, dolor sit amet consectetur adipisicing elit. Modi soluta obcaecati commodi recusandae sit maxime expedita suscipit ipsum voluptatibus, quasi molestiae quae sint officia officiis ',
  },
  {
    icon: <FaDumbbell />,
    title: 'modern equipment',
    subtitle:
      ' About Lorem ipsum, dolor sit amet consectetur adipisicing elit. Modi soluta obcaecati commodi recusandae sit maxime expedita suscipit ipsum voluptatibus, quasi molestiae quae sint officia officiis ',
  },
];

const About = () => {
  return (
    <section className="pt-8 pb-14 lg:pt-16 lg:pb-28" id="about">
      <div className="container mx-auto">
        <div className="flex flex-col items-center gap-2 mb-8">
          <h2 className="h2 text-center">About us</h2>
          <p className="max-w-[600px] mx-auto text-center">
            Lorem ipsum dolor sit amet consectetur, adipisicing elit.
            Voluptatem, tenetur! Quod porro, alias, eum officia ipsum esse
            aliquid nulla distinctio excepturi, fuga in.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-4 mb-16">
          {featured.map((feature, index) => {
            return (
              <div
                className="flex flex-col justify-center items-center gap-4 border p-10 "
                key={index}
              >
                <div className="text-4xl bg-primary-300 text-white w-[80px] h-[80px] rounded-full flex justify-center items-center">
                  {feature.icon}
                </div>
                <div className="flex flex-col justify-center items-center gap-2">
                  <h4 className="h4 text-accent">{feature.title}</h4>
                  <p>{feature.subtitle}</p>
                </div>
              </div>
            );
          })}
        </div>
        {/*Achievements */}
        <Achievements/>
      </div>
    </section>
  );
};

export default About;
