import { component$ } from '@builder.io/qwik';

interface HeroProps {
  className?: string;
}

export const Hero = component$<HeroProps>(({ className }) => {
  return (
    <div class={`flex flex-col justify-center text-white ${className}`}>
      <div class="font-display-1 text-9xl font-bold uppercase">
        software engineer
      </div>
      <div class="self-end font-display-1 text-9xl font-bold uppercase">
        who love bringing
      </div>
      <div class="font-display-2 text-8xl uppercase">your ideas into</div>
      <div class="font-display-2 text-8xl uppercase">real world solution</div>
    </div>
  );
});
