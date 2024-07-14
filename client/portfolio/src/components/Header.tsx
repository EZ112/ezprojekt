import { component$ } from '@builder.io/qwik';

import githubIcon from '@/public/icons/github.svg';
import linkedinIcon from '@/public/icons/linkedin.svg';

interface HeaderProps {
  className?: string;
}

export const Header = component$<HeaderProps>(({ className }) => {
  return (
    <div class={`flex flex-row justify-between text-neutral-500 ${className}`}>
      <a href="/" class="font-logo">
        ezprojekt.dev
      </a>
      <div class="flex flex-row gap-x-8">
        <a href="/about">About</a>
        <a href="/project">Project</a>
      </div>
      <div class="flex flex-row gap-x-2">
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
