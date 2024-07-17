/** @jsxImportSource react */
import { qwikify$ } from '@builder.io/qwik-react';
import clsx from 'clsx';

interface HeroProps {
  className?: string;
}

export const Hero = qwikify$(({ className }: HeroProps) => {
  return (
    <div className={clsx('flex flex-col justify-center text-white', className)}>
      <div className="font-display-1 text-9xl font-bold uppercase">
        software engineer
      </div>
      <div className="self-end font-display-1 text-9xl font-bold uppercase">
        who love bringing
      </div>
      <div className="font-display-2 text-8xl uppercase">your ideas into</div>
      <div className="font-display-2 text-8xl uppercase">
        real world solution
      </div>
    </div>
  );
});
