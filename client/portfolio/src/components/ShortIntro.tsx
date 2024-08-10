/** @jsxImportSource react */
import { qwikify$ } from '@builder.io/qwik-react';
import { motion } from 'framer-motion';

import arrowDown from '@/public/icons/arrow-down.svg';

export const ShortIntro = qwikify$(
  () => {
    return (
      <div className="flex items-center justify-between capitalize">
        <div className="flex gap-x-2">
          <div className="flex gap-x-1 font-bold uppercase">
            /
            <motion.div
              className="overflow-hidden text-nowrap"
              animate={{
                width: [0, '100%'],
                transition: { duration: 1, delay: 1 },
              }}
            >
              izzi dzikri
            </motion.div>
            /
          </div>
          <div className="overflow-hidden">
            <motion.div
              animate={{
                left: ['-100%', 0],
                transition: { duration: 1, delay: 2 },
              }}
              className="relative"
            >
              <div className="flex items-center gap-x-2 text-neutral-500">
                <div>software engineer</div>
                <div className="size-1 rounded-sm bg-white" />
                <div>problem solver</div>
                <div className="size-1 rounded-sm bg-white" />
                <div>persistent</div>
                <div className="size-1 rounded-sm bg-white" />
                <div>adaptable</div>
              </div>
            </motion.div>
          </div>
        </div>
        <div className="flex gap-x-2">
          discover
          <img src={arrowDown.src} alt="" width={16} height={16} />
        </div>
      </div>
    );
  },
  { eagerness: 'visible' },
);
