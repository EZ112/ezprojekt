/** @jsxImportSource react */
import { qwikify$ } from '@builder.io/qwik-react';
import clsx from 'clsx';

import githubIcon from '@/public/icons/github.svg';
import linkedinIcon from '@/public/icons/linkedin.svg';

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
        <a href="/about">About</a>
        <a href="/project">Project</a>
      </div>
      <div className="flex flex-row gap-x-2">
        <a href="">
          <img src={linkedinIcon.src} alt="" width={32} height={32} />
        </a>
        <a href="">
          <img src={githubIcon.src} alt="" width={32} height={32} />
        </a>
      </div>
    </div>
  );
});
