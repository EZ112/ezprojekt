/** @jsxImportSource react */
import { qwikify$ } from '@builder.io/qwik-react';
import clsx from 'clsx';
import { motion } from 'framer-motion';
import { useCallback, useState } from 'react';

interface ProjectsProps {
  className?: string;
}

export const Projects = qwikify$(
  ({ className }: ProjectsProps) => {
    const [isHover, setIsHover] = useState<boolean>(false);

    const onMouseHover = useCallback(() => {
      setIsHover((prev) => !prev);
    }, []);

    return (
      <div id="projects" className={clsx('font-body text-white', className)}>
        <div className="mb-4 ml-16 text-neutral-500">Project name</div>
        <div
          className="border border-transparent border-y-neutral-500 py-6 pl-16 text-2xl"
          onMouseEnter={onMouseHover}
          onMouseLeave={onMouseHover}
        >
          Sonnet Generator
        </div>
        {isHover && (
          <motion.div
            animate={{ opacity: [0, 1] }}
            className={clsx(
              'fixed right-32 top-1/2 h-[35rem] w-80 -translate-y-1/2 rounded-2xl bg-white',
            )}
          >
            Title
          </motion.div>
        )}
      </div>
    );
  },
  { eagerness: 'visible' },
);
