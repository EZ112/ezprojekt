/** @jsxImportSource react */
import { qwikify$ } from '@builder.io/qwik-react';
import clsx from 'clsx';
import { motion } from 'framer-motion';

import { heroVariants } from '@/utils/animationVariants';

interface HeroProps {
  className?: string;
}

export const Hero = qwikify$(
  ({ className }: HeroProps) => {
    return (
      <div className={clsx('flex justify-between text-white', className)}>
        <motion.div
          className="flex flex-col gap-y-2 overflow-hidden text-8xl"
          animate="title"
          variants={heroVariants}
        >
          <motion.div className="relative" variants={heroVariants}>
            Turning idea into
          </motion.div>
          <motion.div className="relative" variants={heroVariants}>
            real world solution
          </motion.div>
        </motion.div>
        <div className="flex w-1/4 flex-col justify-between overflow-hidden">
          <motion.div
            className="relative"
            animate="desc"
            variants={heroVariants}
          >
            When ideas face development challenge, my engineering expertise
            turns them into custom software and web solutions, blending
            creativity and technology to experiment freely and test demand,
            ensuring your vision meets market needs
          </motion.div>
          <a className="font-bold" href="#about">
            Explore more
          </a>
        </div>
      </div>
    );
  },
  { eagerness: 'visible' },
);
