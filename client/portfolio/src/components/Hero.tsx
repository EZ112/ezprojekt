/** @jsxImportSource react */
import { qwikify$ } from '@builder.io/qwik-react';
import clsx from 'clsx';

interface HeroProps {
  className?: string;
}

export const Hero = qwikify$(
  ({ className }: HeroProps) => {
    return (
      <div className={clsx('flex justify-between text-white', className)}>
        <div className="flex flex-col gap-y-2 text-8xl">
          <div>Turning idea into</div>
          <div>real world solution</div>
        </div>
        <div className="flex w-1/4 flex-col justify-between">
          <div>
            When ideas face development challenge, my engineering expertise
            turns them into custom software and web solutions, blending
            creativity and technology to experiment freely and test demand,
            ensuring your vision meets market needs
          </div>
          <a className="font-bold" href="#about">
            Explore more
          </a>
        </div>
      </div>
    );
  },
  { eagerness: 'visible' },
);
