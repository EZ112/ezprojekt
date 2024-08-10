/** @jsxImportSource react */
import { qwikify$ } from '@builder.io/qwik-react';
import { motion } from 'framer-motion';
import { useCallback, useState } from 'react';

const GREETINGS = ['Ciao', 'こんにちは', '안녕하세요', 'Hola', '你好', 'Hello'];

export const Greeting = qwikify$(
  () => {
    const [greetingIdx, setGreetingIdx] = useState<number>(0);
    let interval: ReturnType<typeof setInterval>;

    const onAnimationStart = useCallback(() => {
      document.body.classList.add('overflow-hidden');
      document.body.scrollTop = 0;

      interval = setInterval(() => {
        setGreetingIdx((prev) =>
          prev < GREETINGS.length - 1 ? prev + 1 : prev,
        );
      }, 300);
    }, []);

    const onAnimationEnd = useCallback(() => {
      document.body.classList.remove('overflow-hidden');
      clearInterval(interval);
    }, []);

    return (
      <motion.div
        className="fixed top-0 z-10 flex h-screen w-full flex-col items-center justify-center overflow-hidden bg-stone-900 text-white"
        animate={{
          height: 0,
          opacity: 0,
          transition: { delay: 2.8 },
          transitionEnd: { display: 'none' },
        }}
        onAnimationStart={onAnimationStart}
        onAnimationComplete={onAnimationEnd}
      >
        <div className="text-neutral-500">console.log(greeting)</div>
        <div className="mt-2 text-9xl">{GREETINGS[greetingIdx]}</div>
      </motion.div>
    );
  },
  { eagerness: 'visible' },
);
