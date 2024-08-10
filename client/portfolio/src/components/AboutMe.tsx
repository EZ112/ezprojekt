/** @jsxImportSource react */
import { qwikify$ } from '@builder.io/qwik-react';
import clsx from 'clsx';

interface AboutMeProps {
  className?: string;
}

export const AboutMe = qwikify$(({ className }: AboutMeProps) => {
  return (
    <div
      id="about"
      className={clsx('font-body text-5xl text-white', className)}
    >
      My journey in software development started with a fascination for
      technology and a desire to understand how things work. With over the years
      I have experience with <i>typescript </i>and work with it on different
      project.
    </div>
  );
});
