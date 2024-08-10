/** @jsxImportSource react */
import { qwikify$ } from '@builder.io/qwik-react';
import clsx from 'clsx';

import arrowBendDownRight from '@/public/icons/arrow-bend-down-right.svg';

interface HeaderProps {
  className?: string;
}

export const Header = qwikify$<HeaderProps>(({ className }) => {
  return (
    <div
      className={clsx(
        'flex flex-row justify-between text-neutral-500',
        className,
      )}
    >
      <a href="/" className="font-logo">
        ezprojekt.dev
      </a>
      <div className="flex flex-row gap-x-8">
        <a href="#about">About</a>
        <a href="#projects">Projects</a>
      </div>
      <a
        href=""
        className="flex gap-x-2 rounded-full bg-neutral-800 px-4 py-2 text-white"
      >
        <img src={arrowBendDownRight.src} alt="" width={16} height={16} />
        Let's Connect
      </a>
    </div>
  );
});
