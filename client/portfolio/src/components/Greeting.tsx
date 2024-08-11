/** @jsxImportSource react */
import { qwikify$ } from '@builder.io/qwik-react';
import { motion } from 'framer-motion';
import { useCallback } from 'react';

import { greetingVariants } from '@/utils/animationVariants';

const GREETINGS = ['Ciao', 'こんにちは', '안녕하세요', 'Hola', '你好', 'Hello'];

export const Greeting = qwikify$(
  () => {
    const onAnimationStart = useCallback(() => {
      document.body.classList.add('overflow-hidden');
      document.body.scrollTop = 0;
    }, []);

    const onAnimationEnd = useCallback(() => {
      document.body.classList.remove('overflow-hidden');
    }, []);

    return (
      <motion.div
        className="fixed top-0 z-10 flex h-screen w-full flex-col items-center justify-center overflow-hidden bg-stone-900 text-white"
        animate="container"
        variants={greetingVariants}
        onAnimationStart={onAnimationStart}
        onAnimationComplete={onAnimationEnd}
      >
        <div className="text-neutral-500">console.log(greeting)</div>
        <motion.div
          className="relative mt-2 h-1/6 w-full text-9xl"
          animate="item"
          variants={greetingVariants}
        >
          {GREETINGS.map((item, idx) => (
            <motion.div
              key={`greeting-${idx}`}
              className="absolute left-1/2 top-0 h-max -translate-x-1/2 text-nowrap text-center opacity-0"
              variants={greetingVariants}
              custom={idx}
            >
              {item}
            </motion.div>
          ))}
        </motion.div>
      </motion.div>
    );
  },
  { eagerness: 'load' },
);
